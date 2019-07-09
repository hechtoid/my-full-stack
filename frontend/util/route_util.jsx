import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, signedIn, exact }) => {
  return(
  <Route path={path} exact={exact} render={(props) => (
    !signedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/albums" />
    )
  )} />
)};

const Protected = ({ component: Component, path, signedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     signedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/signin" />
    )
  )} />
);

const mapStateToProps = state => (
  {signedIn: Boolean(state.session.currentUser)}
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
