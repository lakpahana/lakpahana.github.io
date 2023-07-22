#Use Ref

Refs can be used for a variety of purposes. One particular use for them is if you need to interact with the actual DOM (as opposed to the React virtualization of it) directly. This is pretty rare and really only when you need to derive measurements from the DOM (like width) or you're using an external library and it needs a real DOM node to interact with.

In our example, let's integrate Three.js with React. Three.js is a library that allows you to do 3D graphics in the browser and has its own runtime outside of React. React never guarantees that a DOM node isn't going to re-render at any given time and in general this is a good thing: we don't have to care about actually updating the DOM: React does it for us. However it's a problem with Three.js: we need to insert a DOM node directly into a DOM element (which React would control.) That's where the ref is useful: it allows to get an actual hold on the DOM node underneath so we can interact with it.

Sure, let's break it down into simpler terms:

In React, `useRef` is a tool that helps you with two main things:

1. **Referring to HTML elements**: When you want to work with an HTML element directly, like reading its value, changing its appearance, or giving it focus, you can use `useRef` to "grab" that element and save it for later use.

2. **Keeping data between renders**: If you have some data that you want to store and access between renders of a component without causing the component to update, you can use `useRef` for that purpose.

Here's a basic example for each use case:

1. **Referring to HTML elements**:

Suppose you have an input field and you want to focus on it automatically when the component loads:

```jsx
import React, { useRef, useEffect } from 'react';

const MyComponent = () => {
  const inputRef = useRef();

  useEffect(() => {
    // This runs after the component renders
    inputRef.current.focus(); // This focuses the input field
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
      {/* Other JSX content */}
    </div>
  );
};
```

2. **Keeping data between renders**:

Suppose you want to count how many times the component has rendered, but you don't want the count to trigger a re-render:

```jsx
import React, { useRef } from 'react';

const MyComponent = () => {
  const renderCount = useRef(0);

  renderCount.current++; // Increase the count without causing a re-render

  return (
    <div>
      <p>Component has rendered {renderCount.current} times.</p>
      {/* Other JSX content */}
    </div>
  );
};
```

In summary, `useRef` is a handy tool in React that helps you work with DOM elements directly and maintain data between renders without causing unnecessary re-renders. It's useful for managing things that don't need to be part of the component's state but still need to be accessed and preserved across renders.


Why memo?
React is very fast at re-rendering and 99.999% of the time you never have to worry when React re-renders, just that your view is a function of your state.

The .001% of times you care is when you have something that is either very performance sensitive and you want to have a tighter grip on the performance or something like our Three.js app running in it where re-rendering it will destroy and re-create a pretty expensive thing to re-render. It also looks bad because it'll reset the animation.

React.memo tells React "as long as the parameters being passed into this component don't change, do not re-render it ever. You might be tempted to do this on every component but believe me, don't. Things will no re-render when you expect them to and you will forget you memoized them. Only use memo where you need to.