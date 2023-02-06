import "./App.css";

// components
import Navbar from "./components/Navbar";
import Login from "./components/Pages/Login";
import Home from "./components/Pages/Home";
import Reset from "./components/Pages/Reset";
import SignUp from "./components/Pages/SignUp";


// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

      <div className="app">
        {/* FaTelegramPlane */}
        {/* FaCopy */}

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/sign_up" element={<SignUp />} />
          </Routes>
          <Routes>
            <Route path="/reset" element={<Reset/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
