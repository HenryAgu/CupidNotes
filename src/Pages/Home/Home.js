import React from "react";

// stylesheet
import "./Home.css";

// react icons
import { FaTelegramPlane } from "react-icons/fa";

// NavLink
import { Link } from "react-router-dom";

// Helmet
import { Helmet } from "react-helmet";

const Home = ({
  title,
  message,
  hint,
  handleMessageChange,
  handleTitleChange,
  handleHintChange,
  handleSendMessage
}) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cupid Notes | Welcome</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="home">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          name=""
          id=""
          placeholder="Show Christofa25 some love"
          value={message}
          onChange={handleMessageChange}
        ></textarea>
        <div className="char_counter">
          <p>200 characters left</p>
        </div>
        <div className="hint">
          <input type="text" placeholder="hint" value={hint} onChange={handleHintChange}/>
        </div>
        <Link to="/sent" className="send" onClick={handleSendMessage}>
          <span>Spread Love</span>
          <FaTelegramPlane className="send_icon" />
        </Link>
      </div>
    </>
  );
};

export default Home;
