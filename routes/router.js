const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.render(path.join(__dirname,'../views/home.ejs'));
});

router.get('/login', (req, res) => {
  res.render(path.join(__dirname,'../views/login2.ejs'));
});

router.get('/rap', (req, res) => {
  res.render(path.join(__dirname,'../views/hola.ejs'));
});


module.exports = router;