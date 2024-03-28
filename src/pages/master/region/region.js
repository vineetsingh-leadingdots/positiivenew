import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../../components/searchFIeld";
import AddButton from "../../../components/addButton";
import TableList from "../../../commonComponents/tableList";
import {
  RegionsColumns
} from "../../../commonComponents/tableData";
import { useNavigate } from "react-router-dom";
import { useRegionDeleteMutation, useRegionListQuery } from "../../../services/regionApi";
import DeletePopup from "../../../components/deletePopup";

const Region = () => {

  const [ deleteRegion ] = useRegionDeleteMutation();
  const { data: regionListData } = useRegionListQuery();
  
  const navigate = useNavigate();

  const deleteRegionHandler = (id) => {
    deleteRegion(id);
  };

  const regionData = regionListData?.data.map((region) => ({
    key: region?.id?.toString(),
    Name: region?.name,
    Actions: (
    <div className="flex gap-1">
        <button
        onClick={() =>
            navigate("/region/add", { state: { regionData: region } })
        }
        className="actionButton"
        >
        <i className="fa fa-pencil" />
        </button>
        <DeletePopup
        onClick={() => deleteRegionHandler(region?.id)}
        />
    </div>
    ),
  }));
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Region </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4">Regions</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/region/add" btnText="Add Region" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={regionData} columns={RegionsColumns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Region;
