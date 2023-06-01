var mysql = require('mysql');
var con = mysql.createConnection({ host: "localhost", user: "yourusername", password: "yourpassword", database: "mybases" });
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO firstname (FirstName) VALUES ('Jane')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO lastname (LastName) VALUES ('Doe')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});