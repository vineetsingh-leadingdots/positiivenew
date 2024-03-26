import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateVarietyMutation } from "../../../services/varietyApi";

const VarietyAdd = () => {
  const [ createVariety, { isSuccess: createVarietiesSuccess } ] = useCreateVarietyMutation();
  const navigate = useNavigate();
  const [ formData, setFormData ] = useState({
    name: ""
  });

  useEffect (() => {
    if (createVarietiesSuccess) {
      navigate("/variety/list");
    }
  }, [createVarietiesSuccess]);

  const { state } = useLocation();

  useEffect(() => {
    if (state?.varietyData) {
      setFormData({
        name: state?.varietyData?.name,
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
    if (state?.varietyData?.id) {
      let val = {
        name: formData?.name,
        id: state?.varietyData?.id,
      };
      createVariety(val);
    } else {
      let val = {
        name: formData?.name,
      };
      createVariety(val);
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Variety Add </title>
        </Helmet>
      </HelmetProvider>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Variety Add</h2>
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
                    placeholder="Enter brand name"
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
                    onClick={() => navigate("/variety/list")}
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

export default VarietyAdd;
