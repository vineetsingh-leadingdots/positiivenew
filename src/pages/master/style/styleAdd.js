import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateStyleMutation } from "../../../services/styleApi";

const StyleAdd = () => {
  const navigate = useNavigate();
  const [ createStyle, {isSuccess: createStyleSuccess} ] = useCreateStyleMutation();

  const [formData, setFormData] = useState({
    name: ""
  });

  const { state } = useLocation();

  useEffect(() => {
    if (state?.styleListData) {
      setFormData({
        name: state?.styleListData?.name,
      });
    }
  }, [state]);

  
  useEffect(() => {
    if (createStyleSuccess) {
      navigate("/style/list");
    }
  }, [createStyleSuccess]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(state?.styleListData?.id){
      let val = {
        name: formData?.name,
        id: state?.styleListData?.id
      };
      createStyle(val);
    }
    else{
      let val = {
        name: formData?.name
      };
      createStyle(val);
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Style Add </title>
        </Helmet>
      </HelmetProvider>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Style Add</h2>
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
                    placeholder="Enter style name"
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
                    onClick={() => navigate("/style/list")}
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

export default StyleAdd;
