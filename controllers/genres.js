const express = require('express');
const router = express.Router();
const Genre = require('../models/genre.js')

// Index
router.get('/', (req, res) => {
  if (req.query.page === undefined) {
    req.query.page = 1;
  }
  const numPerPage = 5;
  Genre.find({}, (error, allGenres) => {
    const numPages = Math.ceil(allGenres.length / numPerPage);
    allGenres.sort((a, b) => (a.genreName.toLowerCase() > b.genreName.toLowerCase()) ? 1 : -1)
    const genrePage = allGenres.splice((req.query.page - 1) * numPerPage, req.query.page * numPerPage);
    res.render('genres/Index', {
      genres: genrePage,
      page: req.query.page,
      numPages: numPages
    });
  });
});

// New
router.get('/new', (req, res) => {
  res.render('genres/New', {});
})

// Destroy


// Update


// Create


// Edit


// Show


module.exports = router;