module.exports = app => {
    const users = require('../controllers/user.controller')

    // Create a new Customer
    app.post("/add-new-user", users.create);

}