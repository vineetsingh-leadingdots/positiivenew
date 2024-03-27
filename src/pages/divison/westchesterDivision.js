import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import SearchField from '../../components/searchFIeld'
// import AddButton from '../../components/addButton'
import TableList from "../../commonComponents/tableList";
import { 
  WestchesterDivisionColumns,
  WestchesterDivisionData,
} from "../../commonComponents/tableData";
import { Col, Row } from "antd";

const WestchesterDivision = () => {
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
        > <span className="fa fa-random" /> Assign Users
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
            <h4 className="mb-2">Division List</h4>
            <p>(Division List of your organization.)</p>
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
              <input
                  type="text"
                  className="form_control"
                  placeholder="Email"
                />
              </Col>
             
              
            </Row>
          </div>
          <div className="tableAreaMaster ">
            <TableList
              data={WestchesterDivisionData}
              columns={WestchesterDivisionColumns}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WestchesterDivision;
