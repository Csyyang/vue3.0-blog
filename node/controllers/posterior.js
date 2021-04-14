const router = require('koa-router')();

router.use('/', async (ctx,next) => {
    console.log(ctx.request)
    if(ctx.request.url.endsWith('login'))  next()
    if(ctx.session.user === 'admin') next()
    ctx.response.body = {
        code: '01',
        message: '权限不足'
    }

})

router.post('/login', async ctx => {
    const { user, password } = ctx.request.body
    if (user === 'admin' && password === 'admin') {
        ctx.session.user = user;
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

router.post('/test', async ctx => {
    const { user, password } = ctx.request.body
    if (user === 'admin' && password === 'admin') {
        ctx.session.user = user;
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