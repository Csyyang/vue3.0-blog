
const Router = require('koa-router');
const router = new Router()
const mysql = require('../mysql/index')
const upload = require('../utill/upload')



router.post('/testUpdate', upload.single('file'), async ctx => {
  const data = await mysql.queryAll('article')
  ctx.response.body = {
    code: '00',
    message: data
  }
})


module.exports = router

