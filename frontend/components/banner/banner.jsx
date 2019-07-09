import React from 'react';
import { Link } from 'react-router-dom';



const Banner = ({ currentUser, signout }) => {
  const sessionLinks = () => (
    <nav className="signin-signup">
      <Link to="/signin">Sign in</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <div className="header-name">Hi, {currentUser.username}!</div>
      <button className="header-button" onClick={signout}>Sign Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Banner;
