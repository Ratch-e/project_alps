import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { LOGIN } from '../../constants/routing';
import Auth from '../../modules/Auth/Auth';
import MainPage from '../../modules/MainPage/MainPage'
import NoPage from '../../modules/NoPage/NoPage'

const Routing = ({ children }) => (
  <Router>
    <Switch>
      <Route path="/" exact component={MainPage}></Route>
      <Route path={LOGIN} exact component={Auth}></Route>
      <Route component={NoPage}></Route>
    </Switch>
  </Router>
);

export default Routing;