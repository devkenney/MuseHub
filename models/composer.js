const mongoose = require('mongoose')

const composerSchema = new mongoose.Schema ({
  name: {type: String, required: true},
  dob: {type: Date, required: true},
  primaryGenres: {type: Array, required: true},
  greatestWorks: {type: Array, required: true},
  description: {type: String, required: true},
  primaryType: {type: String, required: true},
  image: {type: String, required: true}
}, {
  timestamps: true
});

const Composer = mongoose.model('Composer', composerSchema);

module.exports = Composer;