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
  return (
    <>

      <div className="app">
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
          <Routes>
            <Route path="/sent" element={<Sent/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
