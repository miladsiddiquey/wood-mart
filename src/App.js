import React from 'react';
import Home from './component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './component/menubar/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SingleProduct from './component/pages/singleProduct/SingleProduct';
import Bed from './component/pages/categoryPages/Bed';
import BedroomItem from './component/pages/categoryPages/BedroomItem';
import Chair from './component/pages/categoryPages/Chair';
import LampItem from './component/pages/categoryPages/LampItem';
import OfficeDesk from './component/pages/categoryPages/OfficeDesk';
import Sofa from './component/pages/categoryPages/Sofa';


const App = () => {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route path = "/home"><Home /></Route>
        <Route path = "/singleProduct/:Id"><SingleProduct /></Route>
        <Route path = "/bed"><Bed/></Route>
        <Route path = "/bedroomItem"><BedroomItem/></Route>
        <Route path = "/chair"><Chair/></Route>
        <Route path = "/lampItem"><LampItem/></Route>
        <Route path = "/officeDesk"><OfficeDesk/></Route>
        <Route path = "/sofa"><Sofa/></Route>
        <Route exact path = "/"><Home /></Route>
      </Switch>
    </Router>
  );
};

export default App;