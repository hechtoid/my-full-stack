import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary/error_boundary'
import App from './app';

const Root = ({ store }) => (
  // <ErrorBoundary>
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  // </ErrorBoundary>
);

export default Root;
