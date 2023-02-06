import React from "react";

// stylesheet
import "./SignUp.css";

// NavLink
import { Link } from "react-router-dom";

// Helmet
import { Helmet } from "react-helmet";

const SignUp = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Login Page | Cupid Notes</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="login sign_up">
        <form action="" className="form">
          <input type="text" placeholder="Choose your Username" required />
          <input type="password" placeholder="Choose your Password" required />
            <Link to="/" className="home_button">
             Sign Up
            </Link>
        </form>
        <p>
          Already have an account?{" "}
          <span>
            <Link to="/" className="sign_up_link">
              Login
            </Link>
          </span>
        </p>
        <div className="policy">
          <input type="checkbox" name="" id="" />
          <p>
            Yes, I understand and agree to the <span>Wicked Terms of Service, </span>
            including the <span>User Agreement</span> and <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
