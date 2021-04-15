const router = require('koa-router')();
const upload = require('../utill/upload')


router.post('/test_sql_all', upload.single('file'), async (ctx) => {
    console.log(ctx.req)
    ctx.response.body = {
        code: '00',
        message: {
            url: 'image/' + ctx.req.file.filename,
            name: ctx.req.file.filename
        },
    }
})

router.post('/testUpdate', async ctx => {
    console.log(ctx.request.body)
    ctx.response.body = {
        code: '00',
        message: 'success'
    }
})

module.exports = router;
