const express = require('express');
const bodyParser = require('body-parser');
const DB_CONNECTION = require('./config/db.config');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const { dirname } = require('path');
require('dotenv').config();

// Setup server port
const PORT = process.env.PORT || 6000;

var app = express();

app.use(cors());
app.use(helmet())

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the static files from the React app.
// app.use(express.static(path.join(__dirname, 'frontend/build')));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.json({ message: "Welcome to Fixi application." });
})

require('./routes/user.routes')(app);
require('./routes/real_estates.routes')(app);

app.listen(PORT, () => {
    console.log(`App listening on ${PORT} number! '\n' On this link http://localhost:${PORT}`)
})