import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../../components/searchFIeld";
import AddButton from "../../../components/addButton";
import TableList from "../../../commonComponents/tableList";
import { SizeColumns, SizeData } from "../../../commonComponents/tableData";

const Size = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Size </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Size</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/size/add" btnText="Add Size" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={SizeData} columns={SizeColumns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Size;
