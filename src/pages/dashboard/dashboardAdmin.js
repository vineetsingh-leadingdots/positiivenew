import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Breadcrumb from '../../commonComponents/breadcrumb'
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const DashboardAdmin = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Admin-Dashboard </title>
        </Helmet>
      </HelmetProvider>
      <Breadcrumb linkTo="/dashboard" imgSrc="/images/home2.svg" />
      <div className="headingH">
        <h2>Dashboard</h2>
      </div>
      <div className='content'>
        <div className="w-full dashboardPage ">
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12} lg={12} xl={6}>
              <div className="card p-5 w-full dashboardCard">
                <div className='flex mb-5'>
                  <div className='icon'>                   
                    <span className='fab fa-untappd'/>
                  </div>
                  <div className='pl-5 pt-1'>
                    <h4>PRODUCTS</h4>
                    <h2>1712</h2>                   
                  </div>
                </div>
                <Link to="/">View <span className='fa fa-arrow-right'/></Link>
              </div>
            </Col>
            <Col xs={24} md={12} lg={12} xl={6}>
              <div className="card p-5 w-full dashboardCard">
                <div className='flex mb-5'>
                  <div className='icon'>                   
                    <span className='fa fa-users'/>
                  </div>
                  <div className='pl-5 pt-1'>
                    <h4>USERS</h4>
                    <h2>1712</h2>                   
                  </div>
                </div>
                <Link to="/">View <span className='fa fa-arrow-right'/></Link>
              </div>
            </Col>
            <Col xs={24} md={12} lg={12} xl={6}>
              <div className="card p-5 w-full dashboardCard">
                <div className='flex mb-5'>
                  <div className='icon'>                   
                    <span className='fa fa-truck'/>
                  </div>
                  <div className='pl-5 pt-1'>
                    <h4>SUPPLIERS</h4>
                    <h2>1712</h2>                   
                  </div>
                </div>
                <Link to="/">View <span className='fa fa-arrow-right'/></Link>
              </div>
            </Col>
            <Col xs={24} md={12} lg={12} xl={6}>
              <div className="card p-5 w-full dashboardCard">
                <div className='flex mb-5'>
                  <div className='icon'>                   
                    <span className='fa fa-link'/>
                  </div>
                  <div className='pl-5 pt-1'>
                    <h4>DISTRIBUTORS</h4>
                    <h2>1712</h2>                   
                  </div>
                </div>
                <Link to="/">View <span className='fa fa-arrow-right'/></Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default DashboardAdmin