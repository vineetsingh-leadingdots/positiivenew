import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AddButton from "../../components/addButton";
import TableList from "../../commonComponents/tableList";
import {
  ExperenceColumn,
  ExperenceData,
} from "../../commonComponents/tableData";
import { Col, Row } from "antd";

const ExperienceList = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Experience </title>
        </Helmet>
      </HelmetProvider>
      <div className="content myExp">
        <div className="w-full mb-4">
          <div className="w-full mb-4">
          <h2 > Experience List</h2>
          <p>(Experience list of your organization.)</p>
          </div>          
        </div>
        <div className="card ">
        <div className="flex justify-between">
          <div className="w-full orderSearch ">
            <Row gutter={[16, 16]} className="items-center pt-6 pb-6 pl-4 pr-4 flex-wrap">
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
                  placeholder="Customer"
                />
              </Col>
              <Col xs={24} md={6} xl={4}>
              <input
                  type="text"
                  className="form_control"
                  placeholder="Created By"
                />
              </Col>
              <Col xs={24} md={6} xl={4}>
              <input
                  type="date"
                  className="form_control"                 
                />
              </Col>   
              <Col xs={24} md={6} xl={3}>
              <button className="bgBlue btnSearch rounded text-white flex gap-2 items-center px-3 py-2">
                    <span className="fa fa-search" /> Search
                  </button>   
              </Col>            
              <Col xs={24} md={6} xl={5}>
              <div className="btnRight">
              <AddButton linkHref="/experience/add" btnText="Add Experience " />
            </div>
                </Col>      
            </Row>
          </div>
          </div>
          <div className="tableAreaMaster ">
            <TableList data={ExperenceData} columns={ExperenceColumn} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceList;
