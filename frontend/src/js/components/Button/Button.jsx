import React from 'react';
import classnames from 'classnames'; 
import './style/button.css';

const Button = ({ children, onClick, className, type }) => (
  <button 
    className={classnames('button', className)}
    onClick = {onClick}
    type = {type}
    >
    { children }
  </button>
);

export default Button;