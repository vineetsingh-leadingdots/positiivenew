import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/login';
import SignUp from '../components/signUp';
import ForgotPassword from '../components/forgotPassword';
import { Outlet } from "react-router-dom";
import AdminLayout from '../components/layout';
import Dashboard from '../pages/dashboard/dashboard';
import Search from '../pages/search/search'
import SearchDetail from '../pages/search/searchDetails';
import OrderHistory from "../pages/order-history/orderHistory";
import OrderHistoryAll from "../pages/order-history/orderHistoryAll";
import OrderHistory2 from "../pages/order-history/orderHistory2";
import AllExperence from '../pages/experience/allExperence';
import ViewExperence from '../pages/experience/viewExperence';
import ExperenceDetails from '../pages/experience/experenceDetails';
import Suppliers from '../pages/suppliersMain/suppliers';
import SuppliersDetails from '../pages/suppliersMain/suppliersDetails';
import ChooseCustomer from '../pages/chooseCustomer/customer';
import ChooseCustomerDetails from '../pages/chooseCustomer/customerDetails';
import CalendarView from '../pages/calendar/calendar';
import OnBoarding from '../components/onBoarding';

const ProtectedRoute = ({ redirectPath = '/' }) => {

  // if (!authToken()) {
  //     return <Navigate to={redirectPath} replace/>;
  // }

  return <Outlet />;
};

const RedirectRoute = ({ redirectPath = '/dashboard' }) => {
  // if (authToken()) {
  //     return <Navigate to={redirectPath} replace/>;
  // }

  return <Outlet />;
};
const RouterFile = () => (


  <Router>
    <Routes element={<ProtectedRoute />}>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/onboard" element={<OnBoarding/>} exact/>
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
    <Routes element={<ProtectedRoute />}>
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/detail" element={<SearchDetail />} />
        <Route path="/order-history" element={<OrderHistory />} exact />
        <Route path="/order-history2" element={<OrderHistory2 />} exact />
        <Route path="/order-history/all" element={<OrderHistoryAll />} exact />
        <Route path="/experience" element={<AllExperence />} exact />
        <Route path="/experience/view" element={<ViewExperence />} exact />
        <Route path="/experience/detail" element={<ExperenceDetails />} exact />
        <Route path="/calendar" element={<CalendarView/>} />    
        <Route path="/customer" element={<ChooseCustomer />} exact />
        <Route path="/customer/detail" element={<ChooseCustomerDetails />} exact />
        <Route path="/suppliers" element={<Suppliers />} exact />
        <Route path="/suppliers/detail" element={<SuppliersDetails />} exact />
      </Route>
    </Routes>

  </Router>
);

export default RouterFile;
