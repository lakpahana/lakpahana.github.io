useLayoutEffect is almost the same as useEffect except that it's synchronous to render as opposed to scheduled like useEffect is. If you're migrating from a class component to a hooks-using function component, this can be helpful too because useLayoutEffect runs at the same time as componentDidMount and componentDidUpdate whereas useEffect is scheduled after. This should be a temporary fix.

The only time you should be using useLayoutEffect is to measure DOM nodes for things like animations. In the example, I measure the textarea after every time you click on it (the onClick is to force a re-render.) This means you're running render twice but it's also necessary to be able to capture the correct measurments.

If you make the useLayoutEffect into a useEffect it will have a janky re-render where it'll flash before it renders correctly. This is exactly why we need useLayoutEffect.


A new hook for version 18 of React is useId. Frequently in React you need unique identifiers to associate two objects together. An example of this would be making sure a label and an input are associated together by the htmlFor attribute.

Previously you could maintain some sort of unique counter that was tracked across renders. With concurrent React and batching in version 18 that's no longer possible. useId will give you a consistent via a hook so that they can always be the same.

This is useful for the thing we see above: we have a label which needs a for attribute that corresponds to an input. We would either need to use some piece of data/parameter that we'd pass into the component that would serve as the key or we can use this hook to give it a unique ID.

If you need multiple IDs in the same component just do {id}-name, {id}-address, ``{id}-number, etc. No need to call useId` multiple times.

This is safe across server-side renders and client-side.