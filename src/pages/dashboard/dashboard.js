import React from 'react'
import { Link } from 'react-router-dom'
import FeaturedProduct from './featuredProduct'
import Breadcrumb from '../../commonComponents/breadcrumb'
import {  Col, Row } from 'antd';
import TableList from '../../commonComponents/tableList';
import StockProduct from '../../commonComponents/stockProduct';
import { columns, dataSource } from '../../commonComponents/tableData';
const Dashboard = () => {
  return (
    <>
    
     <Breadcrumb linkTo="/dashboard" imgSrc="/images/home2.svg"/>
      <div className="headingH">
        <h2>Dashboard</h2>
      </div>
      <Row className='content'>
      <Col className=" w-full dashboardPage">
        <Row className="flex w-full  flex-wrap" gutter={10}   >
          <Col xs={24} lg={16} xl={16}>
            <Row gutter={10}>
              <Col xs={24}  >
              <div className="card p-6 dashSlider w-full">
              <div className="heading">
                <h2>Featured Products</h2>
              </div>
              <FeaturedProduct />
            </div>
              </Col>
              <Col xs={24}>
              <TableList data={dataSource} columns={columns}/>
              </Col>
            </Row>
          </Col>
          <Col  xs={24} lg={8} xl={8} >
            <div className="card pt-6 pb-3 px-2 w-full newStockSec">
              <div className="heading pl-7">
                <h2>New in Stock</h2>
              </div>
              <div className="newStock mt-9">
               <StockProduct 
               productImg="images/p2.webp"
               productTitle="Libby Wine"
               productName="Wine"
               productLocation="USA, Georgia"
               productDeal="Best Deal"
               btnClassName="btn-beer wine"
               productCase="10 cases"
               productAmount="$15.99"
               />
                   <StockProduct 
               productImg="images/p2.webp"
               productTitle="Libby Wine"
               productName="Wine"
               productLocation="USA, Georgia"
               productDeal="Best Deal"
               btnClassName="btn-beer wine"
               productCase="10 cases"
               productAmount="$15.99"
               />
                   <StockProduct 
               productImg="images/p2.webp"
               productTitle="Libby Wine"
               productName="Wine"
               productLocation="USA, Georgia"
               productDeal="Best Deal"
               btnClassName="btn-beer wine"
               productCase="10 cases"
               productAmount="$15.99"
               />
                   <StockProduct 
               productImg="images/p2.webp"
               productTitle="Libby Wine"
               productName="Wine"
               productLocation="USA, Georgia"
               productDeal="Best Deal"
               btnClassName="btn-beer wine"
               productCase="10 cases"
               productAmount="$15.99"
               />
               
              </div>
            </div>
          </Col>
        </Row>
      </Col> 
      </Row>
         </>
  )
}

export default Dashboard