import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1 className="App-header">LOOK IT UP!</h1>
        <p className="App-name">The Dictionary App</p>
        <br />
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Anna Mehnert. It is open sourced on{" "}
            <a
              href="https://github.com/AnnaFLM/dictionary-app-react"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://wizardly-kalam-30dacc.netlify.app"
              target="blank"
              rel="noreferrer"
            >
              Netlify
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
