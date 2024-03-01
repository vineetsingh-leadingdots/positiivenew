import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/login';
import SignUp from '../components/signUp';
import ForgotPassword from '../components/forgotPassword';
import {Outlet} from "react-router-dom";
import AdminLayout  from '../components/layout';
import Dashboard from '../pages/dashboard/dashboard';
import Search from '../pages/search/search'

const ProtectedRoute = ({redirectPath = '/'}) => {

  // if (!authToken()) {
  //     return <Navigate to={redirectPath} replace/>;
  // }

  return <Outlet/>;
};

const RedirectRoute = ({redirectPath = '/dashboard'}) => {
  // if (authToken()) {
  //     return <Navigate to={redirectPath} replace/>;
  // }

  return <Outlet/>;
};
const RouterFile = () => (

  
  <Router>
    <Routes  element={<ProtectedRoute/>}>      
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
    </Routes>
    <Routes  element={<ProtectedRoute/>}>   
    <Route  element={<AdminLayout/>}>   
      <Route path="/dashboard" element={<Dashboard/>} />    
      <Route path="/search" element={<Search/>} />    
      </Route>
    </Routes>

  </Router>
);

export default RouterFile;
