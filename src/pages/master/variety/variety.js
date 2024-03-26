import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../../components/searchFIeld";
import AddButton from "../../../components/addButton";
import TableList from "../../../commonComponents/tableList";
import {
  VarietyColumns,
} from "../../../commonComponents/tableData";
import { useDeleteVarietyMutation, useListVarietyQuery } from "../../../services/varietyApi";
import { useNavigate } from "react-router-dom";
import DeletePopup from "../../../components/deletePopup";

const Variety = () => {
  const [ deleteVariety ] = useDeleteVarietyMutation();
  const { data: varietyListData } = useListVarietyQuery();
  const navigate = useNavigate();

  const deleteVarietyHandler = (id) => {
    deleteVariety(id);
  }; 

  const tableData = varietyListData?.data.map((variety) => ({
    key: variety?.id?.toString(),
    Name: variety?.name,
    Actions: (
    <div className="flex gap-1">
        <button
        onClick={() =>
            navigate("/variety/add", { state: { varietyData: variety } })
        }
        className="actionButton"
        >
        <i className="fa fa-pencil" />
        </button>
        <DeletePopup
        onClick={() => deleteVarietyHandler(variety?.id)}
        />
    </div>
    ),
  }));

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Variety </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Variety</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/variety/add" btnText="Add Variety" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={tableData} columns={VarietyColumns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Variety;
