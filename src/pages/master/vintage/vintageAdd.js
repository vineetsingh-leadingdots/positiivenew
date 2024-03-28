import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useVintageCreateMutation } from "../../../services/vintageApi";

const VintageAdd = () => {
  const navigate = useNavigate();
  const [ createVintageData, { isSuccess: createVintageDataSuccess } ] = useVintageCreateMutation();

  const [formData, setFormData] = useState({
    name: ""
  });

  const { state } = useLocation();

  useEffect(() => {
    if (state?.vintageData) {
      setFormData({
        collection_from: state?.vintageData?.collection_from,
      });
    }
  }, [state]);

  useEffect(() => {
    if (createVintageDataSuccess) {
      navigate("/vintage/list");
    }
  }, [createVintageDataSuccess]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(state?.vintageData?.id){
      let val = {
        collection_from: formData?.name,
        id: state?.vintageData?.id
      };
      createVintageData(val);
    }
    else{
      let val = {
        collection_from: formData?.name
      };
      createVintageData(val);
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Vintage Add </title>
        </Helmet>
      </HelmetProvider>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Vintage Add</h2>
        </div>
        <div className="card p-8 ">
          <div className="formArea ">
            <form id="brandAdd">
              <div className=" w-full ">
                <div className="form-group mb-6 ">
                  <label className="formBlock mb-2 py-2">
                    Collection From *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter vintage name"
                    className="formControl"
                    onChange={handleInputChange}
                    defaultValue={formData?.collection_from}
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
                    onClick={() => navigate("/vintage/list")}
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

export default VintageAdd;
