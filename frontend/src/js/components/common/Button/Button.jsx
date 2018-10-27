import React from 'react';
import classnames from 'classnames'; 
import './style/button.css';

const Button = ({ children, onClick, className }) => (
  <button 
    className={classnames('button', className)}
    onClick = { () => onClick() }
    >
    { children }
  </button>
);

export default Button;