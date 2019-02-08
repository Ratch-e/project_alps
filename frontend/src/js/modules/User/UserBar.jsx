import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from "react-router-dom";
import { LOGIN } from '../../constants/routing'

@inject('AuthStore')
@observer
export default class UserBar extends Component {
  logout = () => {
    const { setLoggedInUser } = this.props.AuthStore;
    setLoggedInUser(null);
  }
  render() {
    const { loggedInUser } = this.props.AuthStore;
    return (
      <div className="user-bar">
        <div className="user-bar__name">
          {loggedInUser ? loggedInUser.email : 'No user'}
        </div>
        <div className="user-bar__action">
          {loggedInUser ? (
            <a onClick={this.logout} href="#">Выйти</a>
          ) : <Link to={LOGIN}>Войти</Link> }
        </div>
      </div>
    );
  }
}
