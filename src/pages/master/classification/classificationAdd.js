import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { useClassificationCreateMutation } from "../../../services/classificationApi";

const ClassificationAdd = () => {
  const navigate = useNavigate();

  const [ createClassification, { isSuccess: createClassificationSuccess } ] = useClassificationCreateMutation();

  const [formData, setFormData] = useState({
    name: ""
  });

  const { state } = useLocation();

  useEffect(() => {
    if (state?.classificationData) {
      setFormData({
        name: state?.classificationData?.name,
      });
    }
  }, [state]);

  useEffect(() => {
    if (createClassificationSuccess) {
      navigate("/classification/list");
    }
  }, [createClassificationSuccess]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(state?.classificationData?.id){
      let val = {
        name: formData?.name,
        id: state?.classificationData?.id
      };
      createClassification(val);
    }
    else{
      let val = {
        name: formData?.name
      };
      createClassification(val);
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Classification Add </title>
        </Helmet>
      </HelmetProvider>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Classification Add</h2>
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
                    placeholder="Enter classification name"
                    className="formControl"
                    onChange={handleInputChange}
                    defaultValue={formData?.name}
                  />
                </div>
              </div>

              <div className="w-full formFooter">
                <div className=" form-group pt-8 pb-3 flex  gap-3 ">
                  <button type="submit" className=" btn-save btnSm " onClick={handleSubmit}>
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/classification/list")}
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

export default ClassificationAdd;
