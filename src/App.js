import React from "react";
import "./style.css";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Blog</h1>
    </header>
  );
}

function Main1(props) {
    // if want to get from the app, place the image in the public folder and import it here and use it
  return (
    <section>
      <h3>{props.adjective}</h3>
      <img src="https://avatars.githubusercontent.com/u/25131591?v=4" height="200" alt="profile-pic"/>
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
      <Main1 adjective="Repeat with keys" lang={languageObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
