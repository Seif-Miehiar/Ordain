const RealEstates = require('../models/real_estates.model');
const RealEstate = require('../models/real_estates.model');

// create and save a new real estate product.
exports.create = (req, res) => {
    // validate request.
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty"
        })
    }
    const real_estate_product = new RealEstates({
        real_estate_name: req.body.real_estate_name,
        real_estate_catagory: req.body.real_estate_catagory,
        real_estate_type: req.body.real_state_type,
        real_estate_details: req.body.real_estate_details,
        real_estate_area_name: req.body.real_estate_area_name,
        real_estate_price: req.body.real_estate_price,
        real_estate_SQMeter: req.body.real_estate_SQMeter,
        real_estate_bedrooms_number: req.body.real_estate_bedrooms_number,
        real_estate_kitchen: req.body.real_estate_kitchen,
        real_estate_bathrooms_number: req.body.real_estate_bathrooms_number,
        real_estate_floor_number: req.body.real_estate_floor_number,
        real_estate_building_age: req.body.real_estate_building_age,
        real_estate_photo: req.body.real_estate_photo,
        real_estate_map_location: req.body.real_estate_map_location,
        real_estate_furnished: req.body.real_estate_furnished,
        real_estate_balcony: req.body.real_estate_balcony,
        real_estate_balcony_number: req.body.real_estate_balcony_number
    })

    // save real estate product in database.
    RealEstates.create(real_estate_product, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "some error occurd while creating the User."
            })
        } else res.send(data);
    })

}

exports.findAll = (req, res) => {
    RealEstate.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving real estates."
            });
        }
        else res.send(data)
    })

}
exports.findByType = (req, res) => {
    RealEstate.getByType(req.params.real_estate_type ,(err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Customer with id ${req.params.real_estate-type}.`
              });
            } else {
              res.status(500).send({
                message: "Error retrieving Customer with id " + req.params.real_estate-type
              });
            }
          } else res.send(data);
        });
}