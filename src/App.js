import React from 'react';
import Homebar from './Components/Homebar'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import About from './Components/About'
import './App.css'
import Jumbotron from 'react-bootstrap/Jumbotron'

function App() {
  return (
    <Jumbotron fluid className="mainJumbo">
      <Router>
        <Homebar />
        <Route exact path="/">
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Software_Portfolio">
        </Route>
        <Route exact path="/Robotics_Portfolio">
        </Route>
        <Route exact path="/Software_Resume">
        </Route>
        <Route exact path="/Routesetting_Resume">
        </Route>
        <Route exact path="/Climbing_Resume">
        </Route>
        <Route exact path="/Contact">
        </Route>
      </Router>
    </Jumbotron>
  );
}

export default App;