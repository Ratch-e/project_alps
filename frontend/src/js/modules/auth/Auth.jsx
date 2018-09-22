import React, {Component} from 'react';

export default class Auth extends Component {
  render() {
    return (
      <div className="Auth">
        <input type="text"/>
        <input type="text"/>
        <button>Войти</button>
      </div>
    )
  }
}