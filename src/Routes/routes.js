import React from 'react'
import Login from '../Pages/Login/index'
import ProtectedRoutes from '../Routes/ProtectedRoutes'
import Cadastro from '../Pages/Cadastro/index'
import Veiculos from '../Pages/Veiculos'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdmVeiculos from '../Pages/admVeiculos'

const Routering = () => {
  return ( 
    <Router>
      <Routes>
      <Route path="/admveiculos" element={<AdmVeiculos/>} />
       <Route path="*" element={<Veiculos/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastrar" element={<Cadastro/>} />
        <Route path="/home" element={
          <ProtectedRoutes>
            <h1>Home</h1> 
          </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
   );
}
 
export default Routering;