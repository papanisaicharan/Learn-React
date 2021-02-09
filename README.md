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

```javascript
ReactDOM.render(
  React.createElement('h1', {style: {color: 'blue'}}, "hello"),
   document.getElementById("root")
);
```

Above piece of code adds the element to the DOM. 
- 1st argument is what we want to create.
- 2nd argument is where we want to create.

The element with id 'root' is present in the index.html of public folder. This is really simple, as we are rendering the html with the help of react library. Now what if we want to render an unordered list. Then the code becomes as follows:
