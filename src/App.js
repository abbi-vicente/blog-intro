import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Navbar />
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
