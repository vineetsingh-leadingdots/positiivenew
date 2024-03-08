import React, { useState } from "react";

import { Link } from "react-router-dom";
import { LeftArrowIcon, RightArrowIcon } from "../../commonComponents/commonSvg";
import { Select, Space } from 'antd';
import MyRoleSelect from "./myRoleSelect";

const { Option } = Select;

const StepOne = () => {


  const [toggleState2, setToggleState2] = useState();
  const toggleTab2 = (index) => {
    setToggleState2(index);
  };
  const SaveBoardingForm = (e) => {
    e.preventDefault()
  }

  return (
    <>

      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between w-full flex-wrap">
          <div className="onboardLeft">
            <h2>Complete your profile</h2>
            <form className="onBoardingForm" onSubmit={SaveBoardingForm}>
              <div className="w-full mb-10  ">
                <h3>I work for a beverage...</h3>
                <div className="pl-6 ">
                  <Select
                    defaultValue="1"
                    className="customSelect"
                  >
                    <Option value="1">Select beverage</Option>
                    <Option value="2">Distributor / Wholesaler</Option>
                    <Option value="3">Supplier / Importer / Broker</Option>
                  </Select>
                </div>
              </div>
              <div className="w-full mb-10 ">
                <h3>Company Name</h3>
                <div className="pl-6 ">
                  <input type="text" className="form_control" placeholder="Company Name" />
                </div>
              </div>
              <div className="w-full mb-10  ">
                <h3>My role</h3>
                <div className="md:pl-6 ">
               <MyRoleSelect/>
                </div>
              </div>
              <div className="w-full mb-10 ">
                <div className="flex">
                  <div className="cityWidth ">
                    <h3>City</h3>
                    <div className="md:pl-6 ">                  
                      <Select
                    defaultValue="1"
                    className="customSelect"
                  >
                    <Option value="1">City</Option>                 
                  </Select>
                    </div>
                  </div>
                  <div className="stateWidth ">
                    <h3>State</h3>
                    <div className="pl-4">                    
                      <Select
                    defaultValue="1"
                    className="customSelect"
                  >
                    <Option value="1">State</Option>                 
                  </Select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mb-10  ">
                <h3>My Customers- 3 options to load your customers, choose one <span className="skipText">Skip for now</span></h3>
                <div className="w-full">
                  <ul className="loadCustomerTab md:pl-6 ">
                    <li>
                      <Link onClick={() => toggleTab2("customersManually")}
                        className={toggleState2 === "customersManually" ? " active" : "  "}>
                        Enter customers manually
                      </Link>
                      <div className={toggleState2 === "customersManually" ? "tabContent active pt-4 pb-[2px]" : "tabContent  pt-4 pb-[2px]"}>
                        <div className="xButtons">
                          <button className="btn_Right">
                            <RightArrowIcon />
                          </button>
                          <button className="btn_Right">
                            <LeftArrowIcon />
                          </button>
                        </div>
                        <h3>Search by</h3>
                        <div className="pl-6 ">
                          <div className="w-full mb-3">
                            <input type="text" className="form_control" placeholder="Business Corporate Name" />
                          </div>
                          <div className="w-full mb-3">
                            <input type="text" className="form_control" placeholder="Business DBA" />
                          </div>
                          <div className="w-full ">
                            <input type="text" className="form_control" placeholder="Business Address" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link onClick={() => toggleTab2("importCustomer")}
                        className={toggleState2 === "importCustomer" ? " active" : "  "}>
                        Import customers from file
                      </Link>

                    </li>
                    <li>
                      <Link onClick={() => toggleTab2("loadCustomer")}
                        className={toggleState2 === "loadCustomer" ? " active" : "  "}>
                        Let us load your customers
                      </Link>

                    </li>

                  </ul>
                </div>
              </div>
            </form>
          </div>
          <div className="onboardRight">
            <div className="onBoardImg">
              {toggleState2 === "customersManually" && <img src="/images/img_bottles.svg" />}
              {toggleState2 === "loadCustomer" && <img src="/images/img_bottles.webp" />}
              {toggleState2 === "importCustomer" && <img src="/images/img_bottles.webp" />}

            </div>

            <div className=" w-full ">
              <div className={toggleState2 === "customersManually" ? "tabContent active customersManually " : "customersManually tabContent"} >
                <h3>My Customers</h3>
                <div className="onboardRightContent mt-4">
                  <p>Harrisberg Bar <span>347 State Street Brooklyn NY 22123 347 State Street Brooklyn</span></p>
                  <p>Harrisberg Bar <span>347 State Street Brooklyn NY 22123</span></p>
                  <p>Harrisberg Bar <span>347 State Street Brooklyn NY 22123</span></p>
                  <p>Harrisberg Bar <span>347 State Street Brooklyn NY 22123</span></p>
                  <p>Harrisberg Bar <span>347 State Street Brooklyn NY 22123</span></p>
                  <p>Harrisberg Bar <span>347 State Street Brooklyn NY 22123</span></p>
                </div>
              </div>

              <div className={toggleState2 === "loadCustomer" ? "tabContent active" : "tabContent "}>
                <h3>Contact Details</h3>
                <div className="onboardRightContent mt-4 ">
                  <div className=" loadCustomer">
                    <div className="px-4 py-3">
                      <h3 className="text-center">Let us load your customers</h3>
                      <p>If you are having trouble loading your customers, we can help. </p>
                      <p>Simply email us and attach your file that contains, your customer information. At the very minimum we need the following:
                        <span className="block">Business Name</span>
                        <span className="block">Business Address</span>
                        <span className="block">Business City</span>
                        <span className="block">Business Zip Code </span>
                      </p>
                      <p>If you have your customer contact information, that would be amazing! Tap the image below and see  an example.</p>
                      <div className="mb-3">
                        <img src="/images/sc.webp" />
                      </div>
                      <p>Email us your file at <Link to="Customerservice@Positiive.io">Customerservice@Positiive.io</Link></p>
                      <p>Feel free to ask any questions you may have. Check your email for a response from us with 24 hours.  </p>
                      <p>For now you can check out or amazing application click continue below. </p>
                      <p><span>Your customer information will be kept confidential and never be shared with any entity, corporation or business</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={toggleState2 === "importCustomer" ? "tabContent active importCustomer" : "tabContent importCustomer "}>
                <div className="onboardRightContent mt-10">
                  <div className=" w-full">
                    <div className="px-4 p-3">
                      <h3 className="text-center">Import your customers information</h3>
                      <p className="text-center text-gray-700" >The images below are examples of what your spread sheet should look like.</p>
                      <div className="pt-7 text-center importImage">
                        <p className="text-gray-500 mb-1">Microsoft excel spread sheet</p>
                        <img src="images/excel.webp" />
                      </div>
                      <div className="pt-3 pb-5 text-center importImage">
                        <p className="text-gray-500 mb-1">Google sheets</p>
                        <img src="images/googlesheet.webp" />
                      </div>
                      <p className="mb-4">Its highly recommended that you fill out all columns. At a very bare minimum, the Business Name, Address, and City are required. You can always add the contact information at a later time. </p>
                      <p>You may name the file anything you wish.  Once complete, upload the file by clicking the upload button below.</p>
                      <div className="w-full mt-10 mb-8">
                        <label>City</label>
                        <div className="form_control flex items-center gap-6">
                          <img src="/images/upload.webp" /> <span>.xls, .xlsx, .xml,.csv,.gsheets</span>
                        </div>
                      </div>
                      <div className="w-full mb-2">
                        <div className="flex justify-center items-center flex-col gap-4">
                          <button className="btn-save btnSm">Upload</button>
                          <button className="textBlue font-semibold">Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default StepOne