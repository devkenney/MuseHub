const express = require('express');
const router = express.Router();
const Genre = require('../models/genre.js')

// Index
router.get('/', (req, res) => {
  res.render('genres/Index', {});
})

// New
router.get('/new', (req, res) => {
  res.render('genres/New', {});
})

// Destroy


// Update


// Create


// Edit


// Show