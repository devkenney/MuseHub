const express = require('express');
const router = express.Router();
const Sheet = require('../models/sheet.js')

// Index
router.get('/', (req, res) => {
  if (req.query.page === undefined) {
    req.query.page = 1;
  }
  const numPerPage = 5;
  Sheet.find({}, (error, allSheets) => {
    const numPages = Math.ceil(allSheets.length / numPerPage);
    allSheets.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1)
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
router.delete('/:id', (req, res) => {
  Sheet.findByIdAndDelete(req.params.id, (error) => {
    res.redirect(`/sheets`);
  });
});

// Update
router.put('/:id', (req, res) => {
  const key = `${req.body.key}${req.body.keyMod} ${req.body.majMin}`
  req.body.key = key;
  delete req.body.keyMod;
  delete req.body.majMin;
  Sheet.findByIdAndUpdate(req.params.id, req.body, (error) => {
    res.redirect(`/sheets/${req.params.id}`);
  });
});

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
router.get('/:id/edit', (req, res) => {
  Sheet.findById(req.params.id, (error, foundSheet) => {
    res.render('sheets/Edit', {
      sheet: foundSheet
    })
  })
})

// Show
router.get('/:id', (req, res) => {
  Sheet.findById(req.params.id, (error, foundSheet) => {
    res.render('sheets/Show', {
      sheet: foundSheet
    });
  });
});

module.exports = router;