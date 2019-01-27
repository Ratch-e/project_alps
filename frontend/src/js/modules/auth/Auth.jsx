import React, { Component } from 'react';
import Axios from 'axios';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

import './style/Auth.css';

export default class Auth extends Component {
  state = {
    logged: false,
    email: '',
    password: '',
  };

  toggleLogin = () => {
    this.setState(state => ({
      logged: !state.logged,
    }));
  };

  handleEmailInput = (email) => {
    this.setState({
      email: email.target.value,
    })
  }

  handlePasswordInput = (password) => {
    this.setState({
      password: password.target.value,
    })
  }

  authorize = () => {
    Axios.post('/api/signin/', {
      email: this.state.email,
      password: this.state.password,
    }).then(() => this.toggleLogin())
  }

  render() {
    const { logged, email, password } = this.state;
    return (
      <Card className="auth">
        <label>
          Email
          <input className="auth__input" type="text" value={email} onChange={this.handleEmailInput}/>
        </label>
        <label>
          Password
          <input className="auth__input" type="password" value={password} onChange={this.handlePasswordInput}/>
        </label>

        <Button onClick={this.authorize}>{logged ? 'Выйти' : 'Войти'}</Button>
      </Card>
    );
  }
}
