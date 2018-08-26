const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

// TODO:Enable to use partial
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
// Middleware to load static folder
app.use(express.static(__dirname + '/public'));

// TODO: register function for template
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    // res.send('Hello express');
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        // currentYear: new Date().getFullYear(),
        welcomeMessage: 'Welcome to my website'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
        // currentYear: new Date().getFullYear()
    });
});

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: 'Projects'
    });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request.'
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});