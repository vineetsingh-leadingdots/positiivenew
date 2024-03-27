import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateTypeMutation } from "../../../services/typeApi";

const TypeAdd = () => {
  const navigate = useNavigate();

  const [ createType, { isSuccess: createDataSuccess } ] = useCreateTypeMutation();

  const [formData, setFormData] = useState({ 
    name: "" 
  });

  const { state } = useLocation();

  useEffect(() => {
    if (state?.typeData) {
      setFormData({
        name: state?.typeData?.name,
      });
    }
  }, [state]);

  useEffect(() => {
    if (createDataSuccess) {
      navigate("/type/list");
    }
  }, [createDataSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(state?.typeData?.id){
      let val = {
        name: formData?.name,
        id: state?.typeData?.id
      };
      createType(val);
    }
    else{
      let val = {
        name: formData?.name
      };
      createType(val);
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Type Add </title>
        </Helmet>
      </HelmetProvider>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Type Add</h2>
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
                    placeholder="Enter type name"
                    className="formControl"
                    onChange={handleChange}
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
                    onClick={() => navigate("/type/list")}
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

export default TypeAdd;
