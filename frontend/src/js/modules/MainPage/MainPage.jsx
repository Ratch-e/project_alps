import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { LOGIN, SIGNUP } from '../../constants/routing'

export default class MainPage extends Component {
  render() {
    return(
      <div>
        Я - главная страница. Вы можете <Link to={LOGIN}>зайти</Link> или <Link to={SIGNUP}>создать нового пользователя</Link>!
      </div>
    ); 
  }
}