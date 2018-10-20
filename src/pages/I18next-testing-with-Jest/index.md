---
path: "/I18next-testing-with-Jest"
title: "Testing React and I18next with Jest"
date: "2018-10-20"
tags: ["localisation", "localization", "language hierarchies", "internationalization", "translation", "regional", "cultures", "testing", "React", "Jest"]
published: true
previous: "/localisation-With-I18next"
blurb: "If you are interested in testing React components that make use of I18next, click through to this blog post."
image: "/static/muriwai-ccebceaf605ed9f3eab39aa4288248ed.jpg"
imagetitle: "Muriwai"
---


In my last blog post I showed you how to use I18next within my React application. In this post I'd like to share how to test your components that contain strings generated with I18next. In my [Photo Locations project](https://github.com/cornelia-schulz/photolocations "Photo Locations") I use Jest and Enzyme to test my code.

So first of all, if you haven't already, install Jest and Enzyme using either Yarn or npm. Follow the instructions in the [Jest tutorial for React.](https://jestjs.io/docs/en/tutorial-react "Jest tutorial for React").
```javascript
yarn add jest enzyme
```
Next in your main directory of your project, create a folder called ____mocks____ because you won't actually want to use your live configuration for your tests. In the ____mocks____ folder, create a file called react-i18next.js and copy the following code which can also be found in the [I18next documentation](https://github.com/i18next/react-i18next/blob/master/example/test-jest/__mocks__/react-i18next.js "I18next test documentation") into the file.
```javascript
const React = require ('react');
const reactI18next = require ('react-i18next');

const hasChildren = node =>
  node && (node.children || (node.props && node.props.children));

const getChildren = node =>
  node && node.children ? node.children : node.props && node.props.children;

const renderNodes = reactNodes => {
  if (typeof reactNodes === 'string') {
    return reactNodes;
  }

  return Object.keys (reactNodes).map ((key, i) => {
    const child = reactNodes[key];
    const isElement = React.isValidElement (child);

    if (typeof child === 'string') {
      return child;
    }
    if (hasChildren (child)) {
      const inner = renderNodes (getChildren (child));
      return React.cloneElement (child, {...child.props, key: i}, inner);
    } else if (typeof child === 'object' && !isElement) {
      return Object.keys (child).reduce (
        (str, childKey) => `${str}${child[childKey]}`,
        ''
      );
    }

    return child;
  });
};

module.exports = {
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withNamespaces: () => Component => props => (
    <Component t={k => k} {...props} />
  ),
  Trans: ({children}) => renderNodes (children),
  NamespacesConsumer: ({children}) => children (k => k, {i18n: {}}),

  // mock if needed
  Interpolate: reactI18next.Interpolate,
  I18nextProvider: reactI18next.I18nextProvider,
  loadNamespaces: reactI18next.loadNamespaces,
  reactI18nextModule: reactI18next.reactI18nextModule,
  setDefaults: reactI18next.setDefaults,
  getDefaults: reactI18next.getDefaults,
  setI18n: reactI18next.setI18n,
  getI18n: reactI18next.getI18n,
};
```
Once that's done, it's time to create a folder called tests in the root directory of your project to start writing some tests. 

For this blog, I will be testing that the h1 tag in my About.jsx component displays correctly. To do this, I create a file called ["About.test.js"](https://github.com/cornelia-schulz/photolocations/blob/master/tests/client/components/About.test.js "About.test.js") inside the tests folder.

First I import all the dependencies:
```javascript
import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {About} from '../../../client/components/About'
```
Next I create an adapter to be able to run Enzyme tests:
```javscript
configure({adapter: new Adapter()})
```
Then I can start writing the actual test:
```javascript
test('<About/> renders h1 component with given content', () => {
  const expected = 'About Photo Locations'
  const wrapper = shallow(<About t={(k) => 'About Photo Locations'} />)
  const actual = wrapper.find('h1').text()

  expect(actual).toEqual(expected)
})
```
On the first line I simply described what the test is expected to do. Then I created a variable "expected" giving it the text which I expect to see in my About page header. Next I shallow rendered the About component and I pass it the text I want it to render rather than calling up my json file and looking up the string. Then I created a variable called actual to look up the text that is contained in the h1 tag. Last but not least I compared the "expected" variable to the "actual" variable to ensure they match.

To find out more about the different rendering methods that Enzyme uses, such as shallow, mount or render, check out the [Enzyme documentation](https://airbnb.io/enzyme/docs/api/shallow.html "Enzyme documentation"). 

To run the test, type:
```
jest about
```
into the console.