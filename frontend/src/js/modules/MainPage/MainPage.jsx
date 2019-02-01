import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { LOGIN } from '../../constants/routing'

export default class MainPage extends Component {
  render() {
    return(
      <div>
        Hi, I am a main page. You can login <Link to={LOGIN}>here</Link>!
      </div>
    ); 
  }
}