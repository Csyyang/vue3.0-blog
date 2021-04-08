const testUpdate = async ctx => {
    ctx.response.body = {
      code: '00',
      message: 'success'
    }
  }

  module.exports = {
    'POST /test/testUpdate': testUpdate
  }