import { Col, Row } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SupplierAdd = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [preview1, setPreview1] = useState();
  let object1Url;
  function handleUpload(event) {
    setFile(event.target.files[0]);
    object1Url = URL.createObjectURL(event.target.files[0]);
    setPreview1(object1Url);
  }

  const [file2, setFile2] = useState();
  const [preview12, setPreview12] = useState();
  let object1Url2;
  function handleUpload2(event) {
    setFile2(event.target.files[0]);
    object1Url2 = URL.createObjectURL(event.target.files[0]);
    setPreview12(object1Url2);
  }
  return (
    <>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Supplier Add</h2>
        </div>
        <div className="card p-8 ">
          <div className="formArea mt-5">
            <Row>
              <Col xs={24} md={12}>
                <div className="w-full ">
                  <div className="form-group mb-10 text-center relative">
                    <div className="flex flex-wrap justify-center">
                      <label className="formBlock block w-full text-center	">
                        Splash Screen
                      </label>
                      <div className="relative mt-6 text-center">
                        <div className="imageView rounded-full mb-2">
                          {file2 ? (
                            <img src={preview12} alt={file2.name} />
                          ) : (
                            <img
                              src="/images/thumbnail.webp"
                              alt={"logo.webp"}
                            />
                          )}
                        </div>
                        <div className="file-upload">
                          <input
                            type="file"
                            name="brand_logo"
                            onChange={handleUpload2}
                            className="formControl"
                          />
                          <img src="/images/img-upload.png" />
                        </div>
                      </div>
                    </div>
                    {file2 ? <label> {file2.name} </label> : null}
                    <br />

                    {/* <div className="help-block"></div> */}
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="w-full ">
                  <div className="form-group mb-10 text-center relative">
                    <div className="flex flex-wrap justify-center">
                      <label className="formBlock block w-full text-center	">
                        Logo
                      </label>
                      <div className="relative mt-6 text-center">
                        <div className="imageView rounded-full mb-2">
                          {file ? (
                            <img src={preview1} alt={file.name} />
                          ) : (
                            <img
                              src="/images/thumbnail.webp"
                              alt={"logo.webp"}
                            />
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
                    {file ? <label> {file.name} </label> : null}
                    <br />

                    {/* <div className="help-block"></div> */}
                  </div>
                </div>
              </Col>
            </Row>
            <form id="brandAdd">
              <div className="w-full">
                <h2 className="mb-4 border-b pb-4">Organization Details</h2>
                <Row gutter={[16, 0]}>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                          Organization Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter organization  number"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                          Registration No. *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter registration number"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="w-full">
                <h2 className="mb-4 border-b pb-4">Contact Person</h2>
                <Row gutter={[16, 0]}>
                  <Col xs={24} md={4}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">Title *</label>
                        <select className="formControl">
                          <option>Mr.</option>
                        </select>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={10}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                          First Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter member first name"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={10}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                          Last Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter member first name"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="w-full">
                <h2 className="mb-4 border-b pb-4">Account Details</h2>
                <Row gutter={[16, 0]}>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                          Subscription Package
                        </label>
                        <select className="formControl">
                          <option>No Subscription Plan</option>
                        </select>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">Email</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter email address"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">Address *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter address"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">City</label>
                        <select className="formControl">
                          <option>Select City</option>
                        </select>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">Zip Code</label>
                        <select className="formControl">
                          <option>Select Zip Code</option>
                        </select>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                          Password *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter password"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                          Confirm Password *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter confirm password"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="w-full formFooter">
                <div className=" form-group pt-8 pb-3 flex  gap-3 ">
                  <button type="submit" className=" btn-save btnSm ">
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/member/list")}
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

export default SupplierAdd;
