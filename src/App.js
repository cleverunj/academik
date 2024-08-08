import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import AdmGeneral from "./components/administracion/AdmGeneral";
import AdmCarrera from "./components/administracion/AdmCarrera";
import AdmCarreraNew from "./components/administracion/AdmCarreraNew";
import AdmBecaNew from "./components/administracion/AdmBecaNew";
import AdmBeca from "./components/administracion/AdmBeca";


import interceptor from './components/global/interceptor.js';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/adm/admgeneral" element={<AdmGeneral />} />

          <Route path="/adm/admcarrera" element={<AdmCarrera />} />
          <Route path="/adm/admcarreranew" element={<AdmCarreraNew />} />
          <Route path="/adm/admcarrera/edit/:id" element={<AdmCarreraNew />} />

          <Route path="/adm/admbeca" element={<AdmBeca />} />
          <Route path="/adm/admbeca/new" element={<AdmBecaNew />} />          
          <Route path="/adm/admbeca/edit/:id" element={<AdmBecaNew />} />
          

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
