const router = require('koa-router')();
const upload = require('../utill/upload')
const mysql = require('../mysql/index')


// router.use('/', async (ctx, next) => {
//     if (ctx.request.url.endsWith('login') || ctx.session.user === 'admin') {
//         await next()
//     } else {
//         ctx.response.body = {
//             code: '01',
//             message: '权限不足'
//         }
//     }

// })

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

router.post('/updateArticl', upload.single('file'), async ctx => {
    const path = `http://yangyangcsy.cn/static/image/${ctx.req.file.filename}`
    const body = ctx.req.body

    let dataShee = 'article';
    let keys = "(article_type,article_context,article_date,article_title,article_url,article_desc)";
    let time = new Date().toLocaleDateString().replace(/\//g, "-");
    let values = `("${body.type}","${encodeURIComponent(body.context)}",'${time}',"${body.title}","${path}","这是描述")`;
    await mysql.insert(dataShee, keys, values)
  
    ctx.response.body = {
        code: '00',
        message: 'srccess',
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