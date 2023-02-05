import "./App.css";

// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";

// Helmet
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
                <Helmet>
                <meta charSet="utf-8" />
                <title>Cupid Notes | Welcome</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="app">
        {/* FaTelegramPlane */}
        {/* FaCopy */}
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
