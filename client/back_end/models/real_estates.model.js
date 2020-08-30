const DB_CONNECTION = require('../config/db.config');

const RealEstate = function(one) {

    this.real_estate_name = one.real_estate_name;
    this.real_estate_catagory = one.real_estate_catagory;
    this.real_estate_type = one.real_estate_type
    this.real_estate_details = one.real_estate_details;
    this.real_estate_area_name = one.real_estate_area_name;
    this.real_estate_price = one.real_estate_price;
    this.real_estate_SQMeter = one.real_estate_SQMeter;
    this.real_estate_bedrooms_number = one.real_estate_bedrooms_number;
    this.real_estate_kitchen = one.real_estate_kitchen;
    this.real_estate_bathrooms_number = one.real_estate_bathrooms_number;
    this.real_estate_floor_number = one.real_estate_floor_number;
    this.real_estate_building_age = one.real_estate_building_age;
    this.real_estate_photo = one.real_estate_photo;
    this.real_estate_map_location = one.real_estate_map_location;
    this.real_estate_furnished = one.real_estate_furnished;
    this.real_estate_balcony = one.real_estate_balcony;
    this.real_estate_balcony_number = one.real_estate_balcony_number;

};

// creating a new real estate product and saving it in database.
RealEstate.create = (newOne, result) => {
    DB_CONNECTION.query('INSERT INTO real_estates SET ?', newOne, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Create One Real Estate: ", { id: res.insertId, ...newOne });
        result(null, { id: res.insertId, ...newOne })
    })
}
module.exports = RealEstate;