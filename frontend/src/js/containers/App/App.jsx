import React, { Component, Fragment } from 'react';
import { Provider } from 'mobx-react';

import Routing from '../../containers/Routing/Routing';
import AuthStore from '../../store/AuthStore';
import Header from '../../modules/Header/Header';

const stores = {
  AuthStore,
};
export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Fragment>
          <Header />
          <Routing />
        </Fragment>
      </Provider>
    );
  }
}
