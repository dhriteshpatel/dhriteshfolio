import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/contact" component={Contact} />
        </Switch>

        <Footer />
      </div>

    </Router>

  );
}

export default App;
