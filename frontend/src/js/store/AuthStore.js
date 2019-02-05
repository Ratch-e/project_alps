import {observable, action} from 'mobx';

class AuthStore {
  @observable loggedInUser = "";

  @action
  setLoggedInUser = (user) => this.loggedInUser = user;
}

export default new AuthStore();