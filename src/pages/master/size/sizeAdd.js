import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateSizeMutation } from "../../../services/sizeApi";

const SizeAdd = () => {
  const navigate = useNavigate();
  const [ createSize, {isSuccess: createSizeSuccess} ] = useCreateSizeMutation();

  const [formData, setFormData] = useState({
    name: ""
  });

  useEffect (() => {
    if (createSizeSuccess) {
      navigate("/size/list");
    }
  }, [createSizeSuccess]);

  const { state } = useLocation();

  useEffect(() => {
    if (state?.sizeDataList) {
      setFormData({
        name: state?.sizeDataList?.name,
      });
    }
  }, [state]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state?.sizeDataList?.id) {
      let val = {
        name: formData?.name,
        id: state?.sizeDataList?.id,
      };
      createSize(val);
    } else {
      let val = {
        name: formData?.name,
      };
      createSize(val);
    }
  };


  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Size Add </title>
        </Helmet>
      </HelmetProvider>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Size Add</h2>
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
                    placeholder="Enter size name"
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
                    onClick={() => navigate("/size/list")}
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

export default SizeAdd;
