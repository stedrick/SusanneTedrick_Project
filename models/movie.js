var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({

  title: String,

  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Movie', MovieSchema);
