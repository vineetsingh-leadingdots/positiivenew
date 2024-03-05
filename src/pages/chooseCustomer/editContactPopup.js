import { useState } from "react";
import Popup from "reactjs-popup";

const EditContactPopup = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };
  

  return (
    <>
      <Popup
        open={open}
        onClose={() => closeModal()}
        closeOnDocumentClick={false}
        className="max607 editContact"
        trigger={
            
          <button 
            aria-describedby="popup-8"
            onClick={() => setOpen((o) => !o)}  >
                       <img src="/images/create.webp" className="mb-4"/> 
                    </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button
              className="close"
              onClick={() => {
                closeModal();
                close();
              }}
            >
              <img src="/images/close-circle.svg"/>
            </button>
            <div className="header pl-8">
              <h3 >Edit Contacts</h3>              
            </div>
            <div className="popupContent mt-10">
             <form>
              <div className="w-full md:w-[378px] pl-8">
                <label>Primary Contact</label>
                <input type="text" className="form_control h32"/>
              </div>
              <div className="w-full mt-6 md:w-[215px] pl-8">
                <label>Primary Phone Number</label>
               <div className="pr-3">
               <input type="text" className="form_control h32 "/>
               </div>
              </div>
              <div className="w-full mt-6 md:w-[378px] pl-8">
                <label>Primary Email</label>
                <input type="text" className="form_control h32"/>
              </div>
              <div className="px-8 mt-6">
                <div className="w-full h-[1px] bg-[#CACACA]">
                </div>
              </div>
              <div className="w-full mt-6 md:w-[410px] pl-8">
                <label>Additional Contact</label>
                <div className="flex">
                <input type="text" className="form_control h32"/>
                <button className="ml-2" ><img src="/images/trash-red.webp"/></button>
                </div>
              </div>
              <div className="w-full md:w-[378px] pl-8 mt-6">
                <label>Contact Number</label>
                <input type="text" className="form_control h32"/>
              </div>
              <div className="w-full md:w-[378px] mt-6 pl-8">
                <label>Contact Email</label>
                <input type="text" className="form_control h32"/>
              </div>
              <div className="addNew pl-8 mt-6 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
             <path d="M11.999 8.25073V15.7507M15.749 12.0007H8.24902M20.999 12.0007C20.999 7.03198 16.9678 3.00073 11.999 3.00073C7.03027 3.00073 2.99902 7.03198 2.99902 12.0007C2.99902 16.9695 7.03027 21.0007 11.999 21.0007C16.9678 21.0007 20.999 16.9695 20.999 12.0007Z" stroke="#264653" strokeWidth="1.00189" strokeLinecap="round"/>
             </svg> Add new
              </div>
              <div className="w-full mt-6 text-center" >
              <div className="w-full h-[1px] bg-[#CACACA] mb-6">
                </div>
               <button className="btnUpload cartBtn  mx-auto">Save</button> 
              
              </div>
             </form>
            </div>
          </div>
        )}
      </Popup>
    </>
  );
};

export default EditContactPopup;
