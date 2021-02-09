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

```
ReactDOM.render(
  React.createElement('h1', {style: {color: 'blue'}}, "hello"),
   document.getElementById("root")
);```

Above piece of code adds the element to the DOM. 
- 1st argument is what we want to create.
- 2nd argument is where we want to create.

The element with id 'root' is present in the index.html of public folder. This is really simple, as we are rendering the html with the help of react library. Now what if we want to render an unordered list. Then the code becomes as follows:

```
ReactDOM.render(
  React.createElement('ul', {style: {color: 'blue'}}, 
  React.createElement('li', null, "Monday"),
  React.createElement('li', null, "Tuesday"),
  React.createElement('li', null, "Wednesday")
  ),
   document.getElementById("root")
);```

Now, As soon we see this, the question that comes to our mind is - are we going to use this createElement functions to create the entire application? If yes, then this is a mess.

Now JSX comes to save us. JSX is Javascript as XML - it is the language extension which allows you to write html directly into JS.

```
ReactDOM.render(
  <ul>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
  </ul>,
   document.getElementById("root")
);```

This above code is the alternate version. It accepts the html and convert it into JS. The tool that works behind the scene is babel. 

Try the above code in the editor of babel to understand more: https://babeljs.io/repl

# ChapterRLv0.1

## **React component**
It is a block of the page, where it can work or restructure itself based on the user interaction.

To understand it more clearly. please visit the App.js in the above link.
The function with name app is exported and it return the html content. This app component can be plugged anywhere on the entire webpage and even it can be reused entirely.

**Step to build and use component:**
- Create the function in app.js which returns html content and export it.
- import in the index.js and use it.

Please view Header and its usage in App function of App.js for your reference.
Please visit https://github.com/papanisaicharan/Learn-React/releases/tag/ChapterRL0.1 for the above functionalities.

## ChapterRL0.2
**How to pass the data into the components:**

**Simple question**: How do you pass inputs to a function? if you know this, then you already have an answer. Every functon has access to the **props** object and you can use this to get the inputs into the function.

```javascript
import React from "react";
import "./style.css";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Blog</h1>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Saicharan Papani" />
    </div>
  );
}

export default App;
```
Sent the name and accessed it using props.

**Now lets see how we can pass the list:**

If we want to pass the variable instead of string to the component, do not use quotes but wrap the variable name in flower brackets {}.

It is always better to keep track of the elements that we render. The key will help in tracking the elements of the list. So used key for li. It not mandatory for a key to be index only.

```javascript
function Main(props) {
  return (
    <section>
      <h3>{props.adjective}</h3>
      <ul style={{textAlign: "left"}}>
        {props.lang.map((lan, index) => (
          <li key={index}>{lan}</li>
        ))}
      </ul>
    </section>
  );
}

const languages = [
  "c",
  "c++",
  "java",
  "python"
]

function App() {
  return (
    <div className="App">
      <Main adjective="Passing from main" lang={languages}/>
    </div>
  );
}

export default App;
```
Note: Even inline styles should be wrapped in {}. Just Tune your mind stating that if something is not html in your function, you have to wrap it in {}. Style are followed as per the javascript camel casing.

**Keys and List**

    function Main1(props) {
      return (
        <section>
          <h3>{props.adjective}</h3>
          <ul style={{ textAlign: "left" }}>
            {props.lang.map(language => (
              <li key={language.id}>{language.language}</li>
            ))}
          </ul>
        </section>
      );
    }
    const languages = ["c", "c++", "java", "python"];
    const languageObjects = languages.map((lan, i) => ({ id: i, language: lan }));
    
    function App() {
      return (
        <div className="App">
          <Main1 adjective="Repeat with keys" lang={languageObjects} />
        </div>
      );
    }
    
    export default App;























