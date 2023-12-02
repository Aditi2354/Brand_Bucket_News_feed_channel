import { useEffect, useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Feedback from './components/Feedback/Feedback';
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/feedback">
          <Feedback/>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
