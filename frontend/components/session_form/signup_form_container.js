import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, signin } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link className="lil-link" to="/signin">Sign In Here</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    demoUser: (user) => dispatch(signin(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
