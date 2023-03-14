// Must require express to be able to use it. v336
const express = require("express");

// Save the return value of express in a variable. v336
const app = express();

// Need to specify a port for the app to listen on v336
app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})

//  Anytime we have an incoming request this callback function will run.
// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!")
// ---- if req is sent in the browser express will respond with the res as a string rendered on the browser page, or render html in on the page in the case below.
// ---- using postman it would respond with the string below
//     res.send('<h1>This is my webpage!</h1>')
// })
// ----- use matches every request path and once a response is sent on that path it is complete v.338


//
// /cats => 'meow'
// /dogs => 'woof'
// '/'
app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})

// Built in methods that express has to handle the res.
//  -- .get expects a path and a callback function that will run whenever a request on that path comes in. v.338
app.get('/', (req, res) => {
    res.send('Welcome to the home page!')
})

//  : designates as a parameter
//  path only cares about matching the pattern
app.get('/r/:subreddit', (req, res) => {
    // gain access to the parameters -> to use them on the page.
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

// parameters are not limited to a single parameters
app.get('/r/:subreddit/:postId', (req, res) => {
    //  params are grouped as an object and object destructuring can assign them to particular keys to gain access.
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

//  Query Parameters
// url shown as... /search?q=searchTermHere
//  Can handle multiple search params (ex: /search?q=firstSearchTerm&secondSearchTerm
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED!')
    } else {
        res.send(`<h1>Search results for: ${q}</h1>`)
    }
})

app.get('/jenny', (req, res) => {
    res.send('Jenny is the coolest software developer ever!')
})

//  This needs to be the very last path defined -- paths are matched in order
app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})
