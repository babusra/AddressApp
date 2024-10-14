import React from 'react';
import Navigation from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import store from './src/reduxToolkit/store';
import './src/common/localization/i18n'; 

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </React.Fragment>
  );
};

export default App;
