import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchFilter from "../search/searchFilter";
import StockProduct from "../../commonComponents/stockProduct";
import { Col, Row } from "antd";
import ContactView from "../experience/details/contactView";
import Goals from "../experience/details/goals";
import Notes from "../experience/details/notes";
import UpcomingEvents from "../experience/details/upcomingEvents";
import SupplierTopCard from "./supplierTopCard";
const products = [
  {
    productImg: "/images/p1.webp",
    productTitle: "Cabernet Sauvignon",
    productName: "Beer",
    productLocation: "USA, California",
    productDeal: "Special Offer",
    btnClassName: "btn-beer ",
    productCase: "5 cases",
    productAmount: "$19.99",
  },
  {
    productImg: "/images/p2.webp",
    productTitle: "Libby Wine",
    productName: "Wine",
    productLocation: "USA, Georgia",
    productDeal: "Best Deal",
    btnClassName: "btn-beer wine",
    productCase: "10 cases",
    productAmount: "$15.99",
  },
  {
    productImg: "/images/p2.webp",
    productTitle: "Libby Wine",
    productName: "Wine",
    productLocation: "USA, Georgia",
    productDeal: "Best Deal",
    btnClassName: "btn-beer wine",
    productCase: "10 cases",
    productAmount: "$15.99",
  },
  {
    productImg: "/images/p2.webp",
    productTitle: "Libby Wine",
    productName: "Wine",
    productLocation: "USA, Georgia",
    productDeal: "Best Deal",
    btnClassName: "btn-beer wine",
    productCase: "10 cases",
    productAmount: "$15.99",
  },
];
const SuppliersDetails = () => {
  const [toggleState2, setToggleState2] = useState("OrderHistory");
  const toggleTab2 = (index) => {
    setToggleState2(index);
  };
  return (
    <>
      <div className="suppliersMain">
        <div className="breadcrumb">
          <Link to="/order-history" className="flex items-center">
            <span>
              <img src="/images/home2.svg" />
            </span>
          </Link>
        </div>

        <div className="content w-full ">
          <div className="w-full ">
            <SupplierTopCard />
          </div>
          <div className="w-full mt-2">
            <div className="card pt-3">
              <div className="productTabArea supplierDetailsTabs">
                <div className="px-6">
                  <ul>
                    <li>
                      <Link
                        onClick={() => toggleTab2("PendingOrders")}
                        className={
                          toggleState2 === "PendingOrders" ? " active" : "  "
                        }
                      >
                        All Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => toggleTab2("OrderHistory")}
                        className={
                          toggleState2 === "OrderHistory" ? " active" : "  "
                        }
                      >
                        Supplier Details
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tabsSec pb-14">
                  <div
                    className={
                      toggleState2 === "PendingOrders"
                        ? "tabContent tabContentActive"
                        : "tabContent"
                    }
                  >
                    <div className="flex items-center justify-end  relative -top-6 px-6">
                      <div className="flex">
                        <div className="sortBy pr-6">
                          <select className="form_control">
                            <option>Spirit type (A-Z)</option>
                          </select>
                        </div>
                        <div className="filter">
                          <SearchFilter />
                        </div>
                      </div>
                    </div>
                    <div className="heading pb-6 mb-6 px-6 border-b">
                      <h3>Displaying All Products</h3>
                    </div>
                    <div className="px-6 ">
                      <Row gutter={[16]}>
                        {products.map((product, index) => (
                          <Col
                            key={index}
                            className="gutter-row"
                            xs={24}
                            md={12}
                            lg={8}
                          >
                            <StockProduct
                              key={index}
                              productImg={product.productImg}
                              productTitle={product.productTitle}
                              productName={product.productName}
                              productLocation={product.productLocation}
                              productDeal={product.productDeal}
                              btnClassName={product.btnClassName}
                              productCase={product.productCase}
                              productAmount={product.productAmount}
                            />
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </div>
                  <div
                    className={
                      toggleState2 === "OrderHistory"
                        ? "tabContent tabContentActive"
                        : "tabContent"
                    }
                  >
                    <div className="w-full px-3 ">
                      <ContactView />
                      <Goals />
                      <Notes />
                      <UpcomingEvents />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuppliersDetails;
