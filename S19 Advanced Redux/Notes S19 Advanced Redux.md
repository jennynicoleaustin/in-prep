Redux & Side Effects (and Asynchronous Code)

- Reducers must be 
  - pure, side-effect free, SYNCHRONOUS

- Two places to place side effects of async code when working in redux 
  - into the component with useEffect
  - write our own action creator functions 

