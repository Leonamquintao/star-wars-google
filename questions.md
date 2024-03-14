### Questions ###

- What is the difference between `Component` and `PureComponent`? Give an example where it might break my app.

A: The biggest difference between components and pureComponents is that in the case of PureComponent it can offer better performance as it does a shallow comparison and checks if the props or state have changed to avoid re-renders. On the other hand, Components, whenever it receives new props or state, it will render again even if the props and state are the same.
By making a shallow comparison, PureComponent may not have the desired effect in the case of very nested arrays.

- `Context` + `ShouldComponentUpdate()` might be dangerous. Why is that?

A: Using Context with the ShouldComponentUpdate can be dangerous due to the way Context works, which is passing data through a tree of components. The combination of the two can create a situation where the component update does not occur when it should because ShouldComponentUpdate is a life cycle method that is called before re-rendering and this can cause side effects.

- Describe 3 ways to pass information from a component to its PARENT.

A: State Management Libraries (Redux for example), passing Function as Prop (Callbacks) or Context API.

- Give 2 ways to prevent components from re-rendering.

A: As discussed in question 1 using PureComponent or ShouldComponentUpdate or using React.memo for functional components.

- What is a fragment and why do we need it? Give an example where it might break my app.

A: Fragments is a good way to create element-grouping wrappers without adding nodes in the DOM.
The only way I see that a `<React.Fragment />` can be harmful is in the case of a library that expects a `<div />` and does not know how to deal with this abstraction.

- Give 3 examples of the HOC pattern.

A: The HOC pattern is an advanced technique used in React that involves creating a component that wraps other components, a good example of this was the old `mapStateToProps` and `mapDispatchToPops`, when it was necessary to use `connect` in `react-redux`, another good use would be to create a component of LoadingIndicator `withLoadingIndicator` very common in react applications.

- What's the difference in handling exceptions in promises, callbacks and async...await?

A: Promises have structured forms (resolve, reject) for handling exceptions and methods such as `.then()` and `.catch()`. Generally with Callbacks that are functions passed by parameter we use try-catch blocks but in cases of nested callbacks this can generate "callback hell", in the case of async/await it offers a clearer and more concise syntax for dealing with exceptions in asynchronous operations . This can lead to more readable and maintainable code.

- How many arguments does setState take and why is it async.

A: The `setState` can take 2 arguments, the previous state and the state object itself.
`setState` is asynchronous to ensure consistent and responsive behavior.

- List the steps needed to migrate a Class to Function Component.

A: Never done before, I work with React-Native since 2018 and at that time we use more class based components, react-native provide some tools to update versions and migrate from class to functional components, but I admit never done with React.

- List a few ways styles can be used with components:

A: Inline, CSS files, styled components or CSS Libraries.

- How to render an HTML string coming from the server.

A: It can be used the `dangerouslySetInnerHTML` attribute. However I would ensure that the HTML string you're rendering is safe and trusted because of the cross-site scripting.