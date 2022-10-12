import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
//import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
const AppRouters = () => {
  return (
   <Router>
        <NavBar/>
        <div className="container p-2">
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                {/* <Route path='/about' element={<AboutPage/>}/> */}
                <Route path='#' element={ <Navigate to='/'/> } />
            </Routes>
        </div>
   </Router>
  )
}

export default AppRouters