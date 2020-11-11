const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");



Router.get("/", (req, res) => {
   
    mysqlConnection.query("CREATE DATABASE employee", function (err, result) {
        if (!err) {
            console.log("Database created");
        }
        else {
            console.log(err);
        }

    }); 
    mysqlConnection.query("SELECT * from people", function (err, rows, fields) {
        if (!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    });

    var table = "CREATE TABLE employees (id INT, name VARCHAR(255), age INT(3), city VARCHAR(255))";
    mysqlConnection.query(table, function (err, result) {
        if (!err) {
            console.log("Table created");
        }
        else {
            console.log(err);
        }
    });  

    
    var insert = "INSERT INTO employees (id, name, age, city) VALUES ('1', 'John', '27', 'New York')";
        mysqlConnection.query(insert, function (err, result) {
            if (!err) {
                console.log("1 record inserted");
            }
            else {
                console.log(err);
            }
        }); 

    var sql = "ALTER TABLE employees ADD COLUMN salary INT(10)";
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            console.log("Table altered");
        }
        else {
            console.log(err);
        }
    });  

    var cql = "UPDATE employees SET city = 'Brazil' WHERE city = 'New York'";
    mysqlConnection.query(cql, function (err, result) {
        if (!err) {
            console.log(result.affectedRows + " record(s) updated");
        }
        else {
            console.log(err);
        }
    });

    var dd = "DELETE FROM employees WHERE city = 'Brazil'";
    mysqlConnection.query(dd, function (err, result) {
        if (!err) {
            console.log("Number of records deleted: " + result.affectedRows);
        }
        else {
            console.log(err);
        }
        
    });  

    mysqlConnection.query("SELECT * FROM employees", function (err, result) {
        if (!err) {
            console.log(result);
        }
        else {
            console.log(err);
        }
        
    }); 

    var tdd = "DROP TABLE employees";
    mysqlConnection.query(tdd, function (err, result) {
        if (!err) {
            console.log("Table deleted");
        }
        else {
            console.log(err);
        }
        
    });  
   
});

module.exports = Router;