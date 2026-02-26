{
  /* 
  <div id="parent">
    <div id="child">
      <h1></h1>
    </div>
  </div>; 
  */
}

// If we have to create above nested Structure we can do so by the following:-
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h2", {}, "This is sibling1"),
    React.createElement("h2", {}, "This is sibling2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", {}, "This is sibling 3"),
    React.createElement("h2", {}, "This is sibling 4"),
  ]),
]);

// This is written purely in React(behind is basically Javascript), but this is difficult if the code gets larger and larger
// This is where the JSX components comes into picture

const root1 = ReactDOM.createRoot(document.getElementById("container1"));

root1.render(parent);

// If an element is already present inside our "container1" element, then our render() method will replace it by our parent object

// -------------------------------------------------------------------------------------------

const heading = React.createElement(
  "h1",
  { id: "heading", className: "heading-container" },
  "Hello from React!!",
);

console.log(heading); // heading here acts as an normal JavaScript Object with type h1

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(heading); // This render() method is responsible for taking the heading object,
// convert it to the heading h1 tag and then put it in the DOM

// Creating an element in React :-
// 1. To create an element in react we can use the React.createElement(args1, args2, args3),
// which takes three arguments (element, attributes to our tags, title);
// React element is nothing but a normal JavaScript Object.

// Creating a root in React :-
// 1. Root in react helps us with DOM manipulation
// 2. Creating a Root is part of ReactDOM, we can use ReactDOM.createRoot(args1)
// 3. It takes one argument, which is the id from the browsers dom
// 4. Everything that you want to render, you need to render it inside root

// Now we want to render heading inside our root, for that we can root.render(args1)
// Pass the element you want to render

// React was developed with the original idea, so that we can manipulate/update browsers DOM with JS.
