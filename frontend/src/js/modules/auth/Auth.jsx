import React, { Component } from 'react';
import Card from '../common/Card/Card'
import Button from '../common/Button/Button'

import './style/auth.css';

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
      <Card className="auth">
        <input className="auth__input" type="text" />
        <input className="auth__input" type="password" />

        <Button onClick={() => this.toggleLogin()}>
          {logged ? 'Выйти' : 'Войти'}
        </Button>

      </Card>
    );
  }
}
