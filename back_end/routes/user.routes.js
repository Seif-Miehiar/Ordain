module.exports = app => {
    const users = require('../controllers/user.controller')

    // Create a new Customer
    app.post("/add-new-user", users.create);

    // Retrieve all Customers
    app.get("/all-users", users.findAll);

    app.get('/check-user/:user_email', users.check_user);

}