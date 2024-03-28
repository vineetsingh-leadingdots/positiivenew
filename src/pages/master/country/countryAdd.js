import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { useCountryCreateMutation } from "../../../services/countryApi";

const CountryAdd = () => {
  const navigate = useNavigate();
  const [ createCountry, { isSuccess: createCountrySuccess } ] = useCountryCreateMutation();
  const { state } = useLocation();
  const [formData, setFormData] = useState({
    name: ""
  });

  console.log(formData?.name, "name");

  useEffect(() => {
    if (state?.countryData) {
      setFormData({
        name: state?.countryData?.name,
      });
    }
  }, [state]);

  useEffect(() => {
    if (createCountrySuccess) {
      navigate("/country/list");
    }
  }, [createCountrySuccess]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(state?.countryData?.id){
      let val = {
        name: formData?.name,
        id: state?.countryData?.id
      };
      createCountry(val);
    }
    else{
      let val = {
        name: formData?.name
      };
      createCountry(val);
    }
  };



  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Country Add </title>
        </Helmet>
      </HelmetProvider>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Country Add</h2>
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
                    placeholder="Enter country name"
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
                    onClick={() => navigate("/country/list")}
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

export default CountryAdd;
