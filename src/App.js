import React from "react";
import "./style.css";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Blog</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <h3>{props.adjective}</h3>
      <ul style={{ textAlign: "left" }}>
        {props.lang.map((lan, index) => (
          <li key={index}>{lan}</li>
        ))}
      </ul>
    </section>
  );
}

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
console.log(languageObjects);

function Footer(props) {
  return (
    <footer>
      <h5>Copyright {props.year}</h5>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Saicharan Papani" />
      <Main adjective="Passing from main" lang={languages} />
      <Main1 adjective="Repeat with keys" lang={languageObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
