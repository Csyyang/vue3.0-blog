const Koa = require('koa');
const session = require("koa-session");

const bodyParser = require('koa-bodyparser');
const router = require('./controllers/index');
// const routers = require('./utill/injectControllers') //创建router，并自动注入controllers
const Static = require('koa-static')
const session_configs = require('./config/session');//session配置文件


const app = new Koa();

app.keys = session_configs.session_signed_key;
app.use(session(session_configs.session_config, app))//使用session

app.on('error', async (err) => {//捕获全局错误

    // TODO logger errStack
    console.error(err);
});


app.use(Static(__dirname, 'static')).use(bodyParser()).use(router.routes()).listen(3000);