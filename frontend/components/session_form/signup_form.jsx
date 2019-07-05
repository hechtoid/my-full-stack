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
      submitclass: "signup-submit",
      submitclassgray: "signup-submit-gray"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
}

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          Sign up for a nurdCamp fan account
          {this.renderErrors()}
          <div className="signup-form">
            <label>Email address
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
              />
            </label>
            <label>Password: 
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
            </label>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
              />
            </label>
	   
            <label>
              <input type="checkbox" 
              className="signup-checkbox" 
              onChange={this.update('understand')}
              />
             I UNDERSTAND THAT THIS IS A PARODY SITE
            </label>
            <input 
            disabled={!this.state.understand} 
            className={ 
              this.state.understand
              ? this.state.submitclass
              : this.state.submitclassgray
            }
            type="submit" 
            value="Sign up" />
          </div>
        </form>
        <div className="signinstring">
          Already have an account? {this.props.navLink}
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
