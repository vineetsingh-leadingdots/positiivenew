import { Col, Row } from "antd";
import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadField from "../../commonComponents/uploadField";
import ProductItem from "./productItem";

const ProductDetails = () => {
  const navigate = useNavigate();


  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Product Add </title>
        </Helmet>
      </HelmetProvider>
      <div className="content ">
      <Row className="mb-4 flex items-center">     
      <Col  xs={16}>
     <div className="w-full ">
     <h2> My Customer List</h2>
      <p>(Customer List of your organization.)</p>
     </div>
      </Col>  
        <Col xs={8}>
        <div className="flex justify-end searchWithButton">           
            <div className="btnRight flex gap-1 " >
              <AddButton
                linkHref="/customer-master/add"
                btnText="Add Customer "
              />
               <Link to="/customer-master/import"
        
          className="btn-save btnauto  items-center flex gap-1 "
        > <span className="fa fa-upload" /> Import
        </Link>
            </div>
          </div>
        </Col>
      </Row>      
        <div className="card p-6 ">
        
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
