import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import TableList from "../../commonComponents/tableList";
import { CustomerMasterColumns, CustomerMasterData} from "../../commonComponents/tableData";
import { Col, Row } from "antd";
import AddButton from "../../components/addButton";
import { Link } from "react-router-dom";


const CustomerMaster = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Customer Master </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
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
        <div className="card p-4">
          <div className="w-full orderSearch">
            <Row gutter={[16, 16]} className="items-center pt-6 pb-6 flex-wrap">
              <Col xs={24} md={6} xl={4}>
                <input
                  type="text"
                  className="form_control"
                  placeholder="Name"
                />
              </Col>
              <Col xs={24} md={6} xl={4}>
              <input
                  type="text"
                  className="form_control"
                  placeholder="Customer ID"
                />
              </Col>
              <Col xs={24} md={6} xl={4}>
              <input
                  type="text"
                  className="form_control"
                  placeholder="Contact No."
                />
              </Col>
              <Col xs={24} md={6} xl={4}>
              <input
                  type="text"
                  className="form_control"
                  placeholder="Email"
                />
              </Col>
              <Col xs={24} md={24} xl={3} className="ml-auto">
                <div className="flex gap-1 flex-wrap ">
                  <button className="bgBlue btnSearch rounded text-white flex gap-2 items-center px-3 py-2">
                    <span className="fa fa-search" /> Search
                  </button>  
                </div>
              </Col>
            </Row>
          </div>
          <div className="tableAreaMaster ">
            <TableList
              data={CustomerMasterData}
              columns={CustomerMasterColumns}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerMaster;
