import React from "react";

// stylesheet
import "./Reset.css";

// NavLink
import { Link } from "react-router-dom";

// Helmet
import { Helmet } from "react-helmet";

const Reset = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cupid Notes | Welcome</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="login">
        <form action="" className="form">
          <input type="text" placeholder="Enter your Username" />
          <Link to="/" className="home_button">
            Reset
          </Link>
        </form>
        <p>Need an account? <span><Link to='/sign_up' className="link">Signup</Link></span></p>
      </div>
    </>
  );
};

export default Reset;
