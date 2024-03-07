import { useState } from "react";
import Popup from "reactjs-popup";

const UploadPopUp = () => {
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
        className="max430"
        trigger={
            <button
            className="btnUpload mr-6"
            aria-describedby="popup-8"
            onClick={() => setOpen((o) => !o)}
          >
            <img src="/images/cloud-upload.webp" /> Upload
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
              &times;
            </button>
            <div className="header">
              <h3 className="mb-2">Upload</h3>
              <p>Images, videos, and files will peak your customers interest. Engaging content will drive sales.</p>
            </div>
            <div className="popupContent mt-6">
             <form>
              <div className="w-full">
                <label>Name your file</label>
                <input type="text" className="form_control h32"/>
              </div>
              <div className="w-full mt-10">
                <label>Description</label>
                <input type="text" className="form_control h32"/>
              </div>
              <div className="w-full mt-10">
                <label>Select Files</label>
                <div className="uploadFile">
                <input type="file"/>
                 <div className="flex w-full flex-col items-center">
                 <img src="/images/cloud-upload.webp" className="w-auto"/>
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
          </div>
        )}
      </Popup>
    </>
  );
};

export default UploadPopUp;
