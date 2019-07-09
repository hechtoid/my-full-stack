import React from 'react';
import { withRouter } from 'react-router-dom';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }
  componentDidMount() {
    document.title = 'Sign In - nurdCamp'
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

  demoUser(e) {
    e.preventDefault();
    const user = {username: 'demo', password: 'demodemo'};
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
      <div className="signin-form-container">
        <form onSubmit={this.handleSubmit} className="signin-form">
          Sign in
          <div className="top-divider"></div>
          {this.renderErrors()}  
          <div className="signin-form">
              <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signin-input"
              />
            </label>
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signin-input"
              />
            </label>
            <br />
            <input className="signin-submit" type="submit" value="Sign in" />
        </div>
        </form>
        <div className="signupstring">
        Don't have an account? {this.props.navLink}
        <br />
          Don't want an account? <a href="" onClick={this.demoUser}>Demo Sign In</a>
        </div>
      </div>
    );
  }
}

export default withRouter(SigninForm);
