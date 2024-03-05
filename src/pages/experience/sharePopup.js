import { Link } from "react-router-dom";
import React, { useState } from "react";
import Popup from "reactjs-popup";
const SharePopup = () => {
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
        className="sharePopup"
        trigger={
          <button
            className="btnUpload gap-3 md:w-auto w-full "
            aria-describedby="popup-8"
            onClick={() => setOpen((o) => !o)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path d="M13.1259 8.42407H14.6884C15.1028 8.42407 15.5002 8.58869 15.7932 8.88172C16.0862 9.17474 16.2509 9.57217 16.2509 9.98657V17.4866C16.2509 17.901 16.0862 18.2984 15.7932 18.5914C15.5002 18.8845 15.1028 19.0491 14.6884 19.0491H5.31335C4.89895 19.0491 4.50153 18.8845 4.2085 18.5914C3.91547 18.2984 3.75085 17.901 3.75085 17.4866V9.98657C3.75085 9.57217 3.91547 9.17474 4.2085 8.88172C4.50153 8.58869 4.89895 8.42407 5.31335 8.42407H6.87585" stroke="#264653" strokeWidth="1.00189" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.1266 5.92379L10.0012 2.79834L6.87573 5.92379" stroke="#264653" strokeWidth="1.00189" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.0009 13.4624V2.79834" stroke="#264653" strokeWidth="1.00189" strokeLinecap="round" strokeLinejoin="round" />
            </svg> Share
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <g opacity="0.6">
                        <path
                          d="M6.14286 11.2857C8.98318 11.2857 11.2857 8.98318 11.2857 6.14286C11.2857 3.30254 8.98318 1 6.14286 1C3.30254 1 1 3.30254 1 6.14286C1 8.98318 3.30254 11.2857 6.14286 11.2857Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.0001 13.0001L10.4287 10.4287"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="sendExperienceContent ">
                <div className="sendIconBox">
                  <input type="checkbox" />
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <path d="M19.3267 3.15924H5.07666C4.38108 3.16122 3.71455 3.43842 3.22269 3.93027C2.73084 4.42213 2.45364 5.08866 2.45166 5.78424V14.7842C2.45364 15.4798 2.73084 16.1464 3.22269 16.6382C3.71455 17.1301 4.38108 17.4073 5.07666 17.4092H6.95166V21.1592L11.3448 17.4964C11.4122 17.4401 11.4974 17.4092 11.5853 17.4092H19.3267C20.0222 17.4073 20.6888 17.1301 21.1806 16.6382C21.6725 16.1464 21.9497 15.4798 21.9517 14.7842V5.78424C21.9497 5.08866 21.6725 4.42213 21.1806 3.93027C20.6888 3.43842 20.0222 3.16122 19.3267 3.15924V3.15924Z" stroke="#264653" strokeWidth="1.00189" strokeLinejoin="round" />
                      <path d="M7.70325 11.786C8.53229 11.786 9.20436 11.114 9.20436 10.2849C9.20436 9.45588 8.53229 8.78381 7.70325 8.78381C6.87422 8.78381 6.20215 9.45588 6.20215 10.2849C6.20215 11.114 6.87422 11.786 7.70325 11.786Z" fill="#264653" />
                      <path d="M12.2028 11.786C13.0318 11.786 13.7039 11.114 13.7039 10.2849C13.7039 9.45588 13.0318 8.78381 12.2028 8.78381C11.3737 8.78381 10.7017 9.45588 10.7017 10.2849C10.7017 11.114 11.3737 11.786 12.2028 11.786Z" fill="#264653" />
                      <path d="M16.7028 11.786C17.5318 11.786 18.2039 11.114 18.2039 10.2849C18.2039 9.45588 17.5318 8.78381 16.7028 8.78381C15.8737 8.78381 15.2017 9.45588 15.2017 10.2849C15.2017 11.114 15.8737 11.786 16.7028 11.786Z" fill="#264653" />
                    </svg>
                    <p>SMS</p>
                  </span>
                </div>
                <div className="sendIconBox">
                  <input type="checkbox" />
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <path d="M20.0693 5.43475H4.31934C3.2838 5.43475 2.44434 6.27422 2.44434 7.30975V18.5598C2.44434 19.5953 3.2838 20.4348 4.31934 20.4348H20.0693C21.1049 20.4348 21.9443 19.5953 21.9443 18.5598V7.30975C21.9443 6.27422 21.1049 5.43475 20.0693 5.43475Z" stroke="#264653" strokeWidth="1.00189" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5.44482 8.43494L12.1948 13.6849L18.9448 8.43494" stroke="#264653" strokeWidth="1.00189" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>Email</p>
                  </span>
                </div>
                <div className="sendIconBox">
                  <input type="checkbox" />
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <path fill-rule="evenodd" clipRule="evenodd" d="M19.741 5.04111C18.7703 4.06989 17.617 3.30027 16.3476 2.77656C15.0782 2.25284 13.7178 1.98537 12.3446 1.98955C6.58179 1.98955 1.89054 6.65736 1.88819 12.3958C1.88564 14.223 2.3673 16.0183 3.28413 17.5989L1.80054 22.9896L7.34351 21.5425C8.87783 22.3737 10.5954 22.8088 12.3404 22.8081H12.3446C18.1069 22.8081 22.7977 18.1399 22.8005 12.4019C22.804 11.0334 22.5353 9.67789 22.0101 8.41421C21.4848 7.15053 20.7135 6.00393 19.741 5.04111ZM12.3446 21.0517H12.3408C10.7852 21.0522 9.25793 20.6359 7.91772 19.8461L7.60038 19.6586L4.31116 20.5174L5.18913 17.3256L4.98241 16.9975C4.11259 15.6204 3.65175 14.0246 3.65351 12.3958C3.65351 7.62721 7.55398 3.74736 12.3479 3.74736C14.6476 3.74326 16.8547 4.65277 18.4839 6.27586C20.113 7.89895 21.0308 10.1027 21.0352 12.4024C21.0333 17.1714 17.1348 21.0517 12.3446 21.0517ZM17.1113 14.5741C16.8502 14.4438 15.5644 13.8147 15.3263 13.728C15.0882 13.6413 14.9124 13.5977 14.7385 13.8583C14.5646 14.1189 14.0635 14.7021 13.9112 14.8778C13.7588 15.0536 13.6065 15.0728 13.3454 14.9425C13.0843 14.8122 12.2419 14.538 11.244 13.6521C10.4673 12.9625 9.94319 12.1113 9.79085 11.8511C9.63851 11.591 9.77444 11.4499 9.90522 11.3205C10.0229 11.2038 10.1663 11.0167 10.2971 10.8649C10.4279 10.713 10.4715 10.6042 10.5582 10.4308C10.6449 10.2574 10.6018 10.1055 10.5366 9.97564C10.4715 9.8458 9.94882 8.56564 9.73132 8.04486C9.51897 7.53767 9.30382 7.60658 9.14351 7.59861C8.99116 7.59111 8.81538 7.58924 8.64241 7.58924C8.51018 7.59268 8.38008 7.62334 8.26023 7.67932C8.14039 7.73529 8.03336 7.81537 7.94585 7.91455C7.70632 8.17518 7.03132 8.80517 7.03132 10.0839C7.03132 11.3627 7.96882 12.6002 8.09819 12.7736C8.22757 12.9471 9.94038 15.5735 12.5612 16.6999C13.0478 16.9083 13.5451 17.091 14.0508 17.2474C14.6766 17.4452 15.2462 17.4175 15.6962 17.3505C16.1982 17.276 17.243 16.7214 17.4601 16.1139C17.6771 15.5064 17.6776 14.9861 17.6124 14.8778C17.5473 14.7696 17.3729 14.7039 17.1113 14.5741Z" fill="#264653" />
                    </svg>
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
          </div>
        )}
      </Popup>
    </>
  );
};

export default SharePopup;
