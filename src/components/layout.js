import React from 'react';
import {Outlet} from "react-router-dom";
import { Layout, Flex, Col } from 'antd';
import Sidebar from './sidebar';
import { Header } from './header';
import { Footer } from './footer';
const {  Sider, Content } = Layout;

const AdminLayout = () => (
  <Flex gap="middle" wrap="wrap" className='mainWrapper'>  
    <Layout className='mainLayout' >
      <Sider className='leftSidebar'>
       <Sidebar/>
      </Sider>
      <Layout className='mainLayoutFlex'>
        <Header/>
        <Content className='contentWrapper' >        
        <Outlet/> 
        </Content>       
      </Layout>
      <Footer/>
    </Layout>
  </Flex>
);
export default AdminLayout;





























// // eslint-disable-next-line no-unused-vars
// import * as React from 'react';
// import HeaderLogin, {Header} from "./header";
// import {Outlet} from "react-router-dom";
// import { Footer } from './footer';
// import Sidebar from './sidebar';



// export function AdminLayout() {
 
//     return (
//         <div>
//            <div className="w-full flex mainWrapper ">  
//                  <HeaderLogin/>
//                   <Sidebar/>
//                   <div className="contentWrapper">
//                   <Outlet/>
//                   </div>               
//                 <Footer/>
//             </div>
//         </div>
//     );
// }
