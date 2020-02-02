import React from "react";
import classnames from "classnames";
import "./card.sass";

const Card = ({ children, className }) => (
  <div className={classnames("card", className)}>{children}</div>
);

export default Card;
