import React, { useState } from "react";

// stylesheet
import "./App.css";

// components
import Navbar from "./components/Navbar";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Reset from "./Pages/Reset/Reset";
import SignUp from "./Pages/SignUp/SignUp";
import Sent from "./Pages/Sent/Sent";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [textIcons, setTextIcons] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [hint, setHint] = useState("");

  // Title tag
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setTextIcons(true);
  };

  // Message Tag
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setTextIcons(true);
  };

  // Hint tag
  const handleHintChange = (e) => {
    setHint(e.target.value);
    setTextIcons(true);
  };
  
  // Spread love button
  const handleSendMessage = () =>{
    setTextIcons(false);
  }
  return (
    <>
      <div className="app">
        {/* FaCopy */}

        <BrowserRouter>
          <Navbar textIcons={textIcons} setTextIcons={setTextIcons} />
          <Routes>
            <Route exact path="/" element={<Login />} />
          </Routes>
          <Routes>
            <Route
              path="/home"
              element={
                <Home
                  title={title}
                  message={message}
                  hint={hint}
                  handleTitleChange={handleTitleChange}
                  handleMessageChange={handleMessageChange}
                  handleHintChange={handleHintChange}
                  handleSendMessage={handleSendMessage}
                />
              }
            />
          </Routes>
          <Routes>
            <Route path="/sign_up" element={<SignUp />} />
          </Routes>
          <Routes>
            <Route path="/reset" element={<Reset />} />
          </Routes>
          <Routes>
            <Route path="/sent" element={<Sent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
