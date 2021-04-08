const fs = require('fs');
const router = require('koa-router')();
const path = require('path')

function setControllers(router, mapping) {
  for (var url in mapping) {
    let path;
    if (url.startsWith('GET ')) {
      path = url.substring(4);
      router.get(path, mapping[url]);
    } else if (url.startsWith('POST ')) {
      path = url.substring(5);
      router.post(path, mapping[url]);
    } else {
      console.log(`err URL: ${url}`);
    }
  }
}
function getControllersJS(router) {
  var files = fs.readdirSync(path.resolve(__dirname ,'../controllers'));
  var js_files = files.filter((f) => {
    return f.endsWith('.js');
  });

  for (var f of js_files) {
    let mapping = require(path.resolve(__dirname ,'../controllers/' + f));
    setControllers(router, mapping);
  }
}
module.exports = function () {
  getControllersJS(router);
  return router.routes();
}
