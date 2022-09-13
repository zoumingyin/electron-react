// 引入electron并创建一个Browserwindow

const exec = require('child_process').exec
const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
var fs = require('fs-extra')
const http = require('http')
const server = http.createServer()
var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({ port: 8181 })
var allProcess = []
var excuteCmd = function (cmd, cb) {
  return new Promise((resolve, reject) => {
    var workerProcess = exec(cmd)
    allProcess.push(workerProcess)
    var type = cmd + Date.now()
    workerProcess.stdout.on('data', function (data) {
      cb && cb(type, data)
    })

    workerProcess.stderr.on('data', function (data) {
      cb && cb(type, data)
    })

    workerProcess.on('close', function (code) {
      resolve(code)
      console.log(
        '##',
        JSON.stringify({
          type,
          data: 'process end' + code,
        }),
      )
      allProcess = allProcess.filter(item => item !== workerProcess)
    })
  })
}
// 保持window对象的全局引用,避免JavaScript对象被垃圾回收时,窗口被自动关闭.
let mainWindow
function createWindow() {
  //创建浏览器窗口,宽高自定义具体大小你开心就好
  mainWindow = new BrowserWindow({ width: 550, height: 1000 })

  /*
   * 加载应用-----  electron-quick-start中默认的加载入口
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
  */
  // 加载应用----适用于 react 项目
  // mainWindow.loadURL('http://localhost:3000')
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, './build/index.html'),
      protocol: 'file:',
      slashes: true,
    }),
  )

  // 打开开发者工具，默认不打开
  // mainWindow.webContents.openDevTools();

  // 关闭window时触发下列事件.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.on('ready', createWindow)

// 所有窗口关闭时退出应用.
app.on('window-all-closed', function () {
  // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
  if (mainWindow === null) {
    createWindow()
  }
})
const getProject = () => {
  var readDir = fs.readdirSync('E:/git/nexp/webqianduan/nexp-workspace-dev-2.2')
  var fronts = readDir.filter(name => name.endsWith('-front') || name.endsWith('ui-lib'))
  const nexpFronts = fronts.reduce((result, item) => {
    const config = fs
      .readFileSync(path.resolve('E:/git/nexp/webqianduan/nexp-workspace-dev-2.2/', item, './bundle.config.ts'))
      .toString()
    result[item.slice(5, -6) || 'ui-lib'] = config
    return result
  }, {})
  return nexpFronts
}
const getImodelIds = uilet => {
  var readDir = fs.readdirSync('E:/git/nexp/webqianduan/nexp-workspace-dev-2.2/nexp.imodel-ids/ids')
  let ids = {}
  for (const item of readDir) {
    const config = fs.readJsonSync('E:/git/nexp/webqianduan/nexp-workspace-dev-2.2/nexp.imodel-ids/ids/' + item)
    const id = config
    for (let k in id) {
      let value = id[k]
      id[value] = k
      delete id[k]
    }
    ids = { ...ids, ...id }
  }
  return ids[uilet]
}
server.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' })
})
server.listen(80, () => {
  console.log('http server runing at http://127.0.0.1')
  // 你可以在这个脚本中续写或者使用require引入独立的js文件.
})
wss.on('connection', function (ws) {
  console.log('client connected')
  ws.on('message', function (message) {
    console.log(message.toString())
    const resData = JSON.parse(message.toString())
    const { type, param } = resData
    switch (type) {
      case 'getProject':
        const nexpFronts = getProject()
        const jsPackages = Object.keys(nexpFronts).reduce((result, repo) => {
          result[repo] = nexpFronts[repo].match(/\[IDSC\.(.*)?]/g).map(item => item.slice(6, -1))
          return result
        }, {})
        ws.send(JSON.stringify({ type, data: jsPackages }))
        break

      case 'build': {
        if (!param.project) {
          ws.send('请选择nexp前端front项目')
        }
        if (param.mode === 'meta') {
          const code = excuteCmd(
            `cd E:/git/nexp/webqianduan/nexp-workspace-dev-2.2 && yarn build-model -e ws://${
              param.env ?? '192.168.21.24'
            } -s 32080 --service-path /${param.workName ?? 'huzhijun'}/imodel/service ${param.project.join(' ')}`,
            (buildType, data) => {
              ws.send(JSON.stringify({ type, data: { data, type: buildType } }))
            },
          )
        } else if (param.mode === 'ui') {
          const code = excuteCmd(
            `cd E:/git/nexp/webqianduan/nexp-workspace-dev-2.2 &&  yarn build-ui -e http://${
              param.env ?? '192.168.21.24'
            } -s 32080 --service-path /${param.workName ?? 'huzhijun'}/imodel/http ${param.project.join(' ')} ${
              param.uilet ? '--scripts ' + getImodelIds(param.uilet) : ''
            }
              ${param.sendMode === 'production' ? '--env production' : ''}`,
            (buildType, data) => {
              ws.send(JSON.stringify({ type, data: { data, type: buildType } }))
            },
          )
        }
        break
      }
      default:
        ws.send(JSON.stringify(resData))
        break
    }
  })
})
