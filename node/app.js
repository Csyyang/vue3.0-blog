const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const routers = require('./utill/injectControllers') //创建router，并自动注入controllers
const Static = require('koa-static')

const app = new Koa();



app.on('error', async (err) => {//捕获全局错误

    // TODO logger errStack
    console.log(err.errno + ':' + err.sqlMessage);
});


app.use(Static(__dirname, 'static')).use(bodyParser()).use(routers()).listen(3000);