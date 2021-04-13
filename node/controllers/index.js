const Router = require('koa-router');
const test = require('./test');
const upload = require('./upload')
const posterior = require('./posterior')

const router = new Router();

// 指定一个url匹配
router.use('/', async (ctx,next) => {
    console.log(ctx.request.body)
    next()
})

router.use('/test', test.routes());
router.use('/upload', upload.routes())
router.use('/posterior', posterior.routes())

module.exports = router;