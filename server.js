require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({
  extended: true
}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(methodOverride('_method'));

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(mongoURI,
{useNewUrlParser: true, useUnifiedTopology: true
});

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on('open', () => {
  console.log('connection made!');
})

//Static Routes
//======================================
app.get('/', (req, res) => {
  res.redirect('/home');  
})

app.get('/home', (req, res) => {
  res.render('Home');
})

app.get('/about', (req, res) => {
  
})
//======================================

//Controllers
//======================================
const sheetsController = require('./controllers/sheets.js');
app.use('/sheets', sheetsController);

const composersController = require('./controllers/composers.js');
app.use('/composers', composersController);

const genresController = require('./controllers/genres.js');
app.use('/genres', genresController);
//======================================

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
})