import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';


// currentUser, signout

class Banner extends React.Component{
  constructor(props){
  super(props)
  this.demoUser = this.demoUser.bind(this);
} 

demoUser(e) {
    e.preventDefault();
    const user = { username: 'demo', password: 'demodemo' };
    this.props.processForm(user);
    this.props.history.push("/albums")
  }

render(){
  const sessionLinks = () => (
    <nav className="banner"> <a href="https://www.appacademy.io/"><img className='logo' src='aA.png'></img></a>
    <Link to="/" className="header-link">
      <span>nurdCamp</span>
    </Link>
    <Link to="/albums/1" className="albums-link">
      <span>Albums</span>
    </Link>
    <Link to="/albums/1/artists/" className="artists-link">
      <span>Artists</span>
    </Link>
    <div className="signin-signup">
      <button 
      className="demo-button" 
      onClick={this.demoUser}>
        DEMO SIGN-IN
      </button>
      <Link to="/signin">Sign in</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <div className="header-name">Hi, {this.props.currentUser.username}!</div>
      <button className="header-button" onClick={this.props.signout}>Sign Out</button>
    </hgroup>
  );

  return this.props.currentUser ? personalGreeting() : sessionLinks();
};
}

export default withRouter(Banner);
