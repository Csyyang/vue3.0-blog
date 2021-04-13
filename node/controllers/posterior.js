const router = require('koa-router')();


router.post('/login', async ctx => {
    const { usr, pass } = ctx.request.body
    if (usr === 'admin' && pass === 'admin') {
        ctx.response.body = {
            code: '00',
            message: 'success'
        }
    } else {
        ctx.response.body = {
            code: '01',
            message: '密码错误'
        }
    }
})


module.exports = router