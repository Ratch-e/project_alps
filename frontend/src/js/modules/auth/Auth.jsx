import React, { Component } from 'react';
import Button from '../common/Button/Button'

import './style/Auth.css';

export default class Auth extends Component {
  state = {
    logged: false,
  }

  toggleLogin = () => {
    this.setState({
      logged: !this.state.logged
    })
  }

  render() {
    const { logged } = this.state;
    return (
      <div className="Auth">
        <input className="Auth__input" type="text" />
        <input className="Auth__input" type="password" />

        <Button onClick={() => this.toggleLogin()}>
          {logged ? 'Выйти' : 'Войти'}
        </Button>

      </div>
    );
  }
}
