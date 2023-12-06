import "./App.css";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import Comment from "./Components/Comment";
import Connect from "./Components/Connect";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Stats />
      <Comment />
      <Connect />
    </div>
  );
}

export default App;
