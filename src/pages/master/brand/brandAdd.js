import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useCreateBrandMutation } from "../../../services/brandApi";
import { useLocation, useNavigate } from "react-router-dom";

const BrandAdd = () => {
  const [createBrand, { isSuccess: createBrandSuccess }] =
    useCreateBrandMutation();
  const navigate = useNavigate();
  const [preview1, setPreview1] = useState();
  const [imageView, setImageView] = useState("image_circle");
  const { state } = useLocation();
  const [brandData, setBrandData] = useState({
    file: "",
    fileName: "",
  });

  useEffect(() => {
    if (state?.brandData) {
      setBrandData({
        file: state?.brandData?.brand_logo,
        fileName: state?.brandData?.name,
      });
    }
  }, [state]);

  useEffect(() => {
    if (createBrandSuccess) {
      navigate("/brand/list");
    }
  }, [createBrandSuccess]);

  let object1Url;
  const handleUpload = (event) => {
    setBrandData((prevBrandData) => ({
      ...prevBrandData,
      file: event.target.files[0],
    }));
    object1Url = URL.createObjectURL(event.target.files[0]);
    setPreview1(object1Url);
  };

  const handleFileChange = (e) => {
    setBrandData((prevBrandData) => ({
      ...prevBrandData,
      fileName: e.target.value,
    }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (state?.brandData?.id) {
      var formdataEdit = new FormData();
      formdataEdit.append("name", brandData?.fileName);
      formdataEdit.append("brand_logo", brandData?.file);
      formdataEdit.append("id", state.brandData.id);
      createBrand(formdataEdit);
    } else {
      var formdata = new FormData();
      formdata.append("name", brandData?.fileName);
      formdata.append("brand_logo", brandData?.file);
      createBrand(formdata);
    }
  };
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Brand Add </title>
        </Helmet>
      </HelmetProvider>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Brand Add</h2>
        </div>
        <div className="card p-8 ">
          <div className="formArea mt-5">
            <form id="brandAdd">
              <div className="w-full ">
                <div className="form-group mb-10 text-center relative">
                  <div className="flex flex-wrap justify-center">
                    <label className="formBlock block w-full text-center">
                      Icon
                    </label>
                    <div className="imageButtonRadius">
                      <button
                        type="button"
                        onClick={() => setImageView("image_circle")}
                        className="btn_circle"
                      >
                        <img src="/images/img.png" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setImageView("image_rectangle")}
                        className="btn_rectangle"
                      >
                        <img src="/images/img.png" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setImageView("image_square")}
                        className="btn_square"
                      >
                        <img src="/images/img.png" />
                      </button>
                    </div>
                    <div className="relative mt-6 text-center">
                      <div
                        className={`imageView ${imageView} rounded-full border-2 mb-2`}
                      >
                        {brandData ? (
                          <img
                            src={preview1 ? preview1 : brandData?.file}
                            alt="LOGO"
                          />
                        ) : (
                          <img src="/images/thumbnail.webp" alt={"logo.webp"} />
                        )}
                      </div>
                      <div className="file-upload">
                        <input
                          type="file"
                          name="brand_logo"
                          onChange={handleUpload}
                          className="formControl"
                        />
                        <img src="/images/img-upload.png" />
                      </div>
                    </div>
                  </div>
                  {/* {(brandData) ? (<label> {brandData?.fileName} </label>) : null} */}
                  <br />
                </div>
              </div>
              <div className=" w-full ">
                <div className="form-group mb-6 ">
                  <label className="formBlock mb-2 py-2">Name*</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    defaultValue={brandData?.fileName}
                    placeholder="Enter brand name"
                    className="formControl"
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              <div className="w-full formFooter">
                <div className=" form-group pt-8 pb-3 flex  gap-3 ">
                  <button
                    type="submit"
                    className=" btn-save btnSm "
                    onClick={handelSubmit}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/brand/list")}
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

export default BrandAdd;
