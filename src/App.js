import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            coded by Anna, open sourced on{" "}
            <a href="https://github.com/AnnaFLM/dictionary-app-react">Github</a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
