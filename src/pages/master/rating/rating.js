import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../../components/searchFIeld";
import AddButton from "../../../components/addButton";
import TableList from "../../../commonComponents/tableList";
import { RatingColumns } from "../../../commonComponents/tableData";
import { useDeleteRatingMutation, useListRatingQuery } from "../../../services/ratingApi";
import { useNavigate } from "react-router-dom";
import DeletePopup from "../../../components/deletePopup";

const Rating = () => {
  const [ deleteRating, {isSuccess: deleteRatingSuccess} ] = useDeleteRatingMutation();
  const { data: ratingListData, refetch } = useListRatingQuery();
  const navigate = useNavigate();

  const [modal1Open, setModal1Open] = useState(false); 
  const closeModal = () => {
      setModal1Open(false);
  };
  

  useEffect(() => {
    refetch();
  }, [ratingListData, deleteRatingSuccess]);

  const deleteRatingHandler = (id) => {
    deleteRating(id);
    setModal1Open(false);
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
        <DeletePopup onClick={() => deleteRatingHandler(rating?.id)}
          setModal1Open={setModal1Open}
          closeModal={closeModal}
          modal1Open={modal1Open}
        />
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
