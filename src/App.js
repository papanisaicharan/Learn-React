import React, { useEffect, useReducer, useState } from "react";
import "./style.css";

function SecretComponent() {
  return <h1>This is secretComponent</h1>;
}

function PublicComponent() {
  return <h1>This is publicComponent</h1>;
}

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
  // if (props.isSecret) {
  //   return <SecretComponent />;
  // } else {
  //   return <PublicComponent />;
  // }
  return (
    <>
      <h1>Current emotion is {emotion} and {second}</h1>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setSecondary("Grabby")}>Grabby</button>
      <button onClick={() => setSecondary("tired")}>tired</button>
      <button onClick={() => setEmotion("Frustrated")}>Frustrated</button>
      <button onClick={() => setEmotion("enthusiastic")}>enthusiastic</button>
      {isSecret ? <SecretComponent /> : <PublicComponent />}
      <App1 />
      <App2 />
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
