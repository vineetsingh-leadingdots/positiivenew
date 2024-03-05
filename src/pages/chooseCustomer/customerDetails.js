import React, { useState } from "react";
import { Link } from "react-router-dom";

import EditCustomer from "./editCustomerPopup";
import EditContactPopup from "./editContactPopup";
import EditGoal from "./editGoal";
import UploadPopUp from "./uploadPopUp";
import TabsFile from "../../commonComponents/tabs";
import { CustomerDetailsItem } from "./customerDetailsItem";

const ChooseCustomerDetails = () => {
  const [show2, setShow2] = useState()
  const OpenPopup2 = () => {
    setShow2(true)
    setShowDropdown(!showDropdown)
  }
  const ClosePopup2 = () => {
    setShow2(false)
  }
  const options = [
    { value: 'Allocations', label: 'Allocations' },
    { value: 'Event', label: 'Event' },
    { value: 'Goals', label: 'Goals' }

  ];

  const [toggleState6, setToggleState6] = useState("OrderHistory");
  const toggleTab6 = (index) => {
    setToggleState6(index);
  };

  const [toggleState2, setToggleState2] = useState("Account");
  const toggleTab2 = (index) => {
    setToggleState2(index);
  };
  const [showDropdown, setShowDropdown] = useState(false)
  const showDrop = () => {
    setShowDropdown(!showDropdown)
  }

  const [toggleState4, setToggleState4] = useState("galleryAll");
  const toggleTab4 = (index) => {
    setToggleState4(index);
  };
  const [deleteShow, setDeleteShow] = useState(false);
  const handleClick = () => setDeleteShow(!deleteShow);

  const [toggleState5, setToggleState5] = useState("experienceAll");
  const toggleTab5 = (index) => {
    setToggleState5(index);
  };

  const [showDropdown2, setShowDropdown2] = useState(false)
  const showDrop2 = () => {
    setShowDropdown2(!showDropdown2)
  }


  return (
    <>
      <div className="customerDetailsPage">       
        <div className="breadcrumb">
          <Link to="/order-history" className="flex items-center">
            <span>
              <img src="/images/people-circle.webp" />
            </span>
            <span className="mx-3">
              <img src="/images/line.webp" />
            </span>
            Customers
            <span className="mx-3">
              <img src="/images/line.webp" />
            </span>
            LaNova Bistro
          </Link>
        </div>
        <div className="headingH">
          <h2>Customer</h2>
        </div>
        <div className="content w-full ">
          <div className="suppliersDetails ">
            <div className="card pt-6 pb-5 px-5 ">
              <div className="flex items-center justify-between ">
                <div className="searhProductDe flex justify-between w-full xl:flex-row flex-col">
                  <div className="stockList mb-2">
                    <div className="stockImage">
                      <img src="/images/resturant.webp" />
                    </div>
                    <div className="stockContent">
                      <h3>LaNova Bistro  14112345</h3>
                      <p>82 Washington Street Brooklyn NY, 22182 212.289.2919 <img src="/images/map.webp" /></p>
                    </div>
                  </div>
                  <div className="searhProductDeRight SuppliersRight">
                    <div className="btnTop flex">
                      <EditCustomer />
                      <div className={show2 ? "createNewPopup  active" : " createNewPopup  "}>
                        <div className="createNew">
                          <div className="p-6">
                            <div className="close cursor-pointer absolute top-4 right-4" onClick={ClosePopup2}>
                              <img src="/images/close-circle.svg" />
                            </div>
                            <h2>Add to Calendar</h2>
                            <div className="popupLink mt-4 mb-6">
                              <label className="label2 flex gap-1"><span><img src="/images/icon1.svg" /></span>Notes</label>
                            </div>
                            <form>
                              <div className="w-full mt-10 md:w-32 selectDate">
                                <label className="label">Select Date</label>
                                <div className=" w-32 ">
                                  <input type="date" className="form_control textBlue font-bold" />
                                </div>
                              </div>

                              <div className="flex my-10 w-full ">
                                <div className="w-32 mr-10">
                                  <label className="label">Start time</label>
                                  <div className="formGroup">
                                    <select className="form_control ">
                                      <option>12:00 PM</option>
                                      <option>01:00 PM</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="w-32">
                                  <label className="label">End time</label>
                                  <div className="formGroup">
                                    <select className="form_control ">
                                      <option>12:00 PM</option>
                                      <option>01:00 PM</option>
                                    </select>
                                  </div>
                                </div>
                              </div>

                              <div className="w-full mb-6">
                                <label className="label">Enter information</label>
                                <div className="formGroup">
                                  <textarea className="form_control h-32 " placeholder="Description for your meeting">
                                  </textarea>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="w-full border-t pt-6 pb-5 text-center mt-5">
                            <button className="btn-save  flex items-center justify-center btnSm mx-auto mb-6 " > Save </button>
                            {/* <button className="btnCancel">Cancel</button> */}
                          </div>
                        </div>
                      </div>
                      <div className="relative sm:mr-4 sm:w-auto w-full">
                        <button onClick={showDrop} className={showDropdown ? " active btnUpload w-full sm:w-auto" : "btnUpload w-full sm:w-auto"} >
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className="mr-[10px]">
                              <path d="M19.6943 3.87354H4.69434C3.4517 3.87354 2.44434 4.88089 2.44434 6.12354V19.6235C2.44434 20.8662 3.4517 21.8735 4.69434 21.8735H19.6943C20.937 21.8735 21.9443 20.8662 21.9443 19.6235V6.12354C21.9443 4.88089 20.937 3.87354 19.6943 3.87354Z" stroke="#264653" strokeWidth="1.00189" strokeLinejoin="round" />
                              <path d="M14.0752 12.1349C14.6996 12.1349 15.2057 11.6288 15.2057 11.0044C15.2057 10.3801 14.6996 9.87402 14.0752 9.87402C13.4509 9.87402 12.9448 10.3801 12.9448 11.0044C12.9448 11.6288 13.4509 12.1349 14.0752 12.1349Z" fill="#264653" />
                              <path d="M17.8238 12.1349C18.4481 12.1349 18.9542 11.6288 18.9542 11.0044C18.9542 10.3801 18.4481 9.87402 17.8238 9.87402C17.1995 9.87402 16.6934 10.3801 16.6934 11.0044C16.6934 11.6288 17.1995 12.1349 17.8238 12.1349Z" fill="#264653" />
                              <path d="M14.0752 15.8849C14.6996 15.8849 15.2057 15.3788 15.2057 14.7544C15.2057 14.1301 14.6996 13.624 14.0752 13.624C13.4509 13.624 12.9448 14.1301 12.9448 14.7544C12.9448 15.3788 13.4509 15.8849 14.0752 15.8849Z" fill="#264653" />
                              <path d="M17.8238 15.8849C18.4481 15.8849 18.9542 15.3788 18.9542 14.7544C18.9542 14.1301 18.4481 13.624 17.8238 13.624C17.1995 13.624 16.6934 14.1301 16.6934 14.7544C16.6934 15.3788 17.1995 15.8849 17.8238 15.8849Z" fill="#264653" />
                              <path d="M6.57525 15.8849C7.19956 15.8849 7.70567 15.3788 7.70567 14.7544C7.70567 14.1301 7.19956 13.624 6.57525 13.624C5.95093 13.624 5.44482 14.1301 5.44482 14.7544C5.44482 15.3788 5.95093 15.8849 6.57525 15.8849Z" fill="#264653" />
                              <path d="M10.3243 15.8849C10.9486 15.8849 11.4547 15.3788 11.4547 14.7544C11.4547 14.1301 10.9486 13.624 10.3243 13.624C9.69995 13.624 9.19385 14.1301 9.19385 14.7544C9.19385 15.3788 9.69995 15.8849 10.3243 15.8849Z" fill="#264653" />
                              <path d="M6.57525 19.6349C7.19956 19.6349 7.70567 19.1288 7.70567 18.5044C7.70567 17.8801 7.19956 17.374 6.57525 17.374C5.95093 17.374 5.44482 17.8801 5.44482 18.5044C5.44482 19.1288 5.95093 19.6349 6.57525 19.6349Z" fill="#264653" />
                              <path d="M10.3243 19.6349C10.9486 19.6349 11.4547 19.1288 11.4547 18.5044C11.4547 17.8801 10.9486 17.374 10.3243 17.374C9.69995 17.374 9.19385 17.8801 9.19385 18.5044C9.19385 19.1288 9.69995 19.6349 10.3243 19.6349Z" fill="#264653" />
                              <path d="M14.0752 19.6349C14.6996 19.6349 15.2057 19.1288 15.2057 18.5044C15.2057 17.8801 14.6996 17.374 14.0752 17.374C13.4509 17.374 12.9448 17.8801 12.9448 18.5044C12.9448 19.1288 13.4509 19.6349 14.0752 19.6349Z" fill="#264653" />
                              <path d="M6.19434 2.37402V3.88752" stroke="#264653" strokeWidth="1.00189" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M18.1948 2.37402V3.88752" stroke="#264653" strokeWidth="1.00189" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M21.9443 7.62402H2.44434" stroke="#264653" strokeWidth="1.00189" strokeLinejoin="round" />
                            </svg>
                            Add to calendar
                          </div>

                        </button>
                        <div className={showDropdown ? "show createNewDropDown" : "createNewDropDown"}>
                          <ul>
                            <li onClick={OpenPopup2}>
                              <input type="checkbox" />
                              <label>
                                <span>  <img src="/images/icon1.svg" /></span>
                                Notes
                              </label>
                            </li>
                            <li>
                              <input type="checkbox" />
                              <label>
                                <span> <img src="/images/icon2.svg" /></span>
                                Alarm
                              </label>
                            </li>
                            <li>
                              <input type="checkbox" />
                              <label>
                                <span> <img src="/images/icon3.svg" /></span>
                                Pickup
                              </label>
                            </li>
                            <li>
                              <input type="checkbox" />
                              <label>
                                <span> <img src="/images/icon4.svg" /></span>
                                Tasting
                              </label>
                            </li>
                            <li>
                              <input type="checkbox" />
                              <label>
                                <span>   <img src="/images/icon5.svg" /></span>
                                Sample request
                              </label>
                            </li>
                            <li>
                              <input type="checkbox" />
                              <label>
                                <span> <img src="/images/icon6.svg" /></span>
                                Reship
                              </label>
                            </li>
                            <li>
                              <input type="checkbox" />
                              <label>
                                <span> <img src="/images/icon7.svg" /></span>
                                Allocations
                              </label>
                            </li>
                            <li>
                              <input type="checkbox" />
                              <label>
                                <span>  <img src="/images/icon8.svg" /></span>
                                Invoice issue
                              </label>
                            </li>
                            <li>
                              <input type="checkbox" />
                              <label>
                                <span>  <img src="/images/icon9.svg" /></span>
                                Meet
                              </label>
                            </li>
                            <li>
                              <input type="checkbox" />
                              <label>
                                <span>  <img src="/images/icon10.svg" /></span>
                                Promo
                              </label>
                            </li>
                            <li>
                              <input type="checkbox" />
                              <label>
                                <span>  <img src="/images/icon11.svg" /></span>
                                Order reminder
                              </label>
                            </li>
                            <li className="pb-2">
                              <input type="checkbox" />
                              <label>
                                <span>  <img src="/images/icon12.svg" /></span>
                                POS request
                              </label>
                            </li>
                          </ul>

                        </div>
                      </div>
                      <button className="btnUpload w-full sm:w-auto ">
                        <img src="/images/cart.svg" className="mr-[10px]" /> Create order
                      </button>

                    </div>
                    <div className="supplierInfo">
                      <ul>
                        <li style={{ fontWeight: "normal" }}>
                          <Link to="">www.lanovabistro.com</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="productTabArea chooseCustomerDetail ">
              <TabsFile items={CustomerDetailsItem}/>     
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseCustomerDetails;
