import { useState } from "react";

import { Modal } from 'antd';
const EditCustomer = () => {
  const [modal1Open, setModal1Open] = useState(false);

  return (
    <>
      <button className="btnUpload cartBtn " onClick={() => setModal1Open(true)}>
        <img src="/images/create-white.svg" className="mr-[10px]" /> Edit Customer
      </button>
      <Modal
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
        footer={false}
        closeIcon={false}
        zIndex="999999999999"
        width="607px"
        className="popup-content editContact-content"
      >
        <>
          <button
            className="close"
            onClick={() => setModal1Open(false)}
          >
            <img src="/images/close-circle.svg" />
          </button>
          <div className="header pl-8 ">
            <h3 >Edit Customer</h3>
          </div>
          <div className="popupContent mt-10 pl-8">
            <form>
              <div className=" w-378px mt-8 ">
                <label>License number</label>
                <input type="text" className="form_control h32" />
              </div>
              <div className="w-378px mt-8">
                <label>Business Name</label>
                <input type="text" className="form_control h32" />
              </div>
              <div className=" w-378px mt-8 ">
                <label>Address</label>
                <input type="text" className="form_control h32" />
              </div>
              <div className=" w-215px mt-8 ">
                <label>Phone Number</label>
                <div className="pr-3">
                  <input type="text" className="form_control h32 " />
                </div>
              </div>
              <div className=" w-420px mt-8 ">
                <label>Primary Contact Name</label>
                <div className="flex">
                  <input type="text" className="form_control h32" />
                  <button className="ml-5"><img src="/images/trash.svg" /></button>
                </div>
              </div>
              <div className="mt-8 w-378px ">
                <label>Primary Contact Number</label>
                <input type="text" className="form_control h32" />
              </div>
              <div className="mt-8  w-378px ">
                <label>Primary Contact Email</label>
                <input type="text" className="form_control h32" />
              </div>
              <div className="mt-8 w-378px ">
                <label>Primary Contact Role</label>
                <div className="0">
                  <select className="form_control h32">
                    <option>Owner</option>
                  </select>
                </div>
              </div>
              <div className="addNew mt-6 items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11.999 8.25067V15.7507M15.749 12.0007H8.24896M20.999 12.0007C20.999 7.03192 16.9677 3.00067 11.999 3.00067C7.03021 3.00067 2.99896 7.03192 2.99896 12.0007C2.99896 16.9694 7.03021 21.0007 11.999 21.0007C16.9677 21.0007 20.999 16.9694 20.999 12.0007Z" stroke="#264653" strokeWidth="1.00189" strokeLinecap="round" />
                </svg>Add Additional Contact
              </div>
              <div className="w-full mt-11 text-center" >
                <button className="btnUpload cartBtn  mx-auto">Save</button>
              </div>
            </form>
          </div>
        </>
      </Modal>

    </>
  );
};

export default EditCustomer;
