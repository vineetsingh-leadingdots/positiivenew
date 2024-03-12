import React from "react";
import { Link } from "react-router-dom";
import { OrderHistoryAllData, columnOrderAll } from "../../commonComponents/tableData";
import TableList from "../../commonComponents/tableList";
import { SearchIcon2 } from "../../commonComponents/commonSvg";
const OrderHistoryAll = () => {
  return (
    <>
    <div className="historyPage">     
      <div className="breadcrumb">
        <Link to="/order-history" className="flex items-center">
          <span>
            <img src="/images/basket.webp" />
          </span>
          <span className="mx-3">
            <img src="/images/line.webp" />
          </span>
          Order History
        </Link>
      </div>
      <div className="headingH">
        <h2>Order History All Customers</h2>
      </div>
      <div className="content w-full orderDetailsNew ">
        <div className="w-full md:mt-4 bg-white rounded productTabArea ">
          <div className="w-full p-4 mb-2 md:mb-0 flex md:flex-row flex-col justify-between md:pt-8 md:pb-11 md:px-6 historySearchSec">
            <div className="flex justify-between w56">
              <div className="searchSec mb-2 md:mb-0">
                <input type="text" className="form_control" placeholder="Search by Business name" />
                <button>
             <SearchIcon2/>
                </button>
              </div>
              <div className="md:pl-6 pl-2">
                <button className="submitBtn">Search</button>
              </div>
            </div>
            <button className="btnUpload sm:w-[140px] sm:ml-auto  " >
              <img src="/images/cart2.webp" /> Create order
            </button>
          </div>
          <TableList data={OrderHistoryAllData} columns={columnOrderAll} />
        </div>
      </div>
      </div>
    </>
  );
};

export default OrderHistoryAll;
