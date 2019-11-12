import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      understand: false,
      submitclass: "submit",
      submitclassgray: "submit-gray",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCheck = this.updateCheck.bind(this)
    this.demoUser = this.demoUser.bind(this);
  }
  componentDidMount(){
    document.title = 'Sign Up - nurdCamp'
  }
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  updateCheck() 
    {return e =>this.setState({
      understand: e.currentTarget.checked
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  demoUser(e) {
    e.preventDefault();
    const user = { username: 'guest', password: 'guestpass' };
    this.props.demoUser(user);
  }
  
  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form">
          Sign Up for a NurdCamp account
         <div className="top-divider"></div>
          {this.renderErrors()}
          <div className="signup-form">
            <div className="sign-input">
              <label htmlFor="signup-input-email">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email</label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
                id="signup-input-email"
              />
            </div>
            <div className="sign-input">
              <label htmlFor="signup-input-password">&nbsp;&nbsp;Password</label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
                id="signup-input-password"
              />
            </div>
            <div className="sign-input">
            <label htmlFor="signup-input-username">Username</label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
                id="signup-input-username"
              />
              </div>
            <label>
              <input type="checkbox" 
              className="signup-checkbox" 
              onChange={this.updateCheck()}
              checked={this.state.understand}
              />
             I UNDERSTAND THAT THIS IS A PARODY SITE
            </label>
            <input 
            disabled={!this.state.understand} 
            className={ 
              this.state.understand
              ? "submit"
              : "submit-gray"
            }
            type="submit" 
            value="Sign Up"
            />
          </div>
        </form>
        <div className="signinstring">
          Already have an account? {this.props.navLink}   
          <br />
          Don't want an account? <a className="lil-link" href="" onClick={this.demoUser}>Guest Sign In</a>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
