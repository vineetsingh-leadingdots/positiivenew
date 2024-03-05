import { useState } from "react";
import Popup from "reactjs-popup";

const EditGoal = () => {
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
              <h3 >Edit Goals</h3>              
            </div>
            <div className="popupContent mt-10">
             <form>
              <div className="w-full  px-8">
                <label>Goals</label>
                <textarea className="form_control h-[214px]" /> 
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

export default EditGoal;
