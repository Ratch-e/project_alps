import React from 'react';
import UserBar from '../User/UserBar';

const Header = () => (
  <div className="header">
    <div className="header__block">Лого</div>
    <div className="header__block">
      <UserBar />
    </div>
  </div>
)

export default Header;