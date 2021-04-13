// const mysql = require('../mysql/index')
const Router = require('koa-router');
const router = new Router()

router.post('/testUpdate',async ctx => {
    console.log(ctx.request.body)
      ctx.response.body = {
        code: '00',
        message: 'success'
      }
    })


module.exports = router

