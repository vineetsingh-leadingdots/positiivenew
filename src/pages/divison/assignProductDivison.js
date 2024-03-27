import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import SearchField from '../../components/searchFIeld'
// import AddButton from '../../components/addButton'
import TableList from "../../commonComponents/tableList";
import {

  AssignProductDivisionColumns,
  AssignProductDivisionData,
} from "../../commonComponents/tableData";
import { Col, Row } from "antd";

const AssignProductDivison = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Assign Product </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
      <Row className="mb-4 flex items-center">
       
        <Col xs={24}>
        <div className="flex justify-end gap-1">
       <button
          type={"button"}
          className="bgBlue rounded text-white flex gap-2 items-center px-3 py-2"
        > <span className="fa fa-random" /> Westchester  On
        </button>
        <button
          type={"button"}
          className="bgBlue rounded text-white flex gap-2 items-center px-3 py-2"
        > <span className="fa fa-random" /> Westchester  Off
        </button>
        <button
          type={"button"}
          className="bgBlue rounded text-white flex gap-2 items-center px-3 py-2"
        > <span className="fa fa-arrow-left" /> Back
        </button>
       </div>
        </Col>
      </Row>
      
        <div className="card p-4">
          <div className="w-full">
            <h4 className="mb-2">Assign Products</h4>
            <p>(Assign Products to division.)</p>
          </div>

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
                <select className="form_control">
                  <option>Select Type</option>
                </select>
              </Col>
              <Col xs={24} md={6} xl={4}>
                <select className="form_control">
                  <option>Select Country</option>
                </select>
              </Col>
              <Col xs={24} md={6} xl={4}>
                <select className="form_control">
                  <option>Select Distributor</option>
                </select>
              </Col>
              <Col xs={24} md={24} xl={8} className="ml-auto">
                <div className="flex gap-1 flex-wrap justify-end">
                  <button className="bgBlue rounded text-white flex gap-2 items-center px-3 py-2">
                    <span className="fa fa-search" /> Search
                  </button>                  
                  <button
                    type={"button"}
                    className="bgBlue rounded text-white flex gap-2 items-center px-3 py-2"
                  >
                    <span className="fa fa-plus" /> Save
                  </button>
                </div>
              </Col>
            </Row>
          </div>
          <div className="tableAreaMaster ">
            <TableList
              data={AssignProductDivisionData}
              columns={AssignProductDivisionColumns}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignProductDivison;
