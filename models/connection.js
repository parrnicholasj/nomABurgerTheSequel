const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "umabrisfx8afs3ja.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "x6sp0cfbn6nflzbl",
    password: process.env.db_pw,
    database: "wpgk8ym70x7q0e5z"
  });
}

module.exports = connection;
