import React from "react";
import PropTypes from "prop-types";

const Login = props => (
  <nav className="login">
    <h2>Login</h2>
    <p>Sign in today to post your own recipes!</p>
    <button className="google" onClick={() => props.authenticate("Google")}>
      Log In With Google
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;