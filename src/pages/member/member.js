import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../components/searchFIeld";
import AddButton from "../../components/addButton";
import TableList from "../../commonComponents/tableList";
import {
  MembersListColumn,
  MembersListData,
} from "../../commonComponents/tableData";

const Member = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Member </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Members</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/member/add" btnText="Add Member" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={MembersListData} columns={MembersListColumn} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
