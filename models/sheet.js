const mongoose = require('mongoose')

const sheetSchema = new mongoose.Schema ({
  title: {type: String, required: true},
  key: {type: String, required: true},
  composer: {type: String, required: true},
  description: {type: String, required: false},
  genre1: {type: String, required: true},
  genre2: {type: String, required: false},
  youtube: {type: String, required: false}
});

const Sheet = mongoose.model('Sheet', sheetSchema);

module.exports = Sheet;