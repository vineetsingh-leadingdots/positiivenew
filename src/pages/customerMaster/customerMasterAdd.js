import { Col, Row } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomerMasterAdd = () => {
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

  const [file3, setFile3] = useState();
  const [preview3, setPreview3] = useState();
  let object1Url3;
  function handleUpload3(event) {
    setFile3(event.target.files[0]);
    object1Url3 = URL.createObjectURL(event.target.files[0]);
    setPreview3(object1Url3);
  }
  return (
    <>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 >Add Customer</h2>
          <p>(Add new Customer to your organization.)</p>
        </div>
        <div className="card p-8 ">
          <div className="formArea mt-5">
            <Row>
              <Col xs={24} md={8}>
                <div className="w-full ">
                  <div className="form-group mb-10 text-center relative">
                    <div className="flex flex-wrap justify-center">
                      <label className="formBlock block w-full text-center	">
                      Customer Image
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
              <Col xs={24} md={8}>
                <div className="w-full ">
                  <div className="form-group mb-10 text-center relative">
                    <div className="flex flex-wrap justify-center">
                      <label className="formBlock block w-full text-center	">
                      GM Image
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
              <Col xs={24} md={8}>
                <div className="w-full ">
                  <div className="form-group mb-10 text-center relative">
                    <div className="flex flex-wrap justify-center">
                      <label className="formBlock block w-full text-center	">
                      Bartender Image
                      </label>
                      <div className="relative mt-6 text-center">
                        <div className="imageView rounded-full mb-2">
                          {file3 ? (
                            <img src={preview3} alt={file3.name} />
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
                            onChange={handleUpload3}
                            className="formControl"
                          />
                          <img src="/images/img-upload.png" />
                        </div>
                      </div>
                    </div>
                    {file3 ? <label> {file3.name} </label> : null}
                    <br />

               
                  </div>
                </div>
              </Col>
            </Row>
            <form id="brandAdd">
              <div className="w-full">
                <h2 className="mb-4 border-b pb-4">Customer Details</h2>
                <Row gutter={[16, 0]}>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter organization name"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        License No. *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter license number"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        Contact No *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter contact no "
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        Contact Email *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter contact email"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        State *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter state"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        City *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter city"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        Zip Code *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter zip code"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} >
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        Address *
                        </label>
                        <textarea
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter address"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="w-full">
                <h2 className="mb-4 border-b pb-4">GM Details</h2>
                <Row gutter={[16, 0]}>
                  <Col xs={24}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter gm name"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        Contact No
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
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        Contact Email
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
                <h2 className="mb-4 border-b pb-4">Bartender Details</h2>
                <Row gutter={[16, 0]}>
                  <Col xs={24}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter name"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        Contact No
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
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        Contact Email
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
                <h2 className="mb-4 border-b pb-4">Timing Details</h2>
                <Row gutter={[16, 0]}>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">Monday Open</label>
                        <input
                          id="name"
                          name="name"
                          type="time"
                          placeholder="Enter name"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        Monday Close
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="time"
                          placeholder="Enter name"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        Tuesday Open
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="time"
                          placeholder="Enter name"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        Tuesday Close
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="time"
                          placeholder="Enter name"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        Wednesday Open
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="time"
                          placeholder="Enter name"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        Wednesday Close
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="time"
                          placeholder="Enter name"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        Thursday Open
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="time"
                          placeholder="Enter name"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        Thursday Close
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="time"
                          placeholder="Enter name"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        Friday Open
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="time"
                          placeholder="Enter name"
                          className="formControl"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className=" w-full ">
                      <div className="form-group mb-6 ">
                        <label className="formBlock mb-2 py-2">
                        Friday Close
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="time"
                          placeholder="Enter name"
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
                    onClick={() => navigate(-1)}
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

export default CustomerMasterAdd;
