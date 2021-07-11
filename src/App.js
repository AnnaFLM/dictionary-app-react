import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Anna Mehnert. It is open sourced on{" "}
            <a href="https://github.com/AnnaFLM/dictionary-app-react">Github</a>{" "}
            and hosted on Netlify.
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
