import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NoPage extends Component {
  render() {
    return (
      <div>
        Hi, there no page exist for you. Go <Link to="/">here</Link>!
      </div>
    );
  }
}
