import { useState } from "react";
import { Link } from "react-router-dom";
import TabsFile from "../../commonComponents/tabs";
import { items } from "../../commonComponents/tabItems";
 import CartPopPup from "./cartPoup";
import { DollarIcon } from "../../commonComponents/commonSvg";
// import UploadPopUp from "./uploadPopUp";

const SearchDetail = () => {


  return (
    <>
    
      <div className="breadcrumb">
        <Link to="/order-history" className="flex items-center">
          <span>
            <img src="/images/Search.webp" />
          </span>
          <span className="mx-3">
            <img src="/images/line.webp" />
          </span>
          Search
          <span className="mx-3">
            <img src="/images/line.webp" />
          </span>
          Jameson Irish Whiskey
        </Link>
      </div>
      <div className="headingH">
        <h2>Search</h2>
      </div>
      <div className="content w-full">  
        <div className="w-full orderSearch" >
          <div className="p-6 card ">
            <div className="flex items-center justify-between ">
              <div className="searhProductDe flex justify-between w-full">
                <div className="stockList">
                  <div className="stockImage">
                    <img src="/images/p6.webp" />
                  </div>
                  <div className="stockContent">
                    <h3>Jameson Irish Whiskey</h3>
                    <Link>www.jamesonwhiskey.com</Link>
                    <div className="btnGroup flex">
                      <button className="smallBtn mr-4">
                        <img src="/images/share.webp" />
                      </button>
                      <button className="smallBtn">
                        <img src="/images/heart-circle.webp" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="searhProductDeRight">
                  <div className="btnTop flex ml-auto justify-end mb-4">
                     <CartPopPup /> 
                  </div>
                  <div className="savingsSec" >
                  <span className="mr-1" style={{lineHeight:"0"}}>
                  <DollarIcon />
                  </span>
                    69% savings
                    <div className="line"></div>
                    Purchase 6 cases (12 bottles per case)
                  </div>

                </div>
              </div>
            </div>
            <div className="pt-6 pb-2">
              <h3 className="text-base text-blue">Sold by Southern wine and Spirits of New York</h3>
            </div>
            <div className="productTabArea">
              <TabsFile items={items}/>        
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchDetail;
