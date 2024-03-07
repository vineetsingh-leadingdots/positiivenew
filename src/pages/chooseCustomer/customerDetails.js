import React, { useState } from "react";
import { Link } from "react-router-dom";

import EditCustomer from "./editCustomerPopup";
import EditContactPopup from "./editContactPopup";
import EditGoal from "./editGoal";
import UploadPopUp from "./uploadPopUp";
import TabsFile from "../../commonComponents/tabs";
import { CustomerDetailsItem } from "./customerDetailsItem";
import { Button, Drawer, Space } from 'antd';
import CalendarDropdown from "./calendarDropdown";
const ChooseCustomerDetails = () => {
  
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
                     
                      <div className="relative sm:mr-4 sm:w-auto w-full">
                      
                        <CalendarDropdown/>
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
