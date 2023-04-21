import React from "react";
import zxcvbn from "zxcvbn"; //library used to test the strength of the password the client creates

// used OOP(Object Oriented Programming)
//create a class that extends the React.Component class.

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      name: "",
      score: 0,
    };
    //move the state variables and functions into the Register class and use the `this` keyword 
    //to reference 

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
//class also includes a constructor method that initializes the state and binds the 
//handleSubmit and handlePasswordChange methods to `this`.
  
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.email);
  }

  handlePasswordChange(e) {
    const password = e.target.value;
    const { score } = zxcvbn(password);
    this.setState({ pass: password, score: score });
  }

  render() {
    let scoreMessage;
    switch (this.state.score) {
      case 0:
        scoreMessage = "";
        break;
      case 1:
      case 2:
        scoreMessage = "Very weak";
        break;
      case 3:
        scoreMessage = "Fair";
        break;
      case 4:
        scoreMessage = "Strong";
        break;
      case 5:
        scoreMessage = "Very strong";
        break;
      default:
        scoreMessage = "";
        break;
    }

    return (
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            value={this.state.name}
            name="name"
            onChange={(e) => this.setState({ name: e.target.value })}
            id="name"
            placeholder="full Name"
          />
          <label htmlFor="email">Email</label>
          <input
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={this.state.pass}
            onChange={this.handlePasswordChange}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <div>Password strength: {scoreMessage}</div>
          <button type="submit">Sign Up</button>
        </form>
        <button
          className="link-btn"
          onClick={() => this.props.onFormSwitch("login")}
        >
          Already have an account? Login here.
        </button>
      </div>
    );
  }
}

export default Register;
