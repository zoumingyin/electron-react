let http = require("http");
const url = require("url");
const querystring = require("querystring");
var fs = require("fs-extra");
const path = require("path");
// 创建服务器
let server = http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); //可设置允许跨域地址
    res.setHeader("Content-Type", "application/json;charset=utf-8"); // 设置utf-8字符
    // res.end('服务器在页面上响应显示的内容')
  })
  .listen(80);

server.on("request", (req, res) => {
  let urlStr = url.parse(req.url);

  switch (urlStr.pathname) {
    case "/getProject":
      res.end("login");
      break;
    case "/login/check":
      if (req.method.toUpperCase() === "POST") {
        debugger;
        console.log(
          "🚀 ~ file: service.js ~ line 20 ~ server.on ~ req.method.toUpperCase()",
          req.method.toUpperCase()
        );
        let str = "";
        // 接收数据
        req.on("data", (chunk) => {
          str += chunk;
        });
        // 接收数据完成
        req.on("end", () => {
          console.log(str); // username=zhang&password=pkkjh123
          console.log(querystring.parse(str)); // {username: 'zhang', password: 'pkkjh123'}
        });
      }
      break;
    default:
      res.end("404");
      break;
  }
});


 
 
