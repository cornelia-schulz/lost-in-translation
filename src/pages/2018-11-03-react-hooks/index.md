---
path: "/2018-11-03-react-hooks"
title: "React Hooks"
date: "2018-11-03"
tags: ["react", "hooks"]
published: true
previous: "/2018-10-20-I18next-testing-with-Jest"
next: "/2018-12-29-localisation-and-web-accessibility"
blurb: "React 16.7.0alpha brings us a new feature called React Hooks. Hooks were introduced to to be able to use state in functional components without having to rewrite the component to a class. Read on for more info."
image: "/static/muriwai-milkyway-756273e8a8e77bef45b1dd944e8f0ce6.jpg"
imagetitle: "Milkyway over Muriwai"
---

The React team recently introduced a new feature in version 16.7.0-alpha - React Hooks. A lot of chatter in various React forums made me want to have a look what React Hooks are all about, so I went ahead and tried a few of them out. I should mention that they are currently still an experimental proposal and their implementation may change. It's worth keeping an eye on the [official documentation](https://reactjs.org/docs/hooks-intro.html "Official React documentation") for the latest update on this new feature.

React Hooks were introduced to let you use state in stateless or functional components. Using Hooks you no longer will have to change your component into a class if you need state.

A number of Hooks are already built into 16.7.0-alpha:

* useState
* useEffect
* useContext
* useCallback
* useMemo
* useReducer
* useRef
* useLayoutEffect
* useImperativeMethods
* useMutationEffect

You can also create custom Hooks.

To start using React Hooks, first use npm or yarn and install version 16.7.0-alpha.

```javascript
yarn add react@16.7.0-alpha.0
yarn add react-dom@16.7.0-alpha.0
```

I created a small [practice repository](https://github.com/cornelia-schulz/bookclub "Practice repository") on Github where you can find all the code that appears in this post. 

## State hooks

Without a state Hook you'd have to create a class to keep track of count and its state in the component below:

```javascript
import React from 'react'

class Counter extends React.Component {
  this.state = {
    count: 0
  }
  const [count, setCount] = useState(0)

  render() {
    return (
      <div className='counter'>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>
        <p>You clicked the button {this.state.count} times.</p>
      </div>
    )
  }
}
export default Counter
```

State Hooks simply let you use state inside a functional component.

```javascript
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className='counter'>
      <button onClick={() => setCount(count +1)}>Click me</button>
      <p>You clicked the button {count} times.</p>
    </div>
  )
}
export default Counter
```

Above, useState is the Hook. React will preserve the local state of the variable count in between re-renders. UseState has only one argument (0) - because the counter starts from 0. 0 is only used on the initial render.

## Effect hooks

Effect Hooks are used to tell React that your component needs to do something after render. They run after every single render by default. If that's not quite what you want, this behaviour can be customised to suit.

```javascript
import {useState, useEffect} from 'react'
import {getAllBooks} from '../apiClient'

function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getAllBooks()
      .then(books => {
        setBooks(books)
      })
  })

  return (
    <div className='books'>
      <h2>Books</h2>
      <ul>
        {books.map(book => {
          return <li key={book.id}>{book.title}</li>
        })}
      </ul>
    </div>
  )
}
export default Books
```

In the example above useEffect is used to pass a function to fetch some book titles from a simple database. In a class based component the same function would have been called from within componentDidMount.

## Custom hooks

You can also write some custom Hooks to use within your React components. The React team suggests prefixing Hooks with "use", just to make it easier to keep track of the types of components in your code.

usePrevious Hook:

```javascript
import { useRef, useEffect } from 'react'

export function usePrevious(value) {
    const ref = useRef()
    useEffect(() => {
      ref.current = value
    })
    return ref.current
  }
```

This custom Hook uses useRef to keep track of the previous state of the value that is getting passed into it.

The usePrevious Hook can then be used in other components such as the Counter component I mentioned above:

```javascript
import { useState } from 'react'
import { usePrevious } from './usePrevious'

function Counter() {
  const [count, setCount] = useState(0)
  conts prevCount = usePrevious(count)

  return (
    <div className='counter'>
      <button onClick={() => setCount(count +1)}>Click me</button>
      <p>You clicked the button {count} times.</p>
      <p>Count before the last click: {prevCount}, current count: {count}</p>
    </div>
  )
}
export default Counter
```

## A few points

Hooks are still experimental and their implementation will probably change in the future, so it's probably best not to rewrite all your code to use them yet. They are compatible with all your current components, so maybe give them a try when you create your next component.

Hooks should only be called at the top level of a React function component. Don’t call Hooks inside loops, conditions, or nested functions. This is to ensure that Hooks are getting called in the same order of every render and the state is correctly maintained.

Hooks are fully encapsulated — each time you call a Hook, it calls on isolated local state within the current component.

More React Hooks rules can be found in the [React documentation](https://reactjs.org/docs/hooks-rules.html "React Hooks Rules").

## Next steps

Check out the [documentation](https://reactjs.org/docs/hooks-intro.html "Official React documentation") for Hooks proposal to learn more about React hooks. The [FAQ section](https://reactjs.org/docs/hooks-faq.html "FAQs about Hooks") will probably answer a lot of questions you may have as well.
The React team also [collects feedback](https://github.com/reactjs/rfcs/pull/68 "Hook feature feedback").

Have you tried the new React Hooks feature yet? Feel free to leave a comment below.