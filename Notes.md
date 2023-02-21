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
