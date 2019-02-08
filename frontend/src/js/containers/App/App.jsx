import React, { Component, Fragment } from 'react';
import { Provider } from 'mobx-react';

import Routing from '../../containers/Routing/Routing';
import AuthStore from '../../store/AuthStore';

const stores = {
  AuthStore,
};
export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Fragment>
          <Routing />
        </Fragment>
      </Provider>
    );
  }
}
