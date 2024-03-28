import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../../components/searchFIeld";
import AddButton from "../../../components/addButton";
import TableList from "../../../commonComponents/tableList";
import {
  ClassificationColumns
} from "../../../commonComponents/tableData";
import { useClassificationDeleteMutation, useClassificationListQuery } from "../../../services/classificationApi";
import { useNavigate } from "react-router-dom";
import DeletePopup from "../../../components/deletePopup";

const Classification = () => {

  const { data: classificationListData } = useClassificationListQuery();
  const [ deleteClassification ] = useClassificationDeleteMutation();

  const navigate = useNavigate();

  const deleteClassificationHandler = (id) => {
    deleteClassification(id);
  };

  const classificationData = classificationListData?.data.map((classification) => ({
    key: classification?.id?.toString(),
    Name: classification?.name,
    Actions: (
    <div className="flex gap-1">
        <button
        onClick={() =>
            navigate("/classification/add", { state: { classificationData: classification } })
        }
        className="actionButton"
        >
        <i className="fa fa-pencil" />
        </button>
        <DeletePopup
        onClick={() => deleteClassificationHandler(classification?.id)}
        />
    </div>
    ),
  }));

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Classification </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Classification</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton
                linkHref="/classification/add"
                btnText="Add Classification"
              />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList
              data={classificationData}
              columns={ClassificationColumns}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Classification;
