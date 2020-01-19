import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { LOGIN, SIGNUP, ROOT, PROFILE_PAGE } from "../../constants/routing";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import MainPage from "../MainPage/MainPage";
import Profile from "../User/Profile";
import NoPage from "../NoPage/NoPage";
import Header from "../Header/Header";

const Routing = ({ children }) => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path={ROOT} exact component={MainPage} />
        <Route path={LOGIN} exact component={Login} />
        <Route path={SIGNUP} exact component={SignUp} />
        <Route path={PROFILE_PAGE} exact component={Profile} />
        <Route component={NoPage} />
      </Switch>
    </div>
  </Router>
);

export default Routing;
