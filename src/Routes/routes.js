import React from 'react'
import Login from '../Pages/Login/index'
import ProtectedRoutes from '../Routes/ProtectedRoutes'
import Veiculos from '../Pages/Veiculos'
import Logout from '../Pages/Logout'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdmVeiculos from '../Pages/admVeiculos'

const Routering = () => {
  return ( 
    <Router>
      <Routes>
       <Route path="*" element={<Veiculos/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
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