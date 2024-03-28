import React, { useState } from "react";
import { Col, Row } from "antd";

function CustomerProfile() {
  const [file, setFile] = useState();
  const [preview1, setPreview1] = useState();
  let object1Url;

  function handleUpload(event) {
    setFile(event.target.files[0]);
    object1Url = URL.createObjectURL(event.target.files[0]);
    setPreview1(object1Url);
  }

  return (
    <>
      <div className="content">
        <h2 className="text-2xl mb-3 font-normal">Customer Profile Update</h2>
        <div className="card p-6">
          <div className="formArea mt-5">
            <div className="w-full">
              <div className="form-group mb-10 text-center relative">
                <div className="flex flex-wrap justify-center">
                  <label className="formBlock block w-full text-center">
                    Profile Image
                  </label>
                  <div className="relative mt-6 text-center">
                    <div className="imageView rounded-full border-2 mb-2">
                      {file ? (
                        <img src={preview1} alt={file.name} />
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
                      <img src="/images/img-upload.png" alt="Upload" />
                    </div>
                  </div>
                </div>
                <div className="help-block" />
              </div>
            </div>
            <form>
              <div className="w-full">
                <h3 className="pb-3 mb-4 border-b">Business Details</h3>
                <Row gutter={24}>
                  <Col xs={24} md={12}>
                    <div className="form-group mb-6">
                      <label className="formBlock mb-2 py-2">
                        Business Name *
                      </label>
                      <input
                        id="business_name"
                        name="business_name"
                        type="text"
                        placeholder="Enter business name"
                        className="formControl"
                      />
                      <div className="help-block" />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="form-group mb-6">
                      <label className="formBlock mb-2 py-2">
                        License No. *
                      </label>
                      <input
                        id="license_number"
                        name="license_number"
                        type="text"
                        placeholder="Enter license number"
                        className="formControl"
                      />
                      <div className="help-block" />
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="w-full formFooter">
                <div className="form-group border-t pt-8 pb-3 flex">
                  <button type="submit" className="mb-2 btn-save btnSm">
                    Submit
                  </button>
                  <button type="button" className="btn-cancel btnSm mb-2">
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
}

export default CustomerProfile;
