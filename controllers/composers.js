const mongoose = require('mongoose')

const composerSchema = new mongoose.Schema ({
  name: {type: String, required: true},
  gender: {type: String, required: true},
  dob: {type: Date, required: true},
  primaryGenre: {type: String, required: true},
});

const Composer = mongoose.model('Composer', composerSchema);

module.exports = Composer;