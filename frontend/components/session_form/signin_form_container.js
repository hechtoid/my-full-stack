import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signin } from '../../actions/session_actions';
import { teaseArtists } from '../../actions/artist_actions'
import SigninForm from './signin_form';

const mapStateToProps = ( state ) => {
  return {
    errors: state.errors.session,
    formType: 'signin',
    navLink: <Link className="lil-link"  to="/signup">Sign Up Here</Link>,
    artists: Object.values(state.entities.artists)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signin(user)),
    teaseArtists: () => dispatch(teaseArtists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
