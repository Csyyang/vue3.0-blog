const Router = require('koa-router');
const test = require('./test');
const upload = require('./upload')

const router = new Router();

// 指定一个url匹配
router.get('/', async (ctx) => {
    ctx.type = 'html';
    ctx.body = '<h1>hello world!</h1>';
})

router.use('/test', test.routes());
router.use('/upload', upload.routes())

module.exports = router;