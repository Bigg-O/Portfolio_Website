import React from 'react';
import Homebar from './Components/Homebar'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Homebar />

        <Route exact path="/">
          {console.log("main page")}
        </Route>
        
        <Route exact path="/About">
          {console.log("about me")}
        </Route>
        <Route exact path="/Software_Portfolio">
          {console.log("software portolio")}
        </Route>
        <Route exact path="/Robotics_Portfolio">
          {console.log("robotics portfolio")}
        </Route>
        <Route exact path="/Software_Resume">
          {console.log("Software_Resume")}
        </Route>
        <Route exact path="/Routesetting_Resume">
          {console.log("Routesetting_Resume")}
        </Route>
        <Route exact path="/Climbing_Resume">
          {console.log("Climbing_Resume")}
        </Route>
        <Route exact path="/Contact">
          {console.log("Contact")}
        </Route>
      </div>
    </Router>
  );
}

export default App;