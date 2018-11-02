---
path: "/react-hooks"
title: "React Hooks"
date: "2018-11-04"
tags: ["react", "hooks"]
published: true
previous: "/I18next-testing-with-Jest"
blurb: ""
image: "/static/"
imagetitle: ""
---





Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. We’ll learn about them in a moment.)

+++ EFFECT
What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. Does useEffect run after every render? Yes! By default, it runs both after the first render and after every update. - can be customised


function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
We declare the count state variable, and then we tell React we need to use an effect. We pass a function to the useEffect Hook. This function we pass is our effect. Inside our effect, we set the document title using the document.title browser API. We can read the latest count inside the effect because it’s in the scope of our function. When React renders our component, it will remember the effect we used, and then run our effect after updating the DOM. This happens for every render, including the first one.

If you create any content about Hooks while they’re unstable, please mention prominently that they are an experimental proposal, and include a link to the official documentation. 

Hooks are fully encapsulated — each time you call a Hook, it gets isolated local state within the currently executing component.

Next Steps
Check out the documentation for Hooks proposal to learn more about it:

https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889
Introducing Hooks (motivation)
Hooks at a Glance (walkthrough)
Writing Custom Hooks
Hooks FAQ (it’s likely your question is answered there!)