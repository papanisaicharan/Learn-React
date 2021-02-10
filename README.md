# learn-react-easy

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/learn-react-easy)

**Note:** This codes and content is taken from a course.

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

The element with id 'root' is present in the index.html of public folder. This is really simple, as we are rendering the html with the help of react library. Now what if we want to render an unordered list. Then the code becomes as follows

```javascript
ReactDOM.render(
  React.createElement('ul', {style: {color: 'blue'}}, 
  React.createElement('li', null, "Monday"),
  React.createElement('li', null, "Tuesday"),
  React.createElement('li', null, "Wednesday")
  ),
   document.getElementById("root")
);
```


Now, As soon we see this, the question that comes to our mind is - are we going to use this createElement functions to create the entire application? If yes, then this is a mess.

Now JSX comes to save us. JSX is Javascript as XML - it is the language extension which allows you to write html directly into JS.


```javascript
ReactDOM.render(
  <ul>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
  </ul>,
   document.getElementById("root")
);
```


This above code is the alternate version. It accepts the html and convert it into JS. The tool that works behind the scene is babel. 

Try the above code in the editor of babel to understand more: https://babeljs.io/repl

## ChapterRLv0.1

### **React component**
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

```javascript
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
```

## ChapterRL0.3

Adding an image (Image should be in the same folder to work properly):
```javascript
import React from "react";
import "./style.css";
import image from './image.png'

function Header(props) {
  return (
    <header>
      <img src={image} height="200" alt="profile-pic"/>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
```
**Fragments**
Fragments are nothing but the JSX wrappers,  see the below example to understand it.
```javascript
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

function App2(){
  return (
    <h2>Second App</h2>
  )
}
ReactDOM.render(
  <App/>
  <App2/>,
   document.getElementById("root")
);
```
The above code will through you an error because you cannot have the two component in first argument of the render function, So use the react Fragments as below
```javascript
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

function App2(){
  return (
    <h2>Second App</h2>
  )
}

ReactDOM.render(
  <React.Fragment>
    <App/>
    <App2/>
  </React.Fragment>,
   document.getElementById("root")
);

// Below two also works the same way
// ReactDOM.render(
//   <>
//     <App/>
//     <App2/>
//   </>,
//    document.getElementById("root")
// );

// ReactDOM.render(
//   <div>
//     <App/>
//     <App2/>
//   </div>,
//    document.getElementById("root")
// );
```

## ChapterRL0.4

Conditional rendering (pass true or false as parameters to this component):

```javascript
import React from "react";
import "./style.css";

function SecretComponent() {
  return <h1>This is secretComponent</h1>;
}

function PublicComponent() {
  return <h1>This is publicComponent</h1>;
}

function App(props) {
  // if (props.isSecret) {
  //   return <SecretComponent />;
  // } else {
  //   return <PublicComponent />;
  // }
  return (
    <>
      {props.isSecret ? <SecretComponent /> : <PublicComponent />}
    </>
  )
}

export default App;
```
**Array destructuring**

It is a simple way of pulling out the element of the array, see beloe example to understand more. They are useful when we are destructuring the props.

```javascript
const arr = [1,2,3];
console.log(arr);

// destructring
const [first] = [1,2,3];
console.log(first);

// destructring
const [,,last] = [1,2,3];
console.log(last);
```
**Managing the state**

We can manage the state in react using the useState hook. Please refer below example:
```javascript
import React, { useState } from "react";
import "./style.css";

function App({ isSecret }) {
  const [emotion, setEmotion] = useState("happy");
  return (
    <>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setEmotion("Frustrated")}>Frustrated</button>
      <button onClick={() => setEmotion("enthusiastic")}>enthusiastic</button>
    </>
  )
}

export default App;

```
**useEffect hook**

when a defined state is changed, the useEffect will automatically gets triggered. It is almost like a side effect, which occurs after the change is happened on the state. It is almost like formControl valueChanges in angular. Common usages are printing the console logs, making backend calls and doing some animations etc. 
All the useEffects will be executed if they are not specifically mentioned for which state variable changes they have to respond.
Below example gives you a clear picture.

```javascript
import React, { useEffect, useState } from "react";
import "./style.css";

// used array destructuring
function App({ isSecret }) {
  const [emotion, setEmotion] = useState("happy");

  useEffect(() => {
    console.log(`It's ${emotion} around hear! 1`);
  });

  useEffect(() => {
    console.log(`It's ${emotion} around hear! 2`);
  });

  return (
    <>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setEmotion("Frustrated")}>Frustrated</button>
      <button onClick={() => setEmotion("enthusiastic")}>enthusiastic</button>
      {isSecret ? <SecretComponent /> : <PublicComponent />}
    </>
  )
}

export default App;
```

Execute something only when a specific state is changed.

```javascript
import React, { useEffect, useState } from "react";
import "./style.css";

// used array destructuring
function App({ isSecret }) {
  const [emotion, setEmotion] = useState("happy");
  const [second, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around hear! 1`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${second} around hear! 2`);
  }, [second]);

  return (
    <>
      <h1>Current emotion is {emotion} and {second}</h1>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setSecondary("Grabby")}>Grabby</button>
      <button onClick={() => setSecondary("tired")}>tired</button>
      <button onClick={() => setEmotion("Frustrated")}>Frustrated</button>
      <button onClick={() => setEmotion("enthusiastic")}>enthusiastic</button>
      {isSecret ? <SecretComponent /> : <PublicComponent />}
    </>
  )
}

export default App;
```
In the below code, state functions takes the current state and returns the new state.

```javascript
import React, { useEffect, useState } from "react";
import "./style.css";

// used array destructuring
function App({ isSecret }) {
  return (
    <>
      <App1 />
    </>
  )
}

function App1() {
  const [checked, setChecked] = useState(false);

  function toggle(){
    // not only value, we can pass the function as parameter to get executed
    setChecked((checked) => {
      console.log(checked);
      return !checked;
    })
  }

  // return (
  //   <>
  //     <input type="checkbox" value={checked} onChange={() => setChecked((checked) => !checked)}/>
  //     <p>{checked? "checked": "not checked"}</p>
  //   </>
  // )

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle}/>
      <p>{checked? "checked": "not checked"}</p>
    </>
  )
}

export default App;

```
Instead of doing this manually, we can do it using useReducer. userReducer - This is a simple function that takes the current state as the input and returns the new state.

```javascript
import React, { useEffect, useReducer, useState } from "react";
import "./style.css";

// used array destructuring
function App({ isSecret }) {
  return (
    <>
      <App2 />
    </>
  )
}

function App2() {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  )

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle}/>
      <p>{checked? "checked": "not checked"}</p>
    </>
  )
}

export default App;
```

## ChapterRL0.5
#### Asynchronous react

**Using the Hooks to call an api**
```javascript
import React, { useEffect, useReducer, useState } from "react";
import "./style.css";

// used array destructuring
function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then(setData)
  }, []);

  if(data){
    return (
      <>
        <div>{JSON.stringify(data)}</div>
        <h6>{data.name}</h6>
        <h6>{data.location}</h6>
        <img alt={data.login} src={data.avatar_url} />
      </>
    )
  }

  return <div>No data</div>
}

export default App;
```
**Handling the loading state**
```javascript
import React, { useEffect, useReducer, useState } from "react";
import "./style.css";

// used array destructuring
function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError)
  }, [login]);

  if(loading) return <h1>Loading...!</h1>
  if(error)
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  if(!data) return null;

  return (
    <>
      <div>{JSON.stringify(data)}</div>
      <h6>{data.name}</h6>
      <h6>{data.location}</h6>
      <img alt={data.login} src={data.avatar_url} />
    </>
  )
}

export default App;
```


