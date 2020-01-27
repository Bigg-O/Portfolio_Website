import React from 'react';
import Homebar from './Components/Homebar'
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import About from './Components/About'
import './App.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import SoftwarePortfolio from './Containers/SoftwarePortfolio'
import Contact from './Containers/Contact'
import Welcome from './Components/Welcome'

function App() {
  return (
    <Jumbotron fluid className="mainJumbo">
      <Router>
        <Homebar />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Software_Portfolio" component={SoftwarePortfolio}/>
        <Route exact path="/Contact" component={Contact}/>
      </Router>
    </Jumbotron>
  );
}

export default App;