import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../../components/searchFIeld";
import AddButton from "../../../components/addButton";
import TableList from "../../../commonComponents/tableList";
import { StylesColumns } from "../../../commonComponents/tableData";
import { useDeleteStyleMutation, useListStyleQuery } from "../../../services/styleApi";
import DeletePopup from "../../../components/deletePopup";
import { useNavigate } from "react-router-dom";

const Style = () => {
  const { data: styleListData, refetch } = useListStyleQuery();
  const [ deleteStyle, { isSuccess:deleteStyleSuccess } ] = useDeleteStyleMutation();

  useEffect(() => {
    refetch();
  }, [ styleListData, deleteStyleSuccess ]);

  const navigate = useNavigate();

  const deleteStyleHandler = (id) => {
    deleteStyle(id);
  };

  const StyleData = styleListData?.data.map((style) => ({
    key: style?.id?.toString(),
    Name: style?.name,
    Actions: (
      <div className="flex gap-1">
        <button
          onClick={() =>
            navigate("/style/add", { state: { styleListData: style } })
          }
          className="actionButton"
        >
          <i className="fa fa-pencil" />
        </button>
        <DeletePopup onClick={() => deleteStyleHandler(style?.id)} />
      </div>
    ),
  }));

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Style </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4">Styles</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/style/add" btnText="Add Rating" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={StyleData} columns={StylesColumns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Style;
