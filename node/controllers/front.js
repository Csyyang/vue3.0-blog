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


module.exports = router