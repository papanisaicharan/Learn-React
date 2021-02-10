import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

function App2() {
  return <h2>Second App</h2>;
}

ReactDOM.render(
  <React.Fragment>
    <App />
    <App2 />
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
