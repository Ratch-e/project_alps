import React, { Component } from "react";
import RequiresAuth from "../../helpers/RequiresAuth";

@RequiresAuth
export default class Profile extends Component {
  render() {
    return <p>Это мой профиль!</p>;
  }
}
