import React from "react";

// stylesheet
import "./Reset.css";

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
    </>
  );
};

export default Reset;
