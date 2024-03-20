import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import OnBoarding from '../components/onboarding/onBoarding';
import { useSelector } from 'react-redux';
import Brand from '../pages/master/brand/brand';
import BrandAdd from '../pages/master/brand/brandAdd';
import Variety from '../pages/master/variety/variety';
import VarietyAdd from '../pages/master/variety/varietyAdd';
import Attribute from '../pages/master/attribute/attribute';
import AttributeAdd from '../pages/master/attribute/attributeAdd';
import Size from '../pages/master/size/size';
import SizeAdd from '../pages/master/size/sizeAdd';
import Rating from '../pages/master/rating/rating';
import RatingAdd from '../pages/master/rating/ratingAdd';
import StyleAdd from '../pages/master/style/styleAdd';
import Style from '../pages/master/style/style';
import Category from '../pages/master/category/category';
import CategoryAdd from '../pages/master/category/categoryAdd';
import Type from '../pages/master/type/type';
import TypeAdd from '../pages/master/type/typeAdd';
import SubType from '../pages/master/sub-type/subType';
import SubTypeAdd from '../pages/master/sub-type/subtypeAdd';
import Nose from '../pages/master/nose/nose';
import NoseAdd from '../pages/master/nose/noseAdd';
import Classification from '../pages/master/classification/classification';
import ClassificationAdd from '../pages/master/classification/classificationAdd';
import Vintage from '../pages/master/vintage/vintage';
import VintageAdd from '../pages/master/vintage/vintageAdd';
import Country from '../pages/master/country/country';
import CountryAdd from '../pages/master/country/countryAdd';
import Region from '../pages/master/region/region';
import RegionAdd from '../pages/master/region/regionAdd';
import SubRegion from '../pages/master/sub-region/sub-region';
import SubRegionAdd from '../pages/master/sub-region/sub-regionAdd';
import Role from '../pages/role/role';
import RoleAdd from '../pages/role/roleAdd';
import Member from '../pages/member/member';
import MemberAdd from '../pages/member/memberAdd';
import Supplier from '../pages/supplier/supplier';
import SupplierAdd from '../pages/supplier/supplierAdd';
import SupplierView from '../pages/supplier/supplierView';
import Distributor from '../pages/distributor/distributor';
import DistributorAdd from '../pages/distributor/distributorAdd';
import DistributorView from '../pages/distributor/distributorView';
import SalesPerson from '../pages/salesPersons/salesPersons';
import SalesPersonAdd from '../pages/salesPersons/salesPersonAdd';
import ProductList from '../pages/product/productList';
import ProductAdd from '../pages/product/productAdd';
import News from '../pages/news/news';
import NewsAdd from '../pages/news/newsAdd';
import Quiz from '../pages/quiz/quiz';
import QuizAdd from '../pages/quiz/quizAdd';
import Feedbacks from '../pages/feedback/feedback';
import FeedbacksAdd from '../pages/feedback/feedbackAdd';
import ExperienceList from '../pages/experienceMain/experienceList';
import ExperienceAdd from '../pages/experienceMain/experienceAdd';
import DivisionAdd from '../pages/divison/divisionAdd';
import DivisionList from '../pages/divison/division';
import Transactions from '../pages/miscellaneous/transactions';
import PromotionsList from '../pages/miscellaneous/promotions';
import MediaList from '../pages/miscellaneous/media';
import ErrorLog from '../pages/miscellaneous/errorLog';
import AssignProduct from '../pages/product/assignProduct';
import DashboardAdmin from '../pages/dashboard/dashboardAdmin';
import DashboardSupplier from '../pages/supplierAdmin/dashboard/dashboardSupplier';





const ProtectedRoute = ({ redirectPath = '/login' }) => {
  const authToken = useSelector((state) => state.persistedReducer.user.accessToken);
  if (!authToken) {
    return <Navigate to={redirectPath} replace />;
  }
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
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/onboard" element={<OnBoarding/>} exact/>
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
    <Routes>
      <Route element={<ProtectedRoute/>}>
        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/dashboard" element={<DashboardAdmin/>} />
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
          
          <Route path="/brand/list" element={<Brand/>} exact />
          <Route path="/brand/add" element={<BrandAdd/>} exact />
          <Route path="/variety/list" element={<Variety/>} exact />
          <Route path="/variety/add" element={<VarietyAdd/>} exact />
          <Route path="/attribute/list" element={<Attribute/>} exact />
          <Route path="/attribute/add" element={<AttributeAdd/>} exact />
          <Route path="/size/list" element={<Size/>} exact />
          <Route path="/size/add" element={<SizeAdd/>} exact />
          <Route path="/rating/list" element={<Rating/>} exact />
          <Route path="/rating/add" element={<RatingAdd/>} exact />
          <Route path="/style/list" element={<Style/>} exact />
          <Route path="/style/add" element={<StyleAdd/>} exact />
          <Route path="/category/list" element={<Category/>} exact />
          <Route path="/category/add" element={<CategoryAdd/>} exact />
          <Route path="/type/list" element={<Type/>} exact />
          <Route path="/type/add" element={<TypeAdd/>} exact />
          <Route path="/sub/type/list" element={<SubType/>} exact />
          <Route path="/sub/type/add" element={<SubTypeAdd/>} exact />
          <Route path="/nose/palate/list" element={<Nose/>} exact />
          <Route path="/nose/palate/add" element={<NoseAdd/>} exact />
          <Route path="/classification/list" element={<Classification/>} exact />
          <Route path="/classification/add" element={<ClassificationAdd/>} exact />
          <Route path="/vintage/list" element={<Vintage/>} exact />
          <Route path="/vintage/add" element={<VintageAdd/>} exact />

          <Route path="/country/list" element={<Country/>} exact />
          <Route path="/country/add" element={<CountryAdd/>} exact />
          <Route path="/region/list" element={<Region/>} exact />
          <Route path="/region/add" element={<RegionAdd/>} exact />
          <Route path="sub/region/list" element={<SubRegion/>} exact />
          <Route path="sub/region/add" element={<SubRegionAdd/>} exact />

          <Route path="/role/list" element={<Role/>} exact />
          <Route path="/role/add" element={<RoleAdd/>} exact />
          <Route path="/member/list" element={<Member/>} exact />
          <Route path="/member/add" element={<MemberAdd/>} exact />
          <Route path="/supplier/list" element={<Supplier/>} exact />
          <Route path="/supplier/add" element={<SupplierAdd/>} exact />
          <Route path="/supplier/view" element={<SupplierView/>} exact />
          <Route path="/distributor/list" element={<Distributor/>} exact />
          <Route path="/distributor/add" element={<DistributorAdd/>} exact />
          <Route path="/distributor/view" element={<DistributorView/>} exact />
          <Route path="/sales-person/list" element={<SalesPerson/>} exact />
          <Route path="/sales-person/add" element={<SalesPersonAdd/>} exact />
          <Route path="/product/list" element={<ProductList/>} exact />
          <Route path="/assign/product" element={<AssignProduct/>} exact />
          <Route path="/product/add" element={<ProductAdd/>} exact />
          <Route path="/news/list" element={<News/>} exact />
          <Route path="/news/add" element={<NewsAdd/>} exact />
          <Route path="/quiz/list" element={<Quiz/>} exact />
          <Route path="/quiz/add" element={<QuizAdd/>} exact />
          <Route path="/feedback/list" element={<Feedbacks/>} exact />
          <Route path="/feedback/add" element={<FeedbacksAdd/>} exact />
          <Route path="/experience/list" element={<ExperienceList/>} exact />
          <Route path="/experience/add" element={<ExperienceAdd/>} exact />
          <Route path="/division/list" element={<DivisionList/>} exact />
          <Route path="/division/add" element={<DivisionAdd/>} exact />
          <Route path="/transactions/list" element={<Transactions/>} exact />
          <Route path="/media/list" element={<MediaList/>} exact />
          <Route path="/promotions/list" element={<PromotionsList/>} exact />
          <Route path="/calendar/list" element={<Transactions/>} exact />
          <Route path="/errorLog/list" element={<ErrorLog/>} exact />

         
          {/* Supplier-Dashbaord*/}

          <Route path="/supplier/dashboard" element={<DashboardSupplier/>} />
      
        </Route>
      </Route>
    </Routes>

  </Router>
);

export default RouterFile;
