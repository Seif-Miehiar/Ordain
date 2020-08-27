const bcrypt = require('bcrypt');
const saltRounds = 10;
const DB_CONNECTION = require('../config/db.config')

const User = function(user) {

    this.user_first_name = user.user_first_name;
    this.user_last_name = user.user_last_name;
    this.user_email = user.user_email;
    this.user_phone_number = user.user_phone_number;
    this.user_password = user.user_password;
    this.user_active = user.user_active;
    this.user_verified = user.user_verified;
}

// Create a user and save it in database.
User.create = (newUser, result) => {
    DB_CONNECTION.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Created User: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser })
    })
}

// Get all users from Database 
User.getAll = result => {
    DB_CONNECTION.query('SELECT * FROM users', (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("users: ", res);
        result(null, res);
    })
}

// Check user by email
User.findByEmail = (user, result) => {
    DB_CONNECTION.query(`SELECT * FROM users WHERE user_email = ${user}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.length) {
            console.log("Found a user: ", res[0])
            result(null, res[0]);
            return;
        }

        //if user is not found!
        result({ kind: "Not found" }, null);
    })
}

// Find user by ID.
User.findById = (userId, result) => {
    DB_CONNECTION.query(`SELECT * FROM users WHERE user_ID = ${userId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found customer: ", res[0]);
            result(null, res[0]);
            return;
        }
        // if user not found with ID.
        result({ kind: "not_found" }, null);
    })
}

// User.updateById

module.exports = User;