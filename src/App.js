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

function App() {
  return (
    <Jumbotron fluid className="mainJumbo">
      <Router>
        <Homebar />
        <Route exact path="/About" component={About} />
        <Route exact path="/Software_Portfolio" component={SoftwarePortfolio}/>
        <Route exact path="/Robotics_Portfolio" />
        <Route exact path="/Contact" />
      </Router>
    </Jumbotron>
  );
}

export default App;