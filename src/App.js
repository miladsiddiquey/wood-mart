import React from 'react';
import Home from './component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './component/menubar/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route path = "/home"><Home /></Route>
        <Route exact path = "/"><Home /></Route>
      </Switch>
    </Router>
  );
};

export default App;