import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../../components/searchFIeld";
import AddButton from "../../../components/addButton";
import TableList from "../../../commonComponents/tableList";
import {
  VintageColumns
} from "../../../commonComponents/tableData";
import { useVintageDeleteMutation, useVintageListQuery } from "../../../services/vintageApi";
import { useNavigate } from "react-router-dom";
import DeletePopup from "../../../components/deletePopup";

const Vintage = () => {

  const { data: vintageListData } = useVintageListQuery();
  const [ deleteVintageData ] = useVintageDeleteMutation();

  const navigate = useNavigate();

  const deleteVintageHandler = (id) => {
    deleteVintageData(id);
  };

  const vintageData = vintageListData?.data.map((vintage) => ({
    key: vintage?.id?.toString(),
    Name: vintage?.collection_from,
    Actions: (
    <div className="flex gap-1">
        <button
        onClick={() =>
            navigate("/vintage/add", { state: { vintageData: vintage } })
        }
        className="actionButton"
        >
        <i className="fa fa-pencil" />
        </button>
        <DeletePopup
        onClick={() => deleteVintageHandler(vintage?.id)}
        />
    </div>
    ),
  }));
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
            <TableList data={vintageData} columns={VintageColumns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vintage;
