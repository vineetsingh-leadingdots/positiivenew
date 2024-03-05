import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { OrderHistoryData2, columnOrder2 } from "../../commonComponents/tableData";
import TableList from "../../commonComponents/tableList";

const OrderHistory2 = () => {
    const [toggleState2, setToggleState2] = useState("OrderHistory");
    const toggleTab2 = (index) => {
        setToggleState2(index);
    };
    let [count, setCount] = useState(80);
    function incrementCount() {
        count = count + 1;
        setCount(count);
    }
    function decrementCount() {
        count = count - 1;
        setCount(count);
    }
   
    return (
        <>

           <div className="orderHistory2">
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
            <div className="content w-full orderDetailsNew order3 orderFour">             
                <div className="w-full orderSearch">
                    <div className="card py-6">
                        <div className="flex items-center justify-between px-6 shadow">
                            <div className="searhProductDe flex justify-between w-full">
                                <div className="stockList">
                                    <div className="stockImage">
                                        <img src="/images/resturant.webp" />
                                    </div>
                                    <div className="stockContent">
                                        <h3>LaNova Bistro  14112345</h3>
                                        <p>82 Washington Street Brooklyn NY, 22182 212.289.2919 <img src="/images/map.webp" /></p>
                                    </div>
                                    <div className="flex orderDesktop ">
                                    <h4 className="text-blue">Order # 2783949 </h4>
                                    <h4 className="text-blue">Order Date May 24th 2023</h4>
                                    <h4 className="text-blue">Order Placed by Sara Wallcot</h4>
                                    </div>
                                </div>
                                <div className="searhProductDeRight">
                                    <div className="btnTop flex ml-auto justify-end mb:mb-9 mb-4">
                                    
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
                        <div className="orderMobile ">
                            <h4 className="text-blue">Order # 2783949 </h4>
                            <h4 className="text-blue">Order Date May 24th 2023</h4>
                            <h4 className="text-blue">Order Placed by Sara Wallcot</h4>
                        </div>
                        <div className="productTabArea orderTabs">
                        <TableList data={OrderHistoryData2} columns={columnOrder2} />
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </>
    );
};

export default OrderHistory2;
