import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

const RequiresAuth = Child =>
  withRouter(
    inject("AuthStore")(
      observer(
        class extends Component {
          componentDidMount() {
            this.shouldNavigateAway();
          }

          componentDidUpdate() {
            this.shouldNavigateAway();
          }

          shouldNavigateAway = () => {
            const { AuthStore, history } = this.props;
            if (!AuthStore.loggedInUser) {
              history.push("/");
            }
          };

          render() {
            return <Child />;
          }
        },
      ),
    ),
  );

export default RequiresAuth;
