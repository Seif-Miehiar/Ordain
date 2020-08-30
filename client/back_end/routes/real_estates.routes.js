module.exports = app => {
    const products = require('../controllers/real_estates.controller');

    // create a new real estate product.
    app.post('/product', products.create)

}