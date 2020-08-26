const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const DB_CONNECTION = require('./config/db.config');
require('dotenv').config();

// Setup server port
const PORT = process.env.PORT || 5000;

var app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.json({ message: "Welcome to Fixi application." });
})

// API to get all users in our user table from DB.
app.get('/all-users', (req, res) => {
    DB_CONNECTION.query('SELECT * FROM users', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

// adding a user to database.
// app.post('/add-new-user', (req, res) => {
//     console.log(req.body)
//     var firstName = req.body.first_name;
//     var lastName = req.body.last_name;
//     var email = req.body.email;
//     var phone = req.body.phone;
//     var password = req.body.password;
//     var active = 1;
//     var verified = 0;
//     DB_CONNECTION.query(`INSERT INTO users (
//         user_first_name,
//          user_last_name,
//           user_email,
//            user_phone_number,
//             user_password,
//              user_active,
//               user_verified) VALUES (
//                   '${firstName}',
//                    '${lastName}',
//                    '${email}',
//                    '${phone}',
//                    '${password}',
//                    '${active}',
//                    '${verified}'
//               )`, (err, result) => {
//         if (err) throw err;
//         console.log
//         console.log('1 record inserted')
//     })
//     res.send('inserted 1 :D')
// })

require('./routes/user.routes')(app)

app.listen(PORT, () => {
    console.log(`App listening on ${PORT} number! '\n' On this link http://localhost:${PORT}`)
})