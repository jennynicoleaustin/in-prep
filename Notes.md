### Cross-Component vs App Wide
- cross-component = props chains
- auth-context

### How Redux work?
- one central data store for all states in the entire application. 
  - to be used inside of components 
    - components subscribe to the store, and then they can use it. 
  - components do not directly change the data in the data store. 
    - reducer function is used to make changes 

### Flow of data in redux 
- components dispatch an action that is 
- forwarded to the reducer function
- which mutates the central data (state) Store
- which the components subscription notifies the component about. 

### Reducer functions 
- 2 Inputs:
  - Old state
  - Dispatched Action
- 1 Output: 
  - new state object


Objects returned in the Reducer functions 
- always returns a NEW snapshot (state object)
  - redux uses the new snapshot returned by the reducer function to replace the states existing object. 
- objects returned by the reducer OVERRIDE the existing state. 
  - If you forget to set a value of state within the reducer function that updates state then that value will be replaced with undefined.
- Never mutate the state directly in a reducer function
  - instead return a new state object 

### Using the Toolkit instead of plain redux
- createSlice 
  - Allows you to identify each of the reducer methods you would like to execute
    - each reducer will automatically take in a state and action
      - You will not need to create if checks to check the "type"
  - When using the createSlice --- You CAN mutate the state directly within the "reducers: {}"
    - Why? internal use of immer? 
      - that clones the existing state, create a new state, keep the state that is not being edited and then updates the state that is being edited. -- translated into immutable code. 
  - When creating a reducer that uses both the state and an action
    - You can pass the state and action to be used, but you do not need to pass action if action is not being used. 

### Multiple Slices 
- no matter the number of slices you have you will still only have a single store. 
- Store & multiple reducers 
  - configureStore -> takes in reducer
    - either as a single reducer, or an object with key value pairs for each reducer