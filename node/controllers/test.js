const mysql = require('../mysql/index')

const testUpdate = async ctx => {
  console.log(ctx.request.body)
    ctx.response.body = {
      code: '00',
      message: 'success'
    }
  }

  var test_sql_all = async ctx => {
    let data = await mysql.queryAll("img_list");
    ctx.response.body = {
      code: '00',
      data: data,
      message: 'success'
    }
  }

  module.exports = {
    'POST /test/testUpdate': testUpdate,
    'POST /test/test_sql_all': test_sql_all
  }

