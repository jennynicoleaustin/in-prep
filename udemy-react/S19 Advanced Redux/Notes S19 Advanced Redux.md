Redux & Side Effects (and Asynchronous Code)

- Reducers must be 
  - pure, side-effect free, SYNCHRONOUS

- Two places to place side effects of async code when working in redux 
  - into the component with useEffect
  - write our own action creator functions 

Action Creators 
- allow us to run asynchronous code 

Best place for your code 
- For code that is synchronous, side effect free (like data transformations)
  - place this type of code inside of reducers 
- For async code, or code with side effects 
  - place this type of code inside the components or inside an action creator.

useEffect with Redux

Custom Action Creators to create "Thunks"
- A function that delays an action until later.
  - An action creator function that does NOT return the action itself but another function which eventually returns the action. 

Fetching data! 
- fetch cart data on reload 