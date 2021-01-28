# learn-react-easy

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/learn-react-easy)


This is my React learning project, I will learn and implement the concepts simulatenously.

>  Install the React developer tools, which will easy our work while working on the project.

### Installation and project creation
Command to do intial check (we need to have the node installed)
- node -v
- npm -v


Steps for project set up:
- npx create-react-app projectName
	 - npx is the package runner
- npm start

After the successful creation, open the browser and hit http://localhost:3000 to view your project.

1. **package.json**: This file contain all our dependencies and scripts.
2. **src**: where our project related code resides.
3. **public**: It contains images and other static thing

For now mainly concentrate on App folder index.js file. It contain **ReactDOM.render()** function which is used to add the elements to the DOM.

> Ex:
ReactDOM.render(
  React.createElement('h1', {style: {color: 'blue'}}, "hello"),
   document.getElementById("root")
);

Above piece of code adds the element to the DOM. 
- 1st argument is what we want to create.
- 2nd argument is where we want to create.

The element with id 'root' is present in the index.html of public folder. This is really simple, as we are rendering the html with the help of react library. Now what if we want to render an unordered list. Then the code becomes as follows:

> ReactDOM.render(
  React.createElement('ul', {style: {color: 'blue'}}, 
  React.createElement('li', null, "Monday"),
  React.createElement('li', null, "Tuesday"),
  React.createElement('li', null, "Wednesday")
  ),
   document.getElementById("root")
);

Now, As soon we see this, the question that comes to our mind is - are we going to use this createElement functions to create the entire application? If yes, then this is a mess.

Now JSX comes to save us. JSX is Javascript as XML - it is the language extension which allows you to write html directly into JS.

`ReactDOM.render(
  <ul>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
  </ul>,
   document.getElementById("root")
);`

This above code is the alternate version. It accepts the html and convert it into JS. The tool that works behind the scene is babel. 

Try the above code in the editor of babel: https://babeljs.io/repl















