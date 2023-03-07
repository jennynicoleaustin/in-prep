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