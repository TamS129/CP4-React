import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";

const Login = ({ authenticate }) => {
  return (
    <>
    <Header tagline = "From the Heart of Applachia"/>
    <nav className="login">
      <h2>Login</h2>
      <p>Sign in today to join us!</p>
      <button className="google" onClick={authenticate}>
        Log In With Google
      </button>
    </nav>
    <Footer tagline="Perserve the Applachian flavor!"/>
    </>
  );
};

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,  
};

export default Login;
