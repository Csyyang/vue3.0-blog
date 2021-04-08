const mysql = require('mysql');
const config = require('./config');

var pool = mysql.createPool({
  host: config.HOST,
  user: config.USERNAME,
  password: config.PASSWORD,
  database: config.DATABASE,
  port: config.PORT
});

function query(sql) {
  return new Promise((resolve, reject) => {
    pool.query(sql, (err, results) => {
      if (err) {
        reject(err)
      } else {
        resolve(results);
      }
    })
  })
}

class Mysql {
  queryAll(dataShee) {
    let sql = `SELECT * from  ${dataShee}`;
    return query(sql);
  }
  queryWhere(dataShee, condition) {
    let sql = `SELECT * from ${dataShee} WHERE ${condition}`;
    return query(sql);
  }
  insert(dataShee, keys, values) {
    let sql = `INSERT into ${dataShee} ${keys} values ${values}`
    return query(sql);
  }
  update(dataShee, condition, newValue) {
    let sql = `UPDATE ${dataShee} SET ${newValue} WHERE ${condition}`;
    return query(sql);
  }
  delete(dataShee, condition) {
    let sql = `DELETE FROM ${dataShee} WHERE ${condition}`;
    console.log(sql)
    return query(sql)
  }
}
module.exports = new Mysql()