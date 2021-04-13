const multer = require('koa-multer');
const router = require('koa-router')();

var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        cb(null, 'static/image/')
    },
    //修改文件名称
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
        cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})

var upload = multer({ storage: storage });

router.post('/test_sql_all', upload.single('file'), async ctx => {
    console.log(233)
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
