import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../components/searchFIeld";
import AddButton from "../../components/addButton";
import TableList from "../../commonComponents/tableList";
import {  DivisionSupplierColumn, DivisionSupplierData } from "../../commonComponents/tableData";

const DivisionSupplier = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Division </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Divisions</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/division/add" btnText="Add Division " />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={DivisionSupplierData} columns={DivisionSupplierColumn} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DivisionSupplier;
