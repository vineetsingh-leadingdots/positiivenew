import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../../components/searchFIeld";
import AddButton from "../../../components/addButton";
import TableList from "../../../commonComponents/tableList";
import {
  NosePalatesColumns
} from "../../../commonComponents/tableData";
import { useNosePalateDeleteMutation, useNosePalateListQuery } from "../../../services/nosePalateApi";
import { useNavigate } from "react-router-dom";
import DeletePopup from "../../../components/deletePopup";

const Nose = () => {

  const { data: nosePalateData } = useNosePalateListQuery();
  const [ deleteNosePalate ] = useNosePalateDeleteMutation();

  const navigate = useNavigate();

  const deleteNosePalateHandler = (id) => {
    deleteNosePalate(id);
  };

  const nosePalateListData = nosePalateData?.data.map((nosePalate) => ({
    key: nosePalate?.id?.toString(),
    Name: nosePalate?.name,
    Actions: (
      <div className="flex gap-1">
        <button
          onClick={() =>
            navigate("/nose/palate/add", { state: { nosePalateData: nosePalate } })
          }
          className="actionButton"
        >
          <i className="fa fa-pencil" />
        </button>
        <DeletePopup onClick={() => deleteNosePalateHandler(nosePalate?.id)} />
      </div>
    ),
  }));

  
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Nose Palate </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Nose Palate</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/nose/palate/add" btnText="Add Nose" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={nosePalateListData} columns={NosePalatesColumns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nose;
