import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LOGIN, SIGNUP } from '../../constants/routing';
import Login from '../../modules/Auth/Login';
import Header from '../../modules/Header/Header';
import SignUp from '../../modules/Auth/SignUp';
import MainPage from '../../modules/MainPage/MainPage';
import Profile from '../../modules/User/Profile';
import NoPage from '../../modules/NoPage/NoPage';

const Routing = ({ children }) => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path={LOGIN} exact component={Login} />
        <Route path={SIGNUP} exact component={SignUp} />
        <Route path='/profile/' exact component={Profile} />
        <Route component={NoPage} />
      </Switch>
    </div>
  </Router>
);

export default Routing;
