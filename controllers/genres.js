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
});

// Destroy


// Update
router.put('/:id', (req, res) => {
  const innovatorList = []
  innovatorList.push({artist: req.body.artName1, description: req.body.description1});
  innovatorList.push({artist: req.body.artName2, description: req.body.description2});
  innovatorList.push({artist: req.body.artName3, description: req.body.description3});
  innovatorList.push({artist: req.body.artName4, description: req.body.description4});
  req.body.innovatorList = innovatorList;
  delete req.body.artName1;
  delete req.body.artName2;
  delete req.body.artName3;
  delete req.body.artName4;
  delete req.body.description1;
  delete req.body.description2;
  delete req.body.description3;
  delete req.body.description4;
  Genre.findByIdAndUpdate(req.params.id, req.body, (error) => {
    res.redirect(`/genres/${req.params.id}`);
  });
});

// Create
router.post('/', (req, res) => {
  const innovatorList = []
  innovatorList.push({artist: req.body.artName1, description: req.body.description1});
  innovatorList.push({artist: req.body.artName2, description: req.body.description2});
  innovatorList.push({artist: req.body.artName3, description: req.body.description3});
  innovatorList.push({artist: req.body.artName4, description: req.body.description4});
  req.body.innovatorList = innovatorList;
  delete req.body.artName1;
  delete req.body.artName2;
  delete req.body.artName3;
  delete req.body.artName4;
  delete req.body.description1;
  delete req.body.description2;
  delete req.body.description3;
  delete req.body.description4;
  Genre.create(req.body, (error, createdGenre) => {
    console.log(createdGenre);
    res.redirect('/genres');
  });
});

// Edit
router.get('/:id/edit', (req, res) => {
  Genre.findById(req.params.id, (error, foundGenre) => {
    res.render('genres/Edit.jsx', {
      genre: foundGenre
    });
  });
});

// Show
router.get('/:id', (req, res) => {
  Genre.findById(req.params.id, (error, foundGenre) => {
    res.render('genres/Show.jsx', {
      genre: foundGenre
    });
  });
});

module.exports = router;