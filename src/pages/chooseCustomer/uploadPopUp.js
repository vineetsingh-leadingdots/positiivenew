import React from "react";
import { useState } from "react";
import {Modal } from 'antd';
const UploadPopUp = () => {

  const [modal1Open, setModal1Open] = useState(false);

  return (
    <>
    <button className="btnUpload mr-6" onClick={() => setModal1Open(true)}>
        <img src="/images/cloud-upload.webp" /> Upload
      </button>
      <Modal
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
        footer={false}
        closeIcon={false}
        zIndex="999999999999"
        width="430px"
        className="max430-content"
      >
        <>
          <button
            className="close"
            onClick={() => setModal1Open(false)}
          >
            <img src="/images/close-circle.svg" />
          </button>
          <div className="header">
            <h3 className="mb-2">Upload</h3>
            <p>Images, videos, and files will peak your customers interest. Engaging content will drive sales.</p>
          </div>
          <div className="popupContent mt-6">
            <form>
              <div className="w-full">
                <label>Name your file</label>
                <input type="text" className="form_control h32" />
              </div>
              <div className="w-full mt-10">
                <label>Description</label>
                <input type="text" className="form_control h32" />
              </div>
              <div className="w-full mt-10">
                <label>Select Files</label>
                <div className="uploadFile">
                  <input type="file" />
                  <div className="flex w-full flex-col items-center">
                    <img src="/images/cloud-upload.webp" className="w-auto" />
                    <p>.webp,.webp,.gif,.mov,.mp4,.pdf</p>
                  </div>
                </div>
              </div>
              <div className="w-full mt-10 pt-2 text-center" >
                <button className="btnUpload cartBtn mb-8 mx-auto">Save</button>
                <button className="btnCancel">Cancel</button>
              </div>
            </form>
          </div>
        </>
      </Modal>
    
    </>
  );
};

export default UploadPopUp;
