import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import ArtistSearchContainer from '../artist/artist_search_container'


// currentUser, signout

class Banner extends React.Component{
  constructor(props){
  super(props)
  this.demoUser = this.demoUser.bind(this);
} 

demoUser(e) {
    e.preventDefault();
  const user = { username: 'guest', password: 'guestpass' };
    this.props.processForm(user);
  }

render(){
  const sessionLinks = () => (

    <div className="signin-signup">
      <button 
      className="demo-button" 
      onClick={this.demoUser}>
        Guest Sign In
      </button>
      <Link id="sign-in" to="/signin">Sign In</Link>
      &nbsp;or&nbsp;
      <Link id="sign-up" to="/signup">Sign Up</Link>
      </div>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <ArtistSearchContainer />
      <div className="header-name">
      <button className="header-signout-button" onClick={this.props.signout}>Sign Out</button>
      {/* {this.props.currentUser.username} */}
      </div>
   </hgroup>
  
  );

  return this.props.currentUser ? personalGreeting() : sessionLinks();
};
}

export default withRouter(Banner);
