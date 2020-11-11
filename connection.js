const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "demo123",
    //database: "rest",
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("CONNECTED");
    }
    else {
        console.log("CONNECTION FAILED");
    }
});
module.exports = mysqlConnection;