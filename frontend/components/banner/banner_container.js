import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signout } from '../../actions/session_actions';
import Banner from './banner';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.currentUser]
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signin(user)),
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Banner);
