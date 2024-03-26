import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../components/searchFIeld";
import AddButton from "../../components/addButton";
import TableList from "../../commonComponents/tableList";
import { FeedbackColumn, FeedbackData } from "../../commonComponents/tableData";

const Feedbacks = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Feedback </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Feedbacks</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/feedback/add" btnText="Add Feedback" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={FeedbackData} columns={FeedbackColumn} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
