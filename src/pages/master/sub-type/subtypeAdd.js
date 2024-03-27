import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useSubTypeCreateMutation } from "../../../services/subTypeApi";
const SubTypeAdd = () => {
  const navigate = useNavigate();
  const [ createSubType, { isSuccess: createSubTypeSuccess } ] = useSubTypeCreateMutation();

  const [formData, setFormData] = useState({
    name: ""
  });

  const { state } = useLocation();

  useEffect(() => {
    if (state?.subTypeData) {
      setFormData({
        name: state?.subTypeData?.name,
      });
    }
  }, [state]);

  useEffect(() => {
    if (createSubTypeSuccess) {
      navigate("/sub/type/list");
    }
  }, [createSubTypeSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(state?.subTypeData?.id){
      let val = {
        name: formData?.name,
        id: state?.subTypeData?.id
      };
      createSubType(val);
    }
    else{
      let val = {
        name: formData?.name
      };
      createSubType(val);
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | SubType Add </title>
        </Helmet>
      </HelmetProvider>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 className="mb-4"> SubType Add</h2>
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
                    placeholder="Enter subtype name"
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
                    onClick={() => navigate("/sub/type/list")}
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

export default SubTypeAdd;
