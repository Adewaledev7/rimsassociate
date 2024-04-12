import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Features />
      <About />
      <Contact />
    </div>
  );
}

export default App;
