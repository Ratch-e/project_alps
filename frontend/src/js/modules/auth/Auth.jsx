import React, { Component } from 'react';
import Axios from 'axios';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { SIGNIN_API } from '../../constants/routing'
import './style/Auth.css';

export default class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    };
  }

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
    const { email, password } = this.state;
    Axios.post(SIGNIN_API, {
      email,
      password,
    }).then((res) => console.log(res))
  }

  render() {
    const { email, password } = this.state;
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
        <Button onClick={this.authorize}>Войти</Button>
      </Card>
    );
  }
}
