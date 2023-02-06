import React from "react";

// stylesheet
import "./Login.css";

// Helmet
import { Helmet } from "react-helmet";

// NavLink
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Login Page | Cupid Notes</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="login">
        <form action="" className="form">
          <input type="text" placeholder="Enter your Username" required />
          <input type="password" placeholder="Enter your Password" required />
          <button><Link to="/home" className="home_button">Login</Link></button>
        </form>
        <p><Link to="/sign_up" className="link">Forgot Password?</Link></p>
        <p>Need an account? <span><Link to='/sign_up' className="link">Signup</Link></span></p>
        <div className="logged_in">
            <input type="checkbox" />
            <p>Keep me logged in</p>
        </div>
      </div>
    </>
  );
};

export default Login;
