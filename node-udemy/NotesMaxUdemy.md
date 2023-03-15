V.27 Node Lifecycle & Event Loop
- Event Loop keeps running as long as there are event listeners registered (ex: listening port 8080)
- using a single thread on the port it is running on 
- executes code when a particular event occurs, thus being always available. 

V. 34 Parsing Request Bodies 
- req.on('')
  - on is a listener 
  - can listen for 'data'
- req.on('data', (chunk) => {
    variable.push(chunk)
  })
- req.on('end', () => {
    const parsedBody = buffer.concat(body).toString();
    })
- "chunk" - is returned as a buffer

V. 35 Understanding Event Driven Code Execution
- Order of code execution 
  - not always in the order you write the code 
- When you pass a function into a function in Node...
  - node will execute these functions asynchronously
- The other code will not pause to handle the asynchronous function
- Why is this good? 
  - faster (non blocking)

V. 36 Blocking vs Non-Blocking Code 
- writeFile vs writeFileSync
  - writeFileSync 
    - will block code execution until that file is created. 

V. 37 Behind the Scenes 
- Node only using a single thread 
  - So how does it handle multiple incoming requests 
- Event Loop is automatically started when the program starts 
  - event loop is responsible for handling event callbacks 
    - aka fast finishing code 
- fs (file system) & other "long taking" code 
  - sent to a Worker Pool 
    - does the heavy lifting
    - can spin up multiple threads

Event Loop 
order that the event loop handles the async callback functions 
1. Timers 
   - Execute setTimeout or setInterval Callbacks 
2. Pending Callbacks 
   - Execute input/output related callbacks that were originally deferred. 
   - blocking, long-taking operations 
     - if there are too many Node will continue the loop and add those to the next iteration of the event loop
3. Poll
   - RRetrieves new i/o events and execute their callback
     - or defers them to the pending callbacks to be handled later
     - or if timer functions it will jump back to the timer phase and execute the timers right away. 
4. Check
    - execute setImmediate() callbacks
5. Close Callbacks
    - Execute all 'close' event callbacks
6. Exit - only when --> refs == 0
    - ONLY IF NO OPEN EVENT LISTENERS EXIST! 