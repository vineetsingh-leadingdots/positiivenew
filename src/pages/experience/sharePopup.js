import React, { useState } from "react";
import {Modal } from 'antd';
import { EmailIcon, SearchIcon2, ShareIcon2, SmsIcon, WhatsappIcon } from "../../commonComponents/commonSvg";
const SharePopup = () => { 
  const closeModal = () => {
    setOpen(false);
  };
  const [modal1Open, setModal1Open] = useState(false);
  return (
    <>
       <button className="btnUpload " onClick={() => setModal1Open(true)}>
       <ShareIcon2/> Share
      </button>
      <Modal
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
        footer={false}
        closeIcon={false}
        zIndex="999999999999"
        width="518px"
        className="sharePopup-content"
      >
        <>
          <button
            className="close"
            onClick={() => setModal1Open(false)}
          >
            <img src="/images/close-circle.svg" />
          </button>
          <div className="header">
              <h2>Share <span>Clear all</span></h2>
            </div>
            <div className="popupContent ">
              <h3>Customers</h3>
              <div className="rounded-tl-md rounded-tr-md border p-5 mt-8">
                <div className="searchSec">
                  <input
                    type="text"
                    className="form_control"
                    placeholder="Search products"
                  />
                  <button>
              <SearchIcon2/>
                  </button>
                </div>
              </div>
              <div className="sendExperienceContent ">
                <div className="sendIconBox">
                  <input type="checkbox" />
                  <span>
                <SmsIcon/>
                    <p>SMS</p>
                  </span>
                </div>
                <div className="sendIconBox">
                  <input type="checkbox" />
                  <span>
                   <EmailIcon/>
                    <p>Email</p>
                  </span>
                </div>
                <div className="sendIconBox">
                  <input type="checkbox" />
                  <span>
                   <WhatsappIcon/>
                    <p>WhatsApp</p>
                  </span>
                </div>
              </div>
              <div className="flex justify-center gap-5 popupBtn ">
                <button className="btnBack  " onClick={() => {
                  closeModal();
                  close();
                }}
                >Cancel</button>
                <button className="btnBack submit ">Send</button>
              </div>
            </div>
        </>
      </Modal>
     
    </>
  );
};

export default SharePopup;
