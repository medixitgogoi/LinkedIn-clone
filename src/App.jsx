import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header";
// import Home from "./components/Home";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={[<Header />, <Home />]} /> {/* Latest versions of React Router accepts an array of strings as path or element for an <Route/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;