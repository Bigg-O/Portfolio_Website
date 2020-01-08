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
          
        </Route>
      </div>
    </Router>
  );
}

export default App;