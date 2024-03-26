import { Col, Row } from "antd";
import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadField from "../../commonComponents/uploadField";
import ProductItem from "./productItem";

const ProductAdd = () => {
  const navigate = useNavigate();
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
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Product Add </title>
        </Helmet>
      </HelmetProvider>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 className="mb-2"> Add Product</h2>
          <p>(Add Product to Your Organization .)</p>
        </div>
        <div className="card p-6 ">
          <div className="formArea ">
            <Row gutter={20}>
              <Col xs={24} md={8}>
                <div className=" w-full ">
                  <h4>Image Preview</h4>
                  <div className="productImgage relative pt-5">
                    <div className="file-upload">
                      <input
                        type="file"
                        name="image"
                        className="form_control"
                        onChange={handleUpload}
                      />
                      {/* <i className="fa fa-file-image"></i> */}
                    </div>
                    {file ? (
                      <img src={preview1} alt={file.name} />
                    ) : (
                      <img src="/images/573455.svg" alt={"logo.webp"} />
                    )}
                    {file ? <label> {file.name} </label> : null}
                  </div>
                </div>
              </Col>
              <Col xs={24} md={16}>
                <Row gutter={24}>
                  <Col xs={24} md={12}>
                    <div className="formgroup mb-4 ">
                      <label className="formBlock	">Type *</label>
                      <select className="form_control">
                        <option value={""}>Select Type *</option>
                      </select>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="formgroup mb-4 ">
                      <label className="formBlock	">Country</label>
                      <select className="form_control">
                        <option value={""}>Select Country</option>
                      </select>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="formgroup mb-4 ">
                      <label className="formBlock	">Brand *</label>
                      <select className="form_control">
                        <option>Select Brand </option>
                      </select>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="formgroup mb-4 ">
                      <label className="formBlock	">Region *</label>
                      <select className="form_control">
                        <option>Select Region </option>
                      </select>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="formgroup mb-4 ">
                      <label className="formBlock	">Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form_control"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="formgroup mb-4 ">
                      <label className="formBlock	">Website</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form_control"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="formgroup mb-4 ">
                      <label className="formBlock	">Variety *</label>
                      <select className="form_control">
                        <option>Select Variety </option>
                      </select>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="formgroup mb-4 ">
                      <label className="formBlock	">Distributor</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form_control"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="formgroup mb-4 ">
                      <label className="formBlock	">Vintage</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form_control"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="formgroup mb-4 ">
                      <label className="formBlock	">Alcohol by Volume</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form_control"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="formgroup mb-4 ">
                      <label className="formBlock	">Product Number</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form_control"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="formgroup mb-4 ">
                      <label className="formBlock	">Special Attribute</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form_control"
                      />
                    </div>
                  </Col>
                  <Col xs={24}>
                    <div className="formgroup mb-4 poductImageDiv">
                      <p className="formBlock	">Product Image</p>
                      <span className="text-[11px] text-[#474747]">
                        ( Max Upload 2MB only PNG, JPG, TIFF, GIF, PFD Images
                        allowed )
                      </span>
                      <div className="relative">
                        <input
                          type="text"
                          className="form_control"
                          name="productImage"
                          id="productImage"
                        />
                        <button className="chooseFile right-0 top-0 absolute">
                          <input type="file" />
                          Choose File
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col xs={24} md={12}>
                <div className="formgroup mb-4 ">
                  <label className="formBlock	">
                    Enter key words to describe the taste
                  </label>
                  <select className="form_control">
                    <option value={""}>Select Beverage</option>
                  </select>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="formgroup mb-4 ">
                  <label className="formBlock	">
                    Enter key words to describe which foods pair well
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form_control"
                  />
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="formgroup mb-4 ">
                  <label className="formBlock	">
                    Write a brief description of the taste
                  </label>
                  <textarea
                    className="form_control h-28"
                    id="palate"
                    name="palate"
                  />
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="formgroup mb-4 ">
                  <label className="formBlock	">
                    Write a brief description of food pairings
                  </label>
                  <textarea
                    className="form_control h-28"
                    id="palate"
                    name="palate"
                  />
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="formgroup mb-3">
                  <label className="formBlock	">
                    Enter key words to describe the aroma
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form_control"
                  />
                </div>
                <div className="formgroup mb-1 ">
                  <label className="formBlock	">
                    Write a brief description of food pairings
                  </label>
                  <textarea
                    className="form_control h-28"
                    id="palate"
                    name="palate"
                  />
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="formgroup mb-1 ">
                  <label className="formBlock	">
                    Write a brief description of food pairings
                  </label>
                  <textarea
                    className="form_control h-48"
                    id="palate"
                    name="palate"
                  />
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="text-center pt-4 pb-6  w-full  ">
                  <UploadField />
                </div>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col xs={24} md={12}>
                <ProductItem title="Point of Sale" />
              </Col>
              <Col xs={24} md={12}>
                <ProductItem title="Gallery" />
              </Col>
            </Row>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAdd;
