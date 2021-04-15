const router = require('koa-router')();
const mysql = require('../mysql/index')

function codeURLS(obj) {
    obj.forEach(element => {
        element.article_context = decodeURIComponent(element.article_context)

    });
}

router.post('/getArticles', async ctx => {
    const data = await mysql.queryAll('article')

    codeURLS(data)

    ctx.body = {
        code: '00',
        message: 'success',
        context: data
    }
})

router.post('/typeArticles', async ctx => {
    const type = ctx.request.body.type
    const data = await mysql.queryWhere('article', "article_type=" + type)
    codeURLS(data)

    ctx.body = {
        code: '00',
        message: 'success',
        context: data
    }
})


module.exports = router