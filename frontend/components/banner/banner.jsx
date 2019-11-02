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

    <div className="signin-signup">
      <button 
      className="demo-button" 
      onClick={this.demoUser}>
        USER DEMO
      </button>
      <Link id="sign-in" to="/signin">Sign in</Link>
      &nbsp;or&nbsp;
      <Link id="sign-up" to="/signup">Sign up!</Link>
      </div>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <div className="header-name">Hi, {this.props.currentUser.username}!
      <button className="header-signout-button" onClick={this.props.signout}>Sign Out</button>
      </div>
   </hgroup>
  
  );

  return this.props.currentUser ? personalGreeting() : sessionLinks();
};
}

export default withRouter(Banner);
