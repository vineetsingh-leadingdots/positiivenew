import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateAttributeMutation } from "../../../services/attributeApi";

const AttributeAdd = () => {
  const navigate = useNavigate();
  const [createAttribute, { isSuccess: createAttributeSuccess }] = useCreateAttributeMutation();
  
  const [formData, setFormData] = useState({
    name: "",
  });
  const { state } = useLocation();

  useEffect(() => {
    if (state?.AttributeData) {
      setFormData({
        name: state?.AttributeData?.name,
      });
    }
  }, [state]);

  useEffect(() => {
    if (createAttributeSuccess) {
      navigate("/attribute/list");
    }
  }, [createAttributeSuccess]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state?.AttributeData?.id) {
      let value = {
        name: formData?.name,
        id: state?.AttributeData?.id,
      };
      createAttribute(value);
    } else {
      let value = {
        name: formData?.name,
      };
      createAttribute(value);
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Attribute Add</title>
        </Helmet>
      </HelmetProvider>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Attribute Add</h2>
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
                    defaultValue={formData?.name}
                    placeholder="Enter Attribute name"
                    className="formControl"
                    onChange={handleChange}
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

export default AttributeAdd;
