import { createContext } from 'react';
import { observable, action } from 'mobx';

class AuthStoreClass {
  @observable
  loggedInUser = JSON.parse(localStorage.getItem('AlpsUser'));

  @action
  setLoggedInUser = (user) => {
      this.loggedInUser = user;
  };
}

const AuthStore = createContext(new AuthStoreClass());

export default AuthStore;
