let sql = require('./index')({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mysql'
});

(async function () {
  console.log(await sql`select * from  user where User=${"root"}`);
})();
