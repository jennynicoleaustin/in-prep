V. 280 Index Routes
- Rather than putting an empty '' as the path
  - set index: true
- index route = 
  - default route if parent route is active

V. 284 - Data Fetching with a loader()
- React router to start fetching the data as soon as we navigate to the page. 
  - Fetch the data first, then render the page.... 
    - rather than rendering the page and then loading the data.
- Property add to the route definition. 
  - loader property 
    - expects a function as a value
    - function is executed right before that route is rendered.
    - react will take any data that you return within a loader function and make it available on that page & any other pages you may need it. 
    - response object = object with events property (= array of events)
  - React router will check if a promise has been returned and get that data for you. 
- Where can you get access to the data events? 
  - at the page which the loader property is attached 
  - any element lower than the page that holds the loader property

V. 289 - Reflecting the Current Navigation state in the UI
- useNavigation --- has a state object 
  - that can be used to determine if we are loading data still 
  - If you want information to like a "loading" message to be displayed 
    - you will need to add this element to a page that is visible BEFORE the element that is still loading. 
      - because the loader function executes before navigating to the new page and is data is still loading than you would still be on the previous page. 

V. 290 Returning Responses in Loader()s
- within a loader you can return any kind of data within the loader 
- react automatically gives us the data that is part of the fetch response without having to parse the data! winning. 

V. 291 
- cannot use React hooks 
- CAN use any browser functions (localstorage etc)

V. 292 - Error Handling
- Errors bubble up, so you can just have a root level error.

V. 294 The json() utility function
- return json({message object goes here}, {status: xxx})
- Now the parsing in and out of json is done by react and you do not have to manually do it 

V. 295 Dynamic Routes and loader()
- loader functions are automatically passed and object from React that contain a { request, params }
- request object 
  - used to extract the url / query parameters

V. 298 Working with action() Functions 
- action: 
  - expects a function like loader

FORMS 
- for React router to easily access the form inputs...
  - make sure that each input have the "name" attribute
  - Form attribute from React Router Dom
    - react router with prevent default automatically and send the form request to the action function instead
Redirect('url')
    - at the end of the action function you should call react router dom redirect function and pass in the url you want to redirect to. 

V. 303 
- useFetcher 
  - use when you want to trigger an action (or loader) withOUT navigating to that page 