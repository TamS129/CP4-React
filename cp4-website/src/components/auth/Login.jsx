import React from "react";
import PropTypes from "prop-types";

const Login = ({ authenticate }) => {
  return (
    <nav className="login">
      <h2>Login</h2>
      <p>Sign in today to join us!</p>
      <button className="google" onClick={authenticate}>
        Log In With Google
      </button>
    </nav>
  );
};

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,  
};

export default Login;
