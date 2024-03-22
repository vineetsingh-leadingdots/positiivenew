import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../../components/searchFIeld";
import AddButton from "../../../components/addButton";
import TableList from "../../../commonComponents/tableList";
import {
  VarietyColumns,
  VarietyData,
} from "../../../commonComponents/tableData";

const Variety = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Variety </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Variety</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/variety/add" btnText="Add Variety" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={VarietyData} columns={VarietyColumns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Variety;
