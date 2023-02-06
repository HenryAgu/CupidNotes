import React from "react";

// stylesheet
import './SignUp.css';

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
    </>
  );
};

export default SignUp;
