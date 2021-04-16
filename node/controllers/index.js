const Router = require('koa-router');
const test = require('./test');
const upload = require('./upload')
const posterior = require('./posterior')
const front = require('./front')
const fs = require('fs')
const path = require('path')

const router = new Router();


// router.use('/', async (ctx,next) => {
//     // console.log(ctx.session.user)

//     // console.log(ctx.request.body)
//     next()
// })
router.get('/', async ctx => {
    ctx.type = 'html'
    ctx.body = fs.createReadStream(path.resolve(__dirname, '../static/dist/index.html'))
})
router.use('/test', test.routes());
router.use('/upload', upload.routes())
router.use('/api/front', front.routes())
router.use('/api/posterior', posterior.routes())

module.exports = router;