module.exports = app => {
    const products = require('../controllers/real_estates.controller');

    // create a new real estate product.
    app.post('/product', products.create);

    app.get('/get-all-real-estates', products.findAll);

    app.get('/get-real-estate-byType/:real_estate_type', products.findByType)
}
// {
	// "real_estate_name": "Server Test",
// "real_estate_catagory": "Apartment",
// "real_state_type": "RENT",
// "real_estate_details": "An amazing sea view from a 4th floor.",
// "real_estate_area_name": "Yomra Park",
// "real_estate_price": "240000",
// "real_estate_SQMeter": "150",
// "real_estate_bedrooms_number": "2",
// "real_estate_kitchen": "YES",
// "real_estate_bathrooms_number": "2",
// "real_estate_floor_number": "4",
// "real_estate_building_age": "6",
// "real_estate_photo": "https://i.pinimg.com/originals/0f/6d/86/0f6d86d796e83465a5d95f45c3cbb6b2.jpg",
// "real_estate_map_location": "40.961400, 39.841973",
// "real_estate_furnished": "YES",
// "real_estate_balcony": "YES",
// "real_estate_balcony_number": "2"
// }