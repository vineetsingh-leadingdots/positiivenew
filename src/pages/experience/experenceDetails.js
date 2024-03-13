import React from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import TabsFile from "../../commonComponents/tabs";
import { ExperenceDetailsItems } from "./details/experenceDetailsItems";



const ExperenceDetails = () => {
  
    return (
        <>
          <HelmetProvider>
        <Helmet>
          <title>Positiive | Experience Details </title>
        </Helmet>
      </HelmetProvider>

            <div className="customerDetailsPage">
                <div className="headingH">
                    <h2>Customer</h2>
                </div>
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
                <div className="content w-full ">
                    <div className="suppliersDetails ">
                        <div className="card p-5 ">
                            <div className="cardWithImgItem ">
                                <div className="image ">
                                    <img src="/images/100_1.webp"  />
                                </div>
                                <h3 className="flex">
                                    Cantina Mexico 65865
                                    <div className="flex gap-1 ml-3">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM18 14H6V12H18V14ZM18 11H6V9H18V11ZM18 8H6V6H18V8Z"
                                                    fill="#FF0000" />
                                            </svg>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM18 14H6V12H18V14ZM18 11H6V9H18V11ZM18 8H6V6H18V8Z"
                                                    fill="#24B600" />
                                            </svg>
                                        </span>
                                    </div>
                                </h3>
                            </div>
                            <div className="productTabArea chooseCustomerDetail ">
                          <TabsFile items={ExperenceDetailsItems}/>                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExperenceDetails;
