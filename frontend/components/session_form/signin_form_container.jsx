import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signin } from '../../actions/session_actions';
import SigninForm from './signin_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signin',
    navLink: <Link className="lil-link"  to="/signup">Sign Up Here</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signin(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
