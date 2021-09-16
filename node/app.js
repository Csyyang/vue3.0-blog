const Koa = require('koa');
const session = require("koa-session");
const bodyParser = require('koa-bodyparser');
const router = require('./controllers/index');
const Static = require('koa-static')
const session_configs = require('./config/session');//session配置文件
const path = require('path')


const app = new Koa();

app.keys = session_configs.session_signed_key;
app.use(session(session_configs.session_config, app))//使用session

app.on('error', async (err) => {//捕获全局错误

    // TODO logger errStack
    console.error(err);
});
app.use(Static(
    path.join(__dirname, './static'), {
        maxage: 3600 * 1000
    }
))

app.use(bodyParser()).use(router.routes()).listen(8081);