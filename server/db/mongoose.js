var mongoose = require('mongoose');

// these done just once
mongoose.Promise = global.Promise; // built-in Promise
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};
