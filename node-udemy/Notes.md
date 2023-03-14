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