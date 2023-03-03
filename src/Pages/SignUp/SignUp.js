import React from "react";

// stylesheet
import "./SignUp.css";

// NavLink
import { Link } from "react-router-dom";

// Helmet
import { Helmet } from "react-helmet";

const SignUp = ({ setEmail, setSignupPassword, register }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Login Page | Cupid Notes</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="login sign_up">
        <form action="" className="form">
          <input
            type="email"
            placeholder="Enter your email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Choose your Password"
            required
            onChange={(e) => {
              setSignupPassword(e.target.value);
            }}
          />
          <Link to="/" className="home_button" onClick={register}>
            Sign Up
          </Link>
        </form>
        <p>
          Already have an account?{" "}
          <span>
            <Link to="/login" className="sign_up_link" >
              Login
            </Link>
          </span>
        </p>
        <div className="policy">
          <input type="checkbox" name="" id="" />
          <p>
            Yes, I understand and agree to the{" "}
            <span>Wicked Terms of Service, </span>
            including the <span>User Agreement</span> and{" "}
            <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
