import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../../components/searchFIeld";
import AddButton from "../../../components/addButton";
import TableList from "../../../commonComponents/tableList";
import {
  ClassificationColumns,
  ClassificationData,
} from "../../../commonComponents/tableData";

const Classification = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Classification </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Classification</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton
                linkHref="/classification/add"
                btnText="Add Classification"
              />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList
              data={ClassificationData}
              columns={ClassificationColumns}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Classification;
