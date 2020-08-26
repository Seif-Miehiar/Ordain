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
module.exports = User