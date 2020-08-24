const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express();

app.use(cors());
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello Wolrd!!!!!')
})

// Creating the credientials to connect to our DB. 
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demodb'
})

// Connecting to our Db and checking errors.
connection.connect((err) => {
    if (!err)
        console.log('Connection Established Successfully');
    else
        console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));

});

// API to get all users in our user table from DB.
app.get('/all-users', (req, res) => {
    connection.query('SELECT * FROM users', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

// adding a user to database.
// app.post('/add-new-user', (req, res) => {
//     connection.query
// })


app.listen(PORT, () => {
    console.log(`App listening on ${PORT} number!`)
})