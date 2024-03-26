import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../components/searchFIeld";
import AddButton from "../../components/addButton";
import TableList from "../../commonComponents/tableList";
import { SaleNoteColumn, SaleNoteData } from "../../commonComponents/tableData";

const SaleNote = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Sale Note </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Sale Note</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/sale-note/add" btnText="Add Sale Note" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={SaleNoteData} columns={SaleNoteColumn} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleNote;
