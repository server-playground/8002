'use strict'

const koa = require('koa')

const app = new koa()

app.use((ctx) => {
  console.log('')
  console.log(ctx.request['href'])
  console.log(ctx.request['header']['user-agent'])
  ctx.body = 'hello world'
})

app.listen(8002)

console.log('server is running on "http://localhost:8002/"')
