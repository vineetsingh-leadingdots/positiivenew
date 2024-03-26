import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateRatingMutation } from "../../../services/ratingApi";

const RatingAdd = () => {
  const navigate = useNavigate();
  const [createRating, { isSuccess: createRatingSuccess }] =
    useCreateRatingMutation();
  const [formData, setFormData] = useState({
    name: "",
  });

  useEffect(() => {
    if (createRatingSuccess) {
      navigate("/rating/list");
    }
  }, [createRatingSuccess]);

  const { state } = useLocation();

  useEffect(() => {
    if (state?.ratingData) {
      setFormData({
        name: state?.ratingData?.name,
      });
    }
  }, [state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state?.ratingData?.id) {
      let val = {
        name: formData?.name,
        id: state?.ratingData?.id,
      };
      createRating(val);
    } else {
      let val = {
        name: formData?.name,
      };
      createRating(val);
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Rating Add </title>
        </Helmet>
      </HelmetProvider>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Rating Add</h2>
        </div>
        <div className="card p-8 ">
          <div className="formArea ">
            <form id="brandAdd">
              <div className=" w-full ">
                <div className="form-group mb-6 ">
                  <label className="formBlock mb-2 py-2">Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter rating name"
                    className="formControl"
                    onChange={handleChange}
                    defaultValue={formData?.name}
                  />
                </div>
              </div>

              <div className="w-full formFooter">
                <div className=" form-group pt-8 pb-3 flex  gap-3 ">
                  <button
                    type="submit"
                    className=" btn-save btnSm "
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/attribute/list")}
                    className="btn-cancel btnSm "
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingAdd;
