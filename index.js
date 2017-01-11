var mysql2 = require('mysql2/promise');

var connection;

function connect(config) {
  return async function sql(template, ...args) {
    if (connection) {
      return connection.execute(template.join('?'), args);
    } else {
      connection = await mysql2.createConnection(config);
      return sql(template, ...args);
    }
  }
}

module.exports = connect;
