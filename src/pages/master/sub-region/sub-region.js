import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../../components/searchFIeld";
import AddButton from "../../../components/addButton";
import TableList from "../../../commonComponents/tableList";
import {
  RegionsSubColumns
} from "../../../commonComponents/tableData";
import { useNavigate } from "react-router-dom";
import DeletePopup from "../../../components/deletePopup";
import { useSubRegionDeleteMutation, useSubRegionListQuery } from "../../../services/subRegionApi";

const SubRegion = () => {
  const { data: subRegionData } = useSubRegionListQuery();
  const navigate = useNavigate();
  const [ deleteSubRegion ] = useSubRegionDeleteMutation();

  const deleteSubRegionDataHandler = (id) => {
    deleteSubRegion(id);
  };

  const regionListData = subRegionData?.data.map((subRegion) => ({
    key: subRegion?.id?.toString(),
    Name: subRegion?.name,
    Actions: (
    <div className="flex gap-1">
        <button
        onClick={() =>
            navigate("/sub/region/add", { state: { subRegionData: subRegion } })
        }
        className="actionButton"
        >
        <i className="fa fa-pencil" />
        </button>
        <DeletePopup
        onClick={() => deleteSubRegionDataHandler(subRegion?.id)}
        />
    </div>
    ),
  }));
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Sub Region </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4">Sub Regions</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/sub/region/add" btnText="Add Region" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={regionListData} columns={RegionsSubColumns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubRegion;
