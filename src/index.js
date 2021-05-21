const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path')

// settings
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

// middlewares
app.use(morgan('dev'));

// routes
const indexRoutes = require('./routes/index.js');
app.use(indexRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

// listen on the port
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});