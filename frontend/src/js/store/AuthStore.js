import { observable, action } from "mobx";

class AuthStore {
  @observable loggedInUser = JSON.parse(localStorage.getItem("AlpsUser"));

  @action
  setLoggedInUser = user => (this.loggedInUser = user);
}

export default new AuthStore();
