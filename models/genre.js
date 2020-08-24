const mongoose = require('mongoose')

const genreSchema = new mongoose.Schema ({
  genreName: {type: String, required: true},
  image: {type: String, required: true},
  description: {type: String, required: true},
  innovatorList: {type: Array, required: true}
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;