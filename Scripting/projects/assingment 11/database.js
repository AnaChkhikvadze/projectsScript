const { createPool } = require('mysql')

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'incorrect',
    database: 'creatingbases',
    connectionLimit: 10
})

pool.query(`CREATE TABLE users(id INT, username varchar(20), job varchar(26))`, function (err, result, fields) {
    if (err) {
        return console.log(err);
    }
    return console.log("Congrats, table created!!!");

})

pool.query(`CREATE TABLE product(id INT, description varchar(20), color varchar(26))`, function (err, result, fields) {
    if (err) {
        return console.log(err);
    }
    return console.log("Congrats, table created!!!");

})

pool.query(`CREATE TABLE price(id INT, price INT, currency varchar(26))`, function (err, result, fields) {
    if (err) {
        return console.log(err);
    }
    return console.log("Congrats, table created!!!");

})


//create users table, product table, price table