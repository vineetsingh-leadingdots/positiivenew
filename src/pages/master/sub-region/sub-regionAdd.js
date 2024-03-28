import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { useAllCountryListQuery } from "../../../services/countryApi";
import { useAllregionListDataQuery } from "../../../services/regionApi";
import { useSubRegionCreateMutation } from "../../../services/subRegionApi";

const SubRegionAdd = () => {
  const navigate = useNavigate();
  const { data: countryList } = useAllCountryListQuery();
  const { data: regionList } = useAllregionListDataQuery();
  const [ createSubRegioin, { isSuccess: createSubRegioinSuccess } ] = useSubRegionCreateMutation();
  const { state } = useLocation();
  const [formData, setFormData] = useState({
    countryName: "",
    regionName: "",
    name: ""
  });

  useEffect(() => {
    if (state?.subRegionData) {
      setFormData({
        name: state?.subRegionData?.name,
        countryName: state?.subRegionData?.country_id,
        regionName: state?.subRegionData?.region_id
      });
    }
  }, [state]);

  useEffect(() => {
    if (createSubRegioinSuccess) {
      navigate("/sub/region/list");
    }
  }, [createSubRegioinSuccess]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(state?.subRegionData?.id){
      let val = {
        name: formData?.name,
        country_id: formData?.countryName.toString(),
        region_id: formData?.regionName.toString(),
        id: state?.subRegionData?.id
      };
      createSubRegioin(val);
    }
    else{
      let val = {
        name: formData?.name,
        country_id: formData?.countryName.toString(),
        region_id: formData?.regionName.toString()
      };
      createSubRegioin(val);
    }
  };


  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Sub Region Add </title>
        </Helmet>
      </HelmetProvider>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Sub Region Add</h2>
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
                    {countryList?.data?.map((country) => (
                      <option key={country?.id} value={country?.id}>{country?.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className=" w-full ">
                <div className="form-group mb-6 ">
                  <label className="formBlock mb-2 py-2">Region Name *</label>
                  <select 
                    className="formControl"
                    name="regionName" 
                    value={formData?.regionName}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option> 
                    {regionList?.data?.map((region) => (
                      <option key={region?.id} value={region?.id}>{region?.name}</option>
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
                    defaultValue={formData?.name}
                    onChange={handleInputChange}
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
                    onClick={() => navigate("/sub/region/list")}
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

export default SubRegionAdd;
