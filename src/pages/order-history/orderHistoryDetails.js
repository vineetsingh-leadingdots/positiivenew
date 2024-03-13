import React from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async'; 
const OrderHistoryDetails = () => {
  return (
    <>
    <HelmetProvider>
        <Helmet>
          <title>Positiive | Order History </title>
        </Helmet>
      </HelmetProvider>
      <div className="headingH">
        <h2>Order History</h2>
      </div>
      <div className="breadcrumb">
        <Link to="/order-history" className="flex items-center">
          <span>
            <img src="/images/basket.webp" />
          </span>
          <span className="mx-3">
            <img src="/images/line.webp" />
          </span>
          Order History
          <span className="mx-3">
            <img src="/images/line.webp" />
          </span>
          LaNova Bistro #896364
        </Link>
      </div>
      <div className="content w-full ">
        <div className="flex w-full">
          <div className="orederDetails w-full">
            <div className="productOrderList mb-4 flex justify-between">
              <div className="orderLeft flex items-center ">
                <div className="orderImage">
                  <img src="/images/p6.webp" />
                </div>
                <div className="orderContent">
                  <h3>Jameson Irish Whiskey - 750ml</h3>
                  <Link to="/" className="whiskeyBtn">
                    Whiskey
                  </Link>
                  <span>Ireland</span>
                </div>
              </div>
              <div className="orderPrice">
                <div>
                  <h4>
                    $12.99 / <span>per bottle</span>
                  </h4>
                  <h5>Qty 2</h5>
                </div>
                <h6>Total Cost: $xxx.xx</h6>
              </div>
            </div>
            <div className="productOrderList flex justify-between">
              <div className="orderLeft flex items-center ">
                <div className="orderImage">
                  <img src="/images/p6.webp" />
                </div>
                <div className="orderContent">
                  <h3>Jameson Irish Whiskey - 750ml</h3>
                  <Link to="/" className="whiskeyBtn">
                    Whiskey
                  </Link>
                  <span>Ireland</span>
                </div>
              </div>
              <div className="orderPrice">
                <div>
                  <h4>
                    $12.99 / <span>per bottle</span>
                  </h4>
                  <h5>Qty 2</h5>
                </div>
                <h6>Total Cost: $xxx.xx</h6>
              </div>
            </div>
          </div>
          <div className="orderContentRight">
            <h2>LaNova Bistro - #896364</h2>
            <div className="w-full mt-4"> 
                    <div className="overflow-x-auto w-full whitespace-nowrap ">
                      <table className="table-auto table  w-full">
                        <thead className="thead-dark ">
                          <tr>
                          <th style={{ visibility:"hidden" }}>
                              <div className="flex items-center">
                                                  
                              </div>
                            </th>
                            <th>
                              <div className="flex items-center mr-6">
                              QTY                       
                              </div>
                            </th>
                            <th>
                              <div className="flex items-center">
                              Price                            
                              </div>
                            </th>                            
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>  
                            Three Taverns - Night on Ponce                        
                            </td>                            
                            <td>6</td>
                            <td>$xxx.xx</td>                                    
                          </tr>                           
                         <tr>
                            <td>  
                            Three Taverns - Night on Ponce                        
                            </td>                            
                            <td>6</td>
                            <td>$xxx.xx</td>                                    
                          </tr>  
                          <tr className="subTotal">
                            <td colSpan="2">  
                            Subtotal       
                            </td>                            
                            <td>$1,202.21</td>                                                       
                          </tr>  
                          <tr>
                            <td colSpan="2">Total Savings</td>
                            <td><span className="green">65%</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  
              <div className="w-full locationDetails">
               <div className="flex mb-7">
                <div className="mr-10">
                  <h3>Address:</h3>
                </div>
               <div> <p>LaNova Bistro<br/> 123 W 49th Street<br/>New York, NY 10036</p></div>
               </div>
               <div className="flex mb-7">
                <div className="mr-10">
                  <h3>Delivery:</h3>
                </div>
             <div>
               <p className="mb-3">May 3, 2023: 8am - 12pm EST</p>
                <p>Check-in with the security guard at the back door. Use code #2802 to enter the lobby.</p></div>
               </div>
              </div>
       </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistoryDetails;
