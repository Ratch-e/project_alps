import React from "react";
import classnames from "classnames";
import "./style/button.sass";

const Button = ({ children, onClick, className, type = "button" }) => (
  <button
    className={classnames("button", className)}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

export default Button;
