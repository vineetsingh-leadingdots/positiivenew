import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../components/searchFIeld";
import AddButton from "../../components/addButton";
import TableList from "../../commonComponents/tableList";
import {
  CustomerNoteColumn,
  CustomerNoteData,
} from "../../commonComponents/tableData";

const CustomerNote = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Customer Note </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Customer Note</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton
                linkHref="/customer-note/add"
                btnText="Add Customer Note"
              />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={CustomerNoteData} columns={CustomerNoteColumn} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerNote;
