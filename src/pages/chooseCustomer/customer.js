import React from "react";
import { Link } from "react-router-dom";
import TableList from "../../commonComponents/tableList";
import { CustomerColumn, CustomerData } from "./customerTableData";
// import { Helmet, HelmetProvider } from "react-helmet-async";
const ChooseCustomer = () => {
  return (
    <>
      {/* <HelmetProvider>
        <Helmet>
          <title>Positiive | Customer</title>
        </Helmet>
      </HelmetProvider> */}
      <div className="chooseCutomerPage">

        <div className="breadcrumb">
          <Link to="/customer" className="flex items-center">
            <span>
              <img src="/images/people-circle.webp" />
            </span>
            <span className="mx-3">
              <img src="/images/line.webp" />
            </span>
            Customers
          </Link>
        </div>
        <div className="headingH">
          <h2>Customers</h2>
        </div>
        <div className="content w-full ">
          <div className="bg-white rounded ">
            <div className="px-6 pt-5 ">
              <p className="font-bold textBlue">Today 03/16/2023</p>
            </div>
          </div>
          <div className="w-full  productTabArea  " style={{ marginTop: "0" }} >
            <TableList data={CustomerData} columns={CustomerColumn} />
          </div>

        </div>
      </div>
    </>
  );
};

export default ChooseCustomer;
