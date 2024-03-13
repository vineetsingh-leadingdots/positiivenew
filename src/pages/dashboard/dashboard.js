import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import FeaturedProduct from './featuredProduct'
import Breadcrumb from '../../commonComponents/breadcrumb'
import { Col, Row } from 'antd';
import TableList from '../../commonComponents/tableList';
import StockProduct from '../../commonComponents/stockProduct';
import { columns, dataSource } from '../../commonComponents/tableData';
const Dashboard = () => {
  const products = [
    {
      productImg: "/images/p1.webp",
      productTitle: "Cabernet Sauvignon",
      productName: "Beer",
      productLocation: "USA, California",
      productDeal: "Special Offer",
      btnClassName: "btn-beer ",
      productCase: "5 cases",
      productAmount: "$19.99"
    },
    {
      productImg: "/images/p2.webp",
      productTitle: "Libby Wine",
      productName: "Wine",
      productLocation: "USA, Georgia",
      productDeal: "Best Deal",
      btnClassName: "btn-beer wine",
      productCase: "10 cases",
      productAmount: "$15.99"
    },
    {
      productImg: "/images/p2.webp",
      productTitle: "Libby Wine",
      productName: "Wine",
      productLocation: "USA, Georgia",
      productDeal: "Best Deal",
      btnClassName: "btn-beer wine",
      productCase: "10 cases",
      productAmount: "$15.99"
    }, {
      productImg: "/images/p2.webp",
      productTitle: "Libby Wine",
      productName: "Wine",
      productLocation: "USA, Georgia",
      productDeal: "Best Deal",
      btnClassName: "btn-beer wine",
      productCase: "10 cases",
      productAmount: "$15.99"
    },

  ];
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Dashboard </title>
        </Helmet>
      </HelmetProvider>

      {/* <Breadcrumb linkTo="/dashboard" imgSrc="/images/home2.svg"/>
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
              <div className="w-full mt-4">
        <div className="card pt-4 pb-6 pr-2  dashboardTable  w-full">
          <div className="heading pl-6 pb-2">
            <h2 style={{ marginBottom: "0" }}>Recent Orders</h2>
          </div>
         
          <TableList data={dataSource} columns={columns} className="dashboardTable"/>
       
        </div>
      </div>
              
              </Col>
            </Row>
          </Col>
          <Col  xs={24} lg={8} xl={8} >
            <div className="card pt-6 pb-3 px-2 w-full newStockSec">
              <div className="heading pl-7">
                <h2>New in Stock</h2>
              </div>
              <div className="newStock mt-9">
              {products.map((product, index) => (
              <StockProduct
                key={index} 
                productImg={product.productImg}
                productTitle={product.productTitle}
                productName={product.productName}
                productLocation={product.productLocation}
                productDeal={product.productDeal}
                btnClassName={product.btnClassName}
                productCase={product.productCase}
                productAmount={product.productAmount}
              />
            ))}
             
              </div>
            </div>
          </Col>
        </Row>
      </Col> 
      </Row> */}
      <Breadcrumb linkTo="/dashboard" imgSrc="/images/home2.svg" />
      <div className="headingH">
        <h2>Dashboard</h2>
      </div>
      <Row className='content'>
        <Col className="w-full dashboardPage">
          <Row gutter={10}>
            <Col xs={24} lg={16} xl={16}>
              <div className="card p-6 dashSlider w-full">
                <div className="heading">
                  <h2>Featured Products</h2>
                </div>
                <FeaturedProduct />
              </div>
              <div className="w-full mt-4">
                <div className="card pt-4 pb-6 pr-2 dashboardTable w-full">
                  <div className="heading pl-6 pb-2">
                    <h2 style={{ marginBottom: "0" }}>Recent Orders</h2>
                  </div>
                  <TableList data={dataSource} columns={columns} className="dashboardTable" />
                </div>
              </div>
            </Col>
            <Col xs={24} lg={8} xl={8}>
              <div className="card pt-6 pb-3 px-2 w-full newStockSec">
                <div className="heading pl-7">
                  <h2>New in Stock</h2>
                </div>
                <div className="newStock mt-9">
                  {products.map((product, index) => (
                    <StockProduct
                      key={index}
                      productImg={product.productImg}
                      productTitle={product.productTitle}
                      productName={product.productName}
                      productLocation={product.productLocation}
                      productDeal={product.productDeal}
                      btnClassName={product.btnClassName}
                      productCase={product.productCase}
                      productAmount={product.productAmount}
                    />
                  ))}
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