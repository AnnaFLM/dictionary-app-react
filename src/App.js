import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <span className="Headline">The</span> Dictionary{" "}
          <span className="Headline">App</span>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Anna Mehnert. It is open sourced on{" "}
            <a href="https://github.com/AnnaFLM/dictionary-app-react">Github</a>{" "}
            and hosted on{" "}
            <a href="https://wizardly-kalam-30dacc.netlify.app">Netlify</a>.
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
