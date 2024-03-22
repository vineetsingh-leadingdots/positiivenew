
import React, { useState } from "react";
import { Drawer } from 'antd';
import { EmailIcon, SendIcon, SmsIcon, WhatsappIcon } from "../../commonComponents/commonSvg";
const SendExperience = () => {
  const [open, setOpen] = useState(false);
  const showDefaultDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className="flex gap-1 textBlue items-center" onClick={showDefaultDrawer}>
       <SendIcon/>
        Send to customer
      </button>
      <Drawer
        className="sendExperienceDrawer"
        placement="right"
        zIndex={999999}
        onClose={onClose}
        open={open}
        width={1124}
      >
        <div className="sendExperience">
          <div className="createNewPopup">
            <div className="createNew ">
              <div>
                <div className="p-5">
                  <div
                    className="close cursor-pointer absolute top-4 right-4"
                    onClick={onClose}
                  >
                    <img src="/images/close-circle.svg" />
                  </div>
                  <h2>
                    Send Experience
                  </h2>
                </div>
                <div className="p-5">
                  <div className=" mt-4">
                    <h3>How should your customer receive the experience?</h3>
                    <div className="flex mt-6 sendExperienceBox">
                      <div className="sendExperienceItem">
                        <div className="sendHeader">
                          <div className="sendHeaderImg">
                            <img src="/images/resturant.webp" />
                          </div>
                          <div className="sendHeaderContent">
                            <h4>LaNova Bistro</h4>
                            <p>2930 Avenue of Americas, New York, NY 10036</p>
                          </div>
                        </div>
                        <div className="sendExperienceContent">
                          <div className="sendIconBox">
                            <input type="checkbox" />
                            <span>
                              <SmsIcon />
                              <p>SMS</p>
                            </span>
                          </div>
                          <div className="sendIconBox">
                            <input type="checkbox" />
                            <span>
                              <EmailIcon />
                              <p>Email</p>
                            </span>
                          </div>
                          <div className="sendIconBox">
                            <input type="checkbox" />
                            <span>
                              <WhatsappIcon />
                              <p>WhatsApp</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="smsPopupFooter flex justify-between items-center">
                <p onClick={onClose}>Cancel</p>
                <div className="flex gap-2">
                  <button className="btnBack"><img src="/images/back.svg" />Back</button>
                  <button className="btnBack submit ">Submit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default SendExperience;
