import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../../components/searchFIeld";
import AddButton from "../../../components/addButton";
import TableList from "../../../commonComponents/tableList";
import { RatingColumns } from "../../../commonComponents/tableData";
import { useDeleteRatingMutation, useListRatingQuery } from "../../../services/ratingApi";
import { useNavigate } from "react-router-dom";
import DeletePopup from "../../../components/deletePopup";

const Rating = () => {
  const [ deleteRating ] = useDeleteRatingMutation();
  const { data: ratingListData } = useListRatingQuery();
  const navigate = useNavigate();

  const deleteRatingHandler = (id) => {
    deleteRating(id);
};

  const RatingData = ratingListData?.data.map((rating) => ({
    key: rating?.id?.toString(),
    Name: rating?.name,
    Actions: (
      <div className="flex gap-1">
        <button
          onClick={() =>
            navigate("/rating/add", { state: { ratingData: rating } })
          }
          className="actionButton"
        >
          <i className="fa fa-pencil" />
        </button>
        <DeletePopup onClick={() => deleteRatingHandler(rating?.id)} />
      </div>
    ),
  }));

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Rating </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4">Ratings</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/rating/add" btnText="Add Rating" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={RatingData} columns={RatingColumns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rating;
