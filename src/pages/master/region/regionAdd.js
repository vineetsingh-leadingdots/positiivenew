import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { useAllCountryListQuery } from "../../../services/countryApi";
import { useRegionCreateMutation } from "../../../services/regionApi";

const RegionAdd = () => {
  const navigate = useNavigate();
  const { data: allCountryList } = useAllCountryListQuery();
  const [ createRegion, { isSuccess:  createRegionSuccess } ] = useRegionCreateMutation();
  const { state } = useLocation();
  const [formData, setFormData] = useState({
    countryName: "",
    name: ""
  });

  useEffect(() => {
    if (state?.regionData) {
      setFormData({
        name: state?.regionData?.name,
        countryName: state?.regionData?.country_id,
      });
    }
  }, [state]);

  useEffect(() => {
    if (createRegionSuccess) {
      navigate("/region/list");
    }
  }, [createRegionSuccess]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state?.regionData?.id) {
      let val = {
        name: formData?.name,
        country_id: formData?.countryName.toString(),
        id: state?.regionData?.id,
      };
      createRegion(val);
    } else {
      let val = {
        name: formData?.name,
        country_id: formData?.countryName.toString(),
      };
      createRegion(val);
    }
  };


  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Region Add </title>
        </Helmet>
      </HelmetProvider>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Region Add</h2>
        </div>
        <div className="card p-8 ">
          <div className="formArea ">
            <form id="brandAdd">
              <div className=" w-full ">
                <div className="form-group mb-6 ">
                  <label className="formBlock mb-2 py-2">Country Name</label>
                  <select 
                    className="formControl"
                    name="countryName" 
                    value={formData?.countryName} 
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option> 
                    {allCountryList?.data?.map((country) => (
                      <option key={country?.id} value={country?.id}>{country?.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className=" w-full ">
                <div className="form-group mb-6 ">
                  <label className="formBlock mb-2 py-2">Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter region name"
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
                    onClick={() => navigate("/region/list")}
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

export default RegionAdd;
