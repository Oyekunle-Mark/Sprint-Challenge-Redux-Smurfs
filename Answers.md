1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- Spread operator
- Array.prototype.map()
- Array.prototype.filter()
- _We use the `Object.assign()` method to create a new object and extend the properties of another object._

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- _An `action` is an object that tells the reducer what to do. It has a type property and an optional payload property which is the data to modify state with. A `reducer` is a function that returns a new state every time it is invoked and is triggered by an action type. A `store` holds the application state data, it is referred to as the single source of truth._

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

- _`Application state` is global and as such is available to every component in the application to tap into while `component state` is local to a component and only that component can use it. `Application state` is preferred when the state will be required by many components in the app while `component state` is used if the state is specific to only one component._

4.  What is middleware?

- _A middleware in redux is a helper function that perform specific tasks. It returns a function that returns a functions which also returns a function. Since middlewares have access to the action as they are dispatched to the store they are used to perform tasks based on action tyeps._

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- _`redux-thunk` is a middleware that allows us call action creators that returns functions. It allows us to perform asynchronous operations. With `redux-thunk` action creators can dispatch asynchronous actions such as fetching data from the database._

6.  Which `react-redux` method links up our `components` with our `redux store`?

- _The `connect` method._
