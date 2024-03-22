import React from "react";
import { useState } from "react";
import { CloseIcon, PlusIcon4 } from "../../commonComponents/commonSvg";
import { Col, Modal, Row } from "antd";
import UploadField from "../../commonComponents/uploadField";

const ProductItem = ({ title }) => {
  const [modal1Open, setModal1Open] = useState(false);
  return (
    <>
      <div className="flex w-full justify-between flex-col items-center mb-6">
        <div className="w-full">
          <div className="formgroup mb-4 ">
            <label className="formBlock flex items-center gap-1	">
              <PlusIcon4 />
              {title}
            </label>
            <textarea
              className="form_control h-16"
              id="appearance"
              name="appearance"
            />
            {/* <div className="help-block"></div> */}
          </div>
          <Row>
            <Col xs={12} md={6}>
              <div className=" w-1/4 text-center mb-6">
                <div className="relative mx-auto w-8">
                  <img src="/images/folder.svg" className="mx-auto" />
                  <span className="folderClose">
                    <CloseIcon />
                  </span>
                </div>
                <p className="text-[#474747] text-[10px]">Champange bucket</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className=" w-1/4 text-center mb-6">
                <div className="relative mx-auto w-8">
                  <img src="/images/folder.svg" className="mx-auto" />
                  <span className="folderClose">
                    <CloseIcon />
                  </span>
                </div>
                <p className="text-[#474747] text-[10px]">Champange bucket</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className=" w-1/4 text-center mb-6">
                <div className="relative mx-auto w-8">
                  <img src="/images/folder.svg" className="mx-auto" />
                  <span className="folderClose">
                    <CloseIcon />
                  </span>
                </div>
                <p className="text-[#474747] text-[10px]">Champange bucket</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className=" w-1/4 text-center mb-6">
                <div className="relative mx-auto w-8">
                  <img src="/images/folder.svg" className="mx-auto" />
                  <span className="folderClose">
                    <CloseIcon />
                  </span>
                </div>
                <p className="text-[#474747] text-[10px]">Champange bucket</p>
              </div>
            </Col>{" "}
            <Col xs={12} md={6}>
              <div className=" w-1/4 text-center mb-6">
                <div className="relative mx-auto w-8">
                  <img src="/images/folder.svg" className="mx-auto" />
                  <span className="folderClose">
                    <CloseIcon />
                  </span>
                </div>
                <p className="text-[#474747] text-[10px]">Champange bucket</p>
              </div>
            </Col>
          </Row>
          <div className="w-full   ">
            <div className="formgroup mb-4 poductImageDiv">
              <p className="formBlock	">Product Image</p>
              <span className="text-[11px] text-[#474747]">
                ( Max Upload 2MB only PNG, JPG, TIFF, GIF, PFD Images allowed )
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
            <p className="flex items-center gap-1">
              Set expiration date
              <input
                type="checkbox"
                className="w-4 h-4"
                onClick={() => setModal1Open(true)}
              />
              <Modal
                centered
                open={modal1Open}
                onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)}
                footer={false}
                closeIcon={false}
                zIndex="999999999999"
                width="408px"
                className="max430-content"
              >
                <>
                  <button
                    className="close"
                    onClick={() => setModal1Open(false)}
                  >
                    <img src="/images/close-circle.svg" />
                  </button>
                  Calendar
                </>
              </Modal>
              <span className="font-medium textBlue">expires May 2nd 2023</span>
            </p>
          </div>
          <div className="text-center pt-4 pb-6  w-full  ">
            <UploadField />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
