const express = require('express');
const router = express.Router();
const Sheet = require('../models/sheet.js')

// Index
router.get('/', (req, res) => {
  if (req.query.page === undefined) {
    req.query.page = 1;
  }
  const numPerPage = 10;
  Sheet.find({}, (error, allSheets) => {
    const numPages = Math.ceil(allSheets.length / numPerPage);
    allSheets.sort((a, b) => (a.title > b.title) ? 1 : -1)
    const sheetPage = allSheets.splice((req.query.page - 1) * numPerPage, req.query.page * numPerPage);
    res.render('sheets/Index', {
      sheets: sheetPage,
      page: req.query.page,
      numPages: numPages
    });
  });
});

// New
router.get('/new', (req, res) => {
  res.render('sheets/New');
});

// Destroy


// Update


// Create
router.post('/', (req, res) => {
  const key = `${req.body.key}${req.body.keyMod} ${req.body.majMin}`
  req.body.key = key;
  delete req.body.keyMod;
  delete req.body.majMin;
  Sheet.create(req.body, (error, createdSheet) => {
    res.redirect('/sheets');
  });
});

// Edit


// Show
router.get('/:id', (req, res) => {
  Sheet.find({_id: req.params.id}, (error, foundSheet) => {
    res.render('sheets/Show', {
      sheet: foundSheet
    });
  });
});

module.exports = router;