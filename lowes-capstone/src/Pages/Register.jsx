import React, { useState } from 'react';
import zxcvbn from 'zxcvbn'; // library to check the strength of the password & provide feedback to the user

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const { score } = zxcvbn(password);
    setPass(password);
    setScore(score);
  };

  let scoreMessage;
  switch (score) {
    case 0:
      scoreMessage = '';
      break;
    case 1:
    case 2:
      scoreMessage = 'Very weak';
      break;
    case 3:
      scoreMessage = 'Fair';
      break;
    case 4:
      scoreMessage = 'Strong';
      break;
    case 5:
      scoreMessage = 'Very strong';
      break;
    default:
      scoreMessage = '';
      break;
  }

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="full Name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={handlePasswordChange}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <div>Password strength: {scoreMessage}</div>
        <button type="submit">Sign Up</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
