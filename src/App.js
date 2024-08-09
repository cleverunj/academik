import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import AdmGeneral from "./components/administracion/AdmGeneral";
import AdmCarrera from "./components/administracion/AdmCarrera";
import AdmCarreraNew from "./components/administracion/AdmCarreraNew.jsx";
import Administracion from "./components/administracion/Administracion";
import AdministracionNew from "./components/administracion/AdministracionNew.jsx";



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




          <Route path="/adm/beca" element={<Administracion />} />
          <Route path="/adm/beca/new" element={<AdministracionNew />} />          
          <Route path="/adm/beca/edit/:id" element={<AdministracionNew />} />

          <Route path="/adm/depaca" element={<Administracion />} />
          <Route path="/adm/depaca/new" element={<AdministracionNew />} />          
          <Route path="/adm/depaca/edit/:id" element={<AdministracionNew />} />
          
          <Route path="/adm/catdocente" element={<Administracion />} />
          <Route path="/adm/catdocente/new" element={<AdministracionNew />} />          
          <Route path="/adm/catdocente/edit/:id" element={<AdministracionNew />} />
                    
          <Route path="/adm/condocente" element={<Administracion />} />
          <Route path="/adm/condocente/new" element={<AdministracionNew />} />          
          <Route path="/adm/condocente/edit/:id" element={<AdministracionNew />} />
          
          <Route path="/adm/dedocente" element={<Administracion />} />
          <Route path="/adm/dedocente/new" element={<AdministracionNew />} />          
          <Route path="/adm/dedocente/edit/:id" element={<AdministracionNew />} />
                    
          <Route path="/adm/condalumno" element={<Administracion />} />
          <Route path="/adm/condalumno/new" element={<AdministracionNew />} />          
          <Route path="/adm/condalumno/edit/:id" element={<AdministracionNew />} />
                             
          <Route path="/adm/gradoacademico" element={<Administracion />} />
          <Route path="/adm/gradoacademico/new" element={<AdministracionNew />} />          
          <Route path="/adm/gradoacademico/edit/:id" element={<AdministracionNew />} />
                                
          <Route path="/adm/modingreso" element={<Administracion />} />
          <Route path="/adm/modingreso/new" element={<AdministracionNew />} />          
          <Route path="/adm/modingreso/edit/:id" element={<AdministracionNew />} />
          

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
