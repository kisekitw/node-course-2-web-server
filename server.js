const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
// Middleware to load static folder
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('Hello express');
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Welcome to my website'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request.'
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});