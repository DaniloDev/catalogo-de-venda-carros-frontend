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
       <Route path="*" element={<Veiculos/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastrar" element={<Cadastro/>} />
        <Route path="/admveiculos" element={
          <ProtectedRoutes>
             <AdmVeiculos/>
          </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
   );
}
 
export default Routering;