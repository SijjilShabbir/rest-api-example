const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const PeopleRoutes = require("./routes/people");
var app = express();
app.use(bodyParser.json());
app.use("/people", PeopleRoutes);
app.post('/', function (req, res) {
    var postData = req.body;
    mysqlConnection.query('INSERT INTO employees', postData, function (err, results, fields) {
        if (!err) {
            res.end(JSON.stringify(results));
        }
        else {
            console.log(err);
        }
    });
});
app.listen(3000);
