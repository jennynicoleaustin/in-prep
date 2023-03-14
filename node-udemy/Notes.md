Section 31: Intro to node

Running js code without the browser 
- in terminal type node filename.js

Process & Argv
- process.argv
  - returns an array containing the command line arguments passed when the Node.js process was launched.
    - first element is process.execPath
    - second element is the path to the JS file being executed. 
- Allows you to make a script? 
  - tool for getting arguments from the command line. 

V. 327 Requiring a directory 
- Using other js files inside other js files, "require" and export to module. 
  - To require all files within a directory include a single index.js 
    - inside index.js export an array of all the files 
    - within the app, require the whole directory

NPM Node Package Managers 

Installing NPM Packages 
- locally or globally

Package.json 
- keep track of all needed dependencies to run the project elsewhere

npm install 
- when ran in a project will look for the package.json and install all the dependencies listed in the package.json

Section 33 - Servers with Express

V. 335 Intro to Express 
- web framework for node.js 

V. 336 Express app 
- you must REQUIRE express 
- also, save the return value of express in a variable (usually app)
- app.listen 
  - needs a port to listen on. 
- app.use 
  - this callback function will run anytime an incoming request is made 
- *** Anytime you make changes to your app you will need to rerun the index.js file in node

V. 337 The Request & Response Objects 
- .use(req, res)
  - on all .use there is a request and a response 
  - made by express and passed into the use function 
  - express parses the text data from the browser into an object 

V. 338 Express Routing Basics 
- routing refers to taking an incoming request on a specific path and matching that to some code (html page for example)
- Routes are matched in ORDER! 
  - so if you're using a * to catch all the error paths then you will need to make sure it is at the end. 

V. 339 Express Path Parameters 
- Direct match vs generic pattern 