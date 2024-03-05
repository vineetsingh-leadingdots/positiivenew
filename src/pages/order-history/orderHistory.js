import React, { useState } from "react";
import { Link } from "react-router-dom";
import TableList from '../../commonComponents/tableList';
import { OrderHistoryData, columnOrder } from "../../commonComponents/tableData";
import TabsFile from "../../commonComponents/tabs";
import { items, orderHistoryItem } from "../../commonComponents/tabItems";
const OrderHistory = () => {
  const [toggleState2, setToggleState2] = useState("OrderHistory");
  const toggleTab2 = (index) => {
    setToggleState2(index);
  };
  return (
    <>
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
        <h2>Order History</h2>
      </div>
      <div className="content w-full orderDetailsNew">
        <div className="w-full orderSearch">
          <div className="card py-6">
            <div className="flex items-center justify-between px-6">
              <div className="searhProductDe flex justify-between w-full">
                <div className="stockList">
                  <div className="stockImage">
                    <img src="/images/resturant.webp" />
                  </div>
                  <div className="stockContent">
                    <h3>LaNova Bistro  14112345</h3>
                    <p>82 Washington Street Brooklyn NY, 22182 212.289.2919 <img src="/images/map.webp" /></p>
                  </div>
                </div>
                <div className="searhProductDeRight">
                  <div className="btnTop flex ml-auto justify-end md:mb-9 mb-4">
                    <button className="btnShare mr-6">
                      <img src="/images/share.webp" />Share
                    </button>
                    <button className="btnUpload  " >
                      <img src="/images/cart2.webp" /> Create order
                    </button>
                  </div>
                  <div className="flex justify-end">
                    <Link>www.jamesonwhiskey.com</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="productTabArea orderTabs">              
            <TabsFile items={orderHistoryItem}/>              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
