import { createContext } from "react";
import { observable, action } from "mobx";
class AuthStore {
  @observable
  loggedInUser = JSON.parse(localStorage.getItem("AlpsUser"));

  @action
  setLoggedInUser = user => {
    this.loggedInUser = user;
  };
}

export default createContext(new AuthStore());
