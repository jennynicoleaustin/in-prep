// -- indicates we are using an absolute path for the folders/files
const path = require('path');
const methodOverride = require('method-override')
// -- npm package that generates a universally unique identifier
// -- everytime this function --> uuid() <-- is called the result will be a universally unique identifier.
const { v4: uuid } = require('uuid'); //For generating ID's
//  -- Must require express
const express = require('express');
// -- call the express function and save the result of the function in a constant so that you can access the values of that constant and set values etc
const app = express();


//To parse form data in POST request body:
// ---- Tells express how to handle the incoming request body, what type of format it should be parsed into. url encoded = parameters/data is inside the url itself
app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json())

// --- Since html forms only accept get or post as a method
// --- method override is a package that allows you to fake a put patch or delete method inside a form.
// To 'fake' put/patch/delete requests:
// -- on the form set the method to post
// -- in the action input the url with a query string ?_method=METHOD-YOU-WANT-TO-USE
app.use(methodOverride('_method'))

// Views folder and EJS setup:
// --- allows views to be via the ejs documents - creating forms for the data to be sent via, or views for the data to be displayed.
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Our fake database:
let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

// INDEX - renders multiple comments **********************************
//  -- renders comments onto the index.ejs view... (passes that value to the view)
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

// NEW - renders a form **********************************
// -- this is the path to show the form only... the form is submitted via post method to the post url
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})


// CREATE - creates a new comment **********************************
//  -- this only pushes it into the array and there is no data persistence
app.post('/comments', (req, res) => {
    // --- destructure the request body to extract the data you want
    const { username, comment } = req.body;
    // --- data will not persist when doing this alone but... push the new comment on to the comment array
    comments.push({ username, comment, id: uuid() }) // id calls uuid to generate the uuid
    // ----redirect to a different page so that you are not accidentally submitting the form again on any refresh.
    res.redirect('/comments');
})
// SHOW - details about one particular comment *******************************************
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})

// EDIT - renders a form to edit a comment *******************************************
//  --
app.get('/comments/:id/edit', (req, res) => {
    //  -- grabs the parameters from the url (id)
    const { id } = req.params;
    // -- searches through the comments array to find the comment where comment.id matches parameter input id
    const comment = comments.find(c => c.id === id);
    // -- renders the found comment onto the page in form
    res.render('comments/edit', { comment })
})
// UPDATE - updates a particular comment *******************************************
app.patch('/comments/:id', (req, res) => {
    // -- Grabs id from params
    const { id } = req.params;
    // -- find the comment that matches the param
    const foundComment = comments.find(c => c.id === id);

    //get new text from req.body
    const newCommentText = req.body.comment;
    //update the comment with the data from req.body:
    foundComment.comment = newCommentText;
    //redirect back to index (or wherever you want)
    res.redirect('/comments')
})

// DELETE/DESTROY- removes a single comment *******************************************

app.delete('/comments/:id', (req, res) => {
    // --- grab the id from the params
    const { id } = req.params;
    // -- filter = returns true/false if an element matches the indicated requirement, if true adds the element to the array.
    // rather than mutating the original comments array we create a new array that includes all comments that do NOT have an id that matches the param id and reassigns the comments variable.
    // This is not how we will do it for a database, because the database will not just be a random array.
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})


app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})

// Proposed url paths for requests.
// GET /comments - list all comments
// POST /comments - Create a new comment 
// GET /comments/:id - Get one comment (using ID)
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id - Destroy one comment




















