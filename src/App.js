import React from "react";
import "./style.css";

function Header() {
  return (
    <header>
      <h1>Saicharan's Blog</h1>
    </header>
  );
}

function Main() {
  return (
    <section>
      <h3>Learn how i am made</h3>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <h5>footer</h5>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
