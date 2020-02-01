import React, { useEffect, useContext, Children } from "react";
import { useHistory } from "react-router-dom";
import AuthStore from "../store/AuthStore";

const RequiresAuth = ({ children }) => {
  const history = useHistory();
  const store = useContext(AuthStore);
  const shouldNavigateAway = () => {
    if (!store.loggedInUser) {
      history.push("/");
    }
  };

  useEffect(() => shouldNavigateAway(), []);

  return <>{children}</>;
};

export default RequiresAuth;
