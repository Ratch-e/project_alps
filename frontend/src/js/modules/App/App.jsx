import React from "react";
import { Provider } from "mobx-react";

import Routing from "../Routing/Routing";
import AuthStore from "../../store/AuthStore";

const stores = {
  AuthStore,
};

const App = () => (
  <Provider {...stores}>
    <Routing />
  </Provider>
);

export default App;
