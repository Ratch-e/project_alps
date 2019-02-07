import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { LOGIN, SIGNUP } from '../../constants/routing';
import Login from '../../modules/Auth/Login';
import SignUp from '../../modules/Auth/SignUp';
import MainPage from '../../modules/MainPage/MainPage';
import NoPage from '../../modules/NoPage/NoPage';

const Routing = ({ children }) => (
  <Router>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path={LOGIN} exact component={Login} />
      <Route path={SIGNUP} exact component={SignUp} />
      <Route component={NoPage} />
    </Switch>
  </Router>
);

export default Routing;