import React, { Component } from 'react';
import Card from '../common/Card/Card';
import Button from '../common/Button/Button';

import './style/Auth.css';

export default class Auth extends Component {
  state = {
    logged: false,
  };

  toggleLogin = () => {
    this.setState(state => ({
      logged: !state.logged,
    }));
  };

  render() {
    const { logged } = this.state;
    return (
      <Card className="auth">
        <label>
          Email
          <input className="auth__input" type="text" />
        </label>
        <label>
          Password
          <input className="auth__input" type="password" />
        </label>

        <Button onClick={() => this.toggleLogin()}>{logged ? 'Выйти' : 'Войти'}</Button>
      </Card>
    );
  }
}
