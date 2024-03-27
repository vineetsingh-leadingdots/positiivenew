import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../../components/searchFIeld";
import AddButton from "../../../components/addButton";
import TableList from "../../../commonComponents/tableList";
import {
  TypeColumns,
} from "../../../commonComponents/tableData";
import DeletePopup from "../../../components/deletePopup";
import { useDeleteTypeMutation, useListTypeQuery } from "../../../services/typeApi";
import { useNavigate } from "react-router-dom";

const Type = () => {

  const { data: typeListData } = useListTypeQuery();
  const [ deleteType ] = useDeleteTypeMutation();
  const navigate = useNavigate();

  const deletetypeHandler = (id) => {
    deleteType(id);
  };

  const typeData = typeListData?.data.map((type) => ({
    key: type?.id?.toString(),
    Name: type?.name,
    Actions: (
    <div className="flex gap-1">
        <button
        onClick={() =>
            navigate("/type/add", { state: { typeData: type } })
        }
        className="actionButton"
        >
        <i className="fa fa-pencil" />
        </button>
        <DeletePopup
        onClick={() => deletetypeHandler(type?.id)}
        />
    </div>
    ),
  }));

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Type </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Type</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/type/add" btnText="Add Type" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={typeData} columns={TypeColumns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Type;
