import { Col, Row } from "antd";
import React from "react";
import StockProduct from "../../../commonComponents/stockProduct";
import TableList from "../../../commonComponents/tableList";
import {
  ColumnSupplier,
  SupplierData,
} from "../../../commonComponents/tableData";

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
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(
//       `selectedRowKeys: ${selectedRowKeys}`,
//       "selectedRows: ",
//       selectedRows
//     );
//   },
//   getCheckboxProps: (record) => ({
//     disabled: record.name === "Disabled User",

//     name: record.name,
//   }),
// };
const SuppliersTab = () => {
  //const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <>
      <div className="px-2 pb-4 Suppliers suppliersMain">
        <div className="py-4">
          <div className="suppliersItem">
            <div className="flex textBlue flex-wrap md:flex-nowrap ">
              <div className="pr-36 text-center mb-4 ">
                <h5>Business name</h5>
                <p>Beverage Dynamics</p>
              </div>
              <div className="pr-28 text-center mb-4">
                <h5>Address</h5>
                <p>743 East 19th Street , NY , NY 11923</p>
              </div>
              <div className="pr-24 text-center mb-4 ">
                <h5>Telephone</h5>
                <p>718.292.2012</p>
              </div>
              <div className="text-center">
                <h5>Division</h5>
                <p>Sapphire</p>
              </div>
            </div>
            <p className="f12 pt-1">www.Beveragedynamics.com</p>
          </div>
          <Row gutter={16} className=" mt-4 supplierTabList">
            <Col xs={24} md={12}>
              <div className="contactList">
                <h3>
                  Contacts{" "}
                  <button className="ml-1">
                    <img src="/images/create.svg" />
                  </button>
                </h3>
                <div className="w-full">
                  <div className="mb-2">
                    <p>General Manager</p>
                    <p>
                      Nina Athanosopolas 917-239-7482{" "}
                      <span>Nina@Beveragedynamics.com </span>
                    </p>
                  </div>
                  <div className="mb-2">
                    <p>Brand Ambassador </p>
                    <p>
                      Phil Granger 212-632-9482{" "}
                      <span>PhilG@Beveragedynamics.com </span>
                    </p>
                  </div>
                  <div className="mb-2">
                    <p>Regional Vice President </p>
                    <p>
                      Henry Evans 917-239-7482{" "}
                      <span>Henry@Beveragedynamics.com </span>
                    </p>
                  </div>
                  <div className="mb-2">
                    <p>National Manager </p>
                    <p>
                      Wanda Jones 212-632-9482{" "}
                      <span>Wjones@Beveragedynamics.com </span>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="contactList">
                <h3>
                  Notes{" "}
                  <button className="ml-1">
                    <img src="/images/create.svg" />
                  </button>
                </h3>
                <div className="w-full">
                  <div className="mb-2">
                    <p>General Manager</p>
                  </div>
                  <p className="mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <div className=" mt-4 supplierProductList">
            <Row gutter={[16, 16]}>
              {products.map((product, index) => (
                <Col key={index} className="gutter-row" xs={24} md={8}>
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

        <div className="supplierForm">
          <Row gutter={[24, 24]}>
            <Col className="gutter-row" xs={24} md={6}>
              <div className="md:w-[176px]  w-full">
                <label className="label2 pb-1">State</label>
                <select className="form_control f12 h32">
                  <option>All states</option>
                </select>
              </div>
            </Col>
            <Col className="gutter-row" xs={24} md={6}>
              <div className="md:w-[176px]  w-full">
                <label className="label2 pb-1">City</label>
                <select className="form_control f12 h32">
                  <option>All cities</option>
                </select>
              </div>
            </Col>
            <Col className="gutter-row" xs={24} md={6}>
              <div className="md:w-[228px] w-full">
                <label className="label2 pb-1">Division</label>
                <select className="form_control f12 h32">
                  <option>All divisons</option>
                </select>
              </div>
            </Col>
            <Col className="gutter-row" xs={24} md={6}>
              <div className="md:w-[228px] w-full ml-auto mr-0">
                <label className="label2 pb-1">Sort by</label>
                <select className="form_control h32 f12">
                  <option>A-Z</option>
                </select>
              </div>
            </Col>
          </Row>
        </div>

        <div className=" mt-4">
          <TableList data={SupplierData} columns={ColumnSupplier} />
        </div>
      </div>
    </>
  );
};

export default SuppliersTab;
