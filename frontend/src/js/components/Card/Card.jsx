import React from "react";
import classnames from "classnames";
import "./style/card.sass";

const Card = ({ children, className }) => (
  <div className={classnames("card", className)}>{children}</div>
);

export default Card;
