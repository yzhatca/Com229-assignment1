const express = require("express")
const app = express()
const postRoute = require('./routes/posts')
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const cors = require('cors')

require("dotenv/config")

/* require('dotenv').config();

const mongoString = process.env.DATABASE_URL */

//端口
/* app.listen(3000, () => {
    console.log('server is on')
}) */

mongoose.connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => {
    console.log("connect DB!")
})

app.use(express.static("public"));
app.use(express.static("views"));
app.use(express.urlencoded({
    extended: true
}));
app.use(cors())
app.use(bodyParser.json())
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error', { title: 'Error'});
  });

// use res.render to load up an ejs view file

// index page 
app.get('/', (req, res) => {
    res.render('pages/index');
});
app.get('/home', (req, res) => {
    res.render('pages/index');
});
app.get('/projects', (req, res) => {
    res.render('pages/projects');
});
app.get('/about', (req, res) => {
    res.render('pages/about');
});
app.get('/contact', (req, res) => {
    res.render('pages/contact');
});
app.get('/services', (req, res) => {
    res.render('pages/services');
});

app.use('/posts', postRoute);

module.exports = app;
