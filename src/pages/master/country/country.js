import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../../components/searchFIeld";
import AddButton from "../../../components/addButton";
import TableList from "../../../commonComponents/tableList";
import {
  CountryColumns
} from "../../../commonComponents/tableData";
import { useCountryDeleteMutation, useCountryListQuery } from "../../../services/countryApi";
import DeletePopup from "../../../components/deletePopup";
import { useNavigate } from "react-router-dom";

const Country = () => {

  const { data: countryData } = useCountryListQuery();
  const [ deleteCountryData ] = useCountryDeleteMutation();
  const navigate = useNavigate();

  const deleteCountryDataHandler = (id) => {
    deleteCountryData(id);
  };

  const countryListData = countryData?.data.map((country) => ({
    key: country?.id?.toString(),
    Name: country?.name,
    Actions: (
    <div className="flex gap-1">
        <button
        onClick={() =>
            navigate("/country/add", { state: { countryData: country } })
        }
        className="actionButton"
        >
        <i className="fa fa-pencil" />
        </button>
        <DeletePopup
        onClick={() => deleteCountryDataHandler(country?.id)}
        />
    </div>
    ),
  }));
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
            <TableList data={countryListData} columns={CountryColumns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
