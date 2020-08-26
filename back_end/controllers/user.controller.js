const User = require('../models/user.model');

// Create and Save a new User.
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }

    // Create a User
    const user = new User({
        user_first_name: req.body.user_first_name,
        user_last_name: req.body.user_last_name,
        user_email: req.body.user_email,
        user_phone_number: req.body.user_phone_number,
        user_password: req.body.user_password,
        user_active: req.body.user_active,
        user_verified: req.body.user_verified
    })

    // Save User in database.
    User.create(user, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        } else res.send(data);
    })
}