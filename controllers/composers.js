const express = require('express');
const router = express.Router();
const Composer = require('../models/composer.js')
const Genre = require('../models/genre.js');

// Index
router.get('/', (req, res) => {
  if (req.query.page === undefined) {
    req.query.page = 1;
  }
  const numPerPage = 5;
  Composer.find({}, (error, allComposers) => {
    const numPages = Math.ceil(allComposers.length / numPerPage);
    allComposers.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);
    const composerPage = allComposers.splice((req.query.page - 1) * numPerPage, req.query.page * numPerPage);
    // console.log(composerPage);
    res.render('composers/Index', {
      composers: composerPage,
      page: req.query.page,
      numPages: numPages
    });
  });
});

// New
router.get('/new', (req, res) => {
  Genre.find({}, (error, allGenres) => {
    res.render('composers/New', {
      genres: allGenres
    });
  })
});

// Destroy


// Update


// Create
router.post('/', (req, res) => {
  let greatestWorks = []
  greatestWorks.push({title: req.body.workName1, description: req.body.workDesc1});
  greatestWorks.push({title: req.body.workName2, description: req.body.workDesc2});
  greatestWorks.push({title: req.body.workName3, description: req.body.workDesc3});
  greatestWorks.push({title: req.body.workName4, description: req.body.workDesc4});
  delete req.body.workName1
  delete req.body.workName2
  delete req.body.workName3
  delete req.body.workName4
  delete req.body.workDesc1
  delete req.body.workDesc2
  delete req.body.workDesc3
  delete req.body.workDesc4
  req.body.greatestWorks = greatestWorks;
  let primaryGenres = []
  primaryGenres.push(req.body.genre1);
  primaryGenres.push(req.body.genre2);
  delete req.body.genre1;
  delete req.body.genre2;
  req.body.primaryGenres = primaryGenres;

  Composer.create(req.body, (error, createdComposer) => {
    res.redirect('/composers');
  });
});

// Edit


// Show
router.get('/:id', (req, res) => {
  Composer.findById(req.params.id, (error, foundComposer) => {
    res.render('composers/Show', {
      composer: foundComposer
    })
  })
})

module.exports = router;