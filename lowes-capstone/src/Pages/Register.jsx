import React from "react";
import zxcvbn from "zxcvbn";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      score: 0,
      errorMessage: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, email, password } = this.state;

    axios
      .post("/register", { name, email, password })
      .then((response) => {
        console.log(response);
        this.props.onFormSwitch("login");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMessage: "Registration failed" });
      });
  }

  handlePasswordChange(e) {
    const password = e.target.value;
    const { score } = zxcvbn(password);
    this.setState({ password: password, score: score });
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
        {this.state.errorMessage && (
          <div className="error-message">{this.state.errorMessage}</div>
        )}
        <form className="register-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Full Name</label>
           <input
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
            type="text"
            placeholder="Full Name"
            id="name"
            name="name"
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
            value={this.state.password}
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