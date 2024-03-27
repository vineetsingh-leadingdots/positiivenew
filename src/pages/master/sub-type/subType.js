import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../../components/searchFIeld";
import AddButton from "../../../components/addButton";
import TableList from "../../../commonComponents/tableList";
import {
  SubTypesColumns
} from "../../../commonComponents/tableData";
import { useSubTypeDeleteMutation, useSubTypeListQuery } from "../../../services/subTypeApi";
import { useNavigate } from "react-router-dom";
import DeletePopup from "../../../components/deletePopup";

const SubType = () => {

  const { data: subTypeList } = useSubTypeListQuery();
  const [ deleteSubType ] = useSubTypeDeleteMutation();
  const navigate = useNavigate();

  const deleteSubTypeHandler = (id) => {
    deleteSubType(id);
  };

  const subTypeData = subTypeList?.data.map((subType) => ({
    key: subType?.id?.toString(),
    Name: subType?.name,
    Actions: (
    <div className="flex gap-1">
        <button
        onClick={() =>
            navigate("/sub/type/add", { state: { subTypeData: subType } })
        }
        className="actionButton"
        >
        <i className="fa fa-pencil" />
        </button>
        <DeletePopup
        onClick={() => deleteSubTypeHandler(subType?.id)}
        />
    </div>
    ),
  }));

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | SubTypes </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> SubTypes</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/sub/type/add" btnText="Add SubType" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={subTypeData} columns={SubTypesColumns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubType;
