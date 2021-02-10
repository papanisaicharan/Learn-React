import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const arr = [1, 2, 3];
console.log(arr);

// destructring
const [first] = [1, 2, 3];
console.log(first);

// destructring
const [, , last] = [1, 2, 3];
console.log(last);

ReactDOM.render(<App isSecret={true} />, document.getElementById("root"));
