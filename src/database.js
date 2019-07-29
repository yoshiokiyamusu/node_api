const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
        host: 'fugfonv8odxxolj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'cfvc0xg9mms2s789',
        password: 'zcyp2fux4q42n6rm',
        database: 'm6ul1nyhger85ik5',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
/*
CREATE DATABASE IF NOT EXISTS company;

USE company;

CREATE TABLE employee (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(11) DEFAULT NULL,
  PRIMARY KEY(id)
);

DESCRIBE employee;

INSERT INTO employee values
  (1, 'Ryan Ray', 20000),
  (2, 'Joe McMillan', 40000),
  (3, 'John Carter', 50000);

SELECT * FROM employee;

*/
