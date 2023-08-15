const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const routes = require('./routes/router.js');


//Config ejs like view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + 'views');

//Configure CORS to allow requests from any origin 
app.use(cors());

//static files
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', routes);

const port = 4000;
app.listen(port, () => {
  console.log(`Corriendo en puerto ${port}`);
})