import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../../components/searchFIeld";
import AddButton from "../../../components/addButton";
import TableList from "../../../commonComponents/tableList";
import {
  VintageColumns,
  VintageData,
} from "../../../commonComponents/tableData";

const Vintage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Vintage </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Vintages</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/vintage/add" btnText="Add Vintage" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={VintageData} columns={VintageColumns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vintage;
