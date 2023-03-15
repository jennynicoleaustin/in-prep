const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

// Telling Express that we want to serve up static files to our application and that those files are in the public directory in the root of our project
app.use(express.static(path.join(__dirname, 'public')))


// .set -- expects the key and value (find available keys on the express docs)
// --- by setting the view engine to ejs, we do not need to "require" ejs -- express does it for us
app.set('view engine', 'ejs');

// Express assumes that our html files (views) are in a directory called views! (This is the default, but you can technically change it)

// If you want to set the views so that you do not have issues with it not being able to find the views folder... set "views" and then join the full path from index.js with the views path
app.set('views', path.join(__dirname, '/views'))

// render the file --- you do not need to specify the path since express is already looking for the view in the views directory.
app.get('/', (req, res) => {
    res.render('home')
})



app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats })
})

// check if the subreddit exists in the data, if it does render the data for that subreddit to the page.
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        // ---- use the spread operator to get access to the individual properties in the data
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit })
    }
})

// Move logic out of the template and pass a second argument when you render the template (an object with key/value pair) --- ex = rand: num OR you can pass the num is as num (where key and value are the same num:num)
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num })
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})