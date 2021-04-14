const Router = require('koa-router');
const test = require('./test');
const upload = require('./upload')
const posterior = require('./posterior')

const router = new Router();


router.use('/', async (ctx,next) => {
    console.log(ctx.session.user)

    console.log(ctx.request.body)
    next()
})

router.use('/test', test.routes());
router.use('/upload', upload.routes())
router.use('/api/posterior', posterior.routes())

module.exports = router;