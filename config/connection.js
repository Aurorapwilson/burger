let mysql = require("mysql");

let connection;



//IF I'm on the HEROKU database I'm going to connect using this CONNECTION OBJECT
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);

// ELSe Use my local database connection
}else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burgers234_db"
      });
}




connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
