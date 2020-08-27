module.exports = app => {
    const users = require('../controllers/user.controller')

    // Create a new user
    app.post("/add-new-user", users.create);

    // Retrieve all user
    app.get("/all-users", users.findAll);

    app.get('/check-user/:user_email', users.check_user);

    //retrieve a user by ID.
    app.get('/all-users/:user_ID', users.findOne);

}