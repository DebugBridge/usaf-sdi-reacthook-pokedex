import './App.css';
import About from "./About.js";
import Home from "./Home.js";
import PokeInfo from "./PokeInfo.js";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"


function App() {
  return (
    <div class="app-background">
      <div class="row card-holder">
        <Router>
          <nav>
            <Link exact to="/">Home</Link>
            <Link exact to="/about">About</Link>
          </nav>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/pokemon/" component={PokeInfo}/>
        </Router>
      </div>
    </div>
  );
}

export default App;
