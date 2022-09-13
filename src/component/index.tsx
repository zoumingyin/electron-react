/* eslint-disable @typescript-eslint/naming-convention */
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

import { SelectData, SelectInput } from './common'

interface Message {
  type: string
  data: string[]
}
const workdEnvs = [
  { value: '192.168.21.24', name: 'cd' },
  { value: '31.128.2.200', name: 'sd' },
] as SelectData[]

const workSpace = {
  cd: ['donghuan', 'huzhijun'],
  sd: ['nexp-test', 'nexp'],
}
export const Main = () => {
  const [data, setData] = useState<Record<string, string[]>>()
  const [front, setFront] = useState<string[]>()
  const [uilet, setUlet] = useState('')
  const [env, setEnv] = useState<{ value: string; name: string }>({ value: '192.168.21.24', name: 'cd' })
  const [workName, setWorkName] = useState('huzhijun')
  const [mode, setMode] = useState('ui')
  const [sendMode, setSendMode] = useState<string>('dev')
  const [project, setProject] = useState<string[]>([])
  const [message, setMessage] = useState<Message>({ type: '', data: [] })
  const wss = useRef(new WebSocket('ws://127.0.0.1:8181'))
  const msgRef = useRef<Message>({ type: '', data: [] })
  useEffect(() => {
    const ws = wss.current
    ws.onopen = () => {
      ws.send(JSON.stringify({ type: 'getProject' }))
    }
    ws.onmessage = res => {
      const msg = JSON.parse(res.data)
      switch (msg.type) {
        case 'getProject':
          setFront(Object.keys(msg.data))
          setData(msg.data)
          break
        case 'build':
          console.log(JSON.stringify(msg.data.data))
          msgRef.current.type = msg.data.type
          msgRef.current.data.push(msg.data.data)
          setMessage({
            type: msg.data.type,
            data: [...message.data, msg.data.data],
          })
          break

        default:
          break
      }
    }
    ws.onerror = res => {
      console.log(res)
    }
    ws.onclose = res => {
      console.log(res)
    }
  }, [message])
  const ws = wss.current
  const sendMsg = (msg: { type: string; param: Record<string, any> }) => {
    ws.send(JSON.stringify(msg))
  }
  return (
    <Box p={2} width={500}>
      <Box display='flex' gap={2}>
        <SelectInput
          onChange={val => {
            const res = workdEnvs?.find(env => env.value === val)
            if (res) {
              setEnv(res)
            }
          }}
          selectData={workdEnvs}
          title='请选择环境'
          value={env?.value ?? ''}
        />
        <SelectInput
          onChange={val => {
            setWorkName(val as string)
          }}
          selectData={workSpace[env.name]?.map((item: string) => {
            return { name: item, value: item }
          })}
          title='请选择工作空间'
          value={workName}
        />
      </Box>
      <Box display='flex' gap={2} mt={2}>
        <SelectInput
          onChange={val => {
            setMode(val as string)
          }}
          selectData={['ui', 'meta'].map((item: string) => {
            return { name: item, value: item }
          })}
          title='请选择编译方式'
          value={mode}
        />
        <SelectInput
          onChange={val => {
            setSendMode(val as string)
          }}
          selectData={
            ['dev', 'production'].map((item: string) => {
              return { name: item, value: item }
            }) ?? []
          }
          title='请选择模式'
          value={sendMode}
        />
        <Button
          onClick={() => {
            sendMsg({
              type: 'build',
              param: { env: env.value, mode, project, uilet, workName, sendMode },
            })
          }}
        >
          编译
        </Button>
      </Box>
      <FormGroup
        sx={{
          flexDirection: 'row',
        }}
      >
        {front?.map((item: string, idx) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={project.some(pro => pro === item)}
                onChange={e => {
                  const isCheck = project.some(pro => pro === item)
                  const newArr = JSON.parse(JSON.stringify(project))
                  if (isCheck) {
                    newArr.splice(
                      newArr.findIndex((pro: string) => pro === item),
                      1,
                    )
                    setProject(newArr)
                  } else {
                    setProject([...project, item])
                  }
                }}
              />
            }
            key={idx}
            label={item}
            sx={{
              '& > span': {
                padding: '.3rem 0',
              },
            }}
          />
        ))}
        <FormControlLabel
          control={
            <Checkbox
              checked={front === project}
              onChange={e => {
                const { checked } = e.target
                if (!front) return
                setProject(checked ? front : [])
              }}
            />
          }
          label='全选'
          sx={{
            '& > span': {
              padding: '.3rem 0',
            },
          }}
        />
      </FormGroup>
      <Box hidden={mode === 'meta'}>
        <FormControl>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='female'
            name='radio-buttons-group'
            onChange={event => {
              setUlet(event.target.value)
            }}
            value={uilet}
          >
            {data?.[project[0]]?.map(front => (
              <FormControlLabel control={<Radio />} key={front} label={front} value={front} />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
      <Box bgcolor='#282c34' color='#989d90' hidden={!message.type} p={1}>
        <code>
          {msgRef.current.type}
          {msgRef.current.data.map((msg, index) => (
            <Box
              color={msg.includes('\u001b[39m') ? 'green' : ''}
              component='div'
              dangerouslySetInnerHTML={{ __html: msg }}
              key={index}
              sx={{ whiteSpace: 'pre-wrap' }}
            />
          ))}
        </code>
      </Box>
    </Box>
  )
}
