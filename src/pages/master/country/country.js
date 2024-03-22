import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../../components/searchFIeld";
import AddButton from "../../../components/addButton";
import TableList from "../../../commonComponents/tableList";
import {
  CountryColumns,
  CountryData,
} from "../../../commonComponents/tableData";

const Country = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Country </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Countries</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/country/add" btnText="Add Country " />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={CountryData} columns={CountryColumns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
