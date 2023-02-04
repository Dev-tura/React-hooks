import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import MovieCard from "./Components/MovieCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Header />
      <MovieCard
        title="Nobody"
        description="Hutch Mansell finds his life changed when a few thieves break into his house. While trying to punish the thieves, he ends up earning the wrath of a crime lord, Yulian, after he attacks his brother."
        posterURL={
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcREOd5KufX0L40TDjMk6c7W6W2-NFyo4qryNP7-DGKdIDeeIYmdclear"
        }
        rating="5.0"
      />
    </div>
  );
}

export default App;
