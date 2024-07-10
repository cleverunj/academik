import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />

          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found etc</h2>
              </div>
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
