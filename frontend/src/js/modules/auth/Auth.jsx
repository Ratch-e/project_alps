import React, { Component } from 'react';
import './style/Auth.css';

export default class Auth extends Component {
  render() {
    return (
      <div className="Auth">
        <input className="Auth__input" type="text" />
        <input className="Auth__input" type="password" />
        <button className="Auth__button">Войти</button>
      </div>
    );
  }
}
