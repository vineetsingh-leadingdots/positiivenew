import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
const NoseAdd = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [preview1, setPreview1] = useState();
  const [imageView, setImageView] = useState("image_circle");
  let object1Url;
  function handleUpload(event) {
    setFile(event.target.files[0]);
    object1Url = URL.createObjectURL(event.target.files[0]);
    setPreview1(object1Url);
  }
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Nose Palate Add </title>
        </Helmet>
      </HelmetProvider>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 className="mb-4">Nose Palate Add</h2>
        </div>
        <div className="card p-8 ">
          <div className="formArea ">
            <div className="w-full ">
              <div className="form-group mb-10 text-center relative">
                <div className="flex 	flex-wrap justify-center">
                  <label className="formBlock block w-full text-center	">
                    Icon
                  </label>
                  <div className="imageButtonRadius">
                    <button
                      type="button"
                      onClick={() => setImageView("image_circle")}
                      className="btn_circle"
                    >
                      <i className="fa fa-file-image" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setImageView("image_rectangle")}
                      className="btn_rectangle"
                    >
                      <i className="fa fa-file-image" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setImageView("image_square")}
                      className="btn_square"
                    >
                      <i className="fa fa-file-image" />
                    </button>
                  </div>
                  <div className="relative mt-6 text-center">
                    <div
                      className={`imageView ${imageView} rounded-full border-2 mb-2`}
                    >
                      {file ? (
                        <img src={preview1} alt={file.name} />
                      ) : (
                        <img src="/images/logo.webp" alt={"logo.webp"} />
                      )}
                    </div>

                    <div className="file-upload">
                      <input
                        type="file"
                        name="brand_logo"
                        onChange={handleUpload}
                        className="formControl"
                      />
                      {/* <i className="fa fa-file-image"></i> */}
                    </div>
                  </div>
                </div>
                {file ? <label> {file.name} </label> : null}
                <br />

                {/* <div className="help-block"></div> */}
              </div>
            </div>
            <form id="brandAdd">
              <div className=" w-full ">
                <div className="form-group mb-6 ">
                  <label className="formBlock mb-2 py-2">Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter nose name"
                    className="formControl"
                  />
                </div>
              </div>

              <div className="w-full formFooter">
                <div className=" form-group pt-8 pb-3 flex  gap-3 ">
                  <button type="submit" className=" btn-save btnSm ">
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/nose/palate/list")}
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

export default NoseAdd;
