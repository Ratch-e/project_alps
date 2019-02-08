import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('AuthStore')
@observer
export default class UserBar extends Component {
  render() {
    return(
      <div className="user-bar">
        {this.props.AuthStore.loggedInUser.email || 'No user'}
      </div>
    ); 
  }
}