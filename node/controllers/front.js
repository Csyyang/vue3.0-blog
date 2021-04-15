const router = require('koa-router')();
const mysql = require('../mysql/index')

router.post('/getArticles',  async ctx => {
    const data = await mysql.queryAll('article')

    data.map(element => {
        element.article_context = decodeURIComponent(element.article_context)

        return element
    });

    ctx.body = {
        code: '00',
        message: data
    }
})

router.post('/typeArticles', async ctx => {
    const type = ctx.request.body.type
    const data = await mysql.queryWhere('article',"article_type=" + type)

    ctx.body = {
        code: '00',
        message: 'success',
        context: data
    }
})


module.exports = router