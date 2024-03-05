import { useState } from "react";
import { Col, Row } from 'antd';
import { Link } from "react-router-dom";
import DisplayProduct from "../../commonComponents/displayProduct";
import SearchFilter from "./searchFilter";
import Popup from "reactjs-popup";
import SelectFiled from "../../commonComponents/selectFiled";
const Search = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };

  const products = [
    {
      productImg: "/images/p7.webp",
      productName: "Don Julio Blanco",
      productLocation: "USA, Georgia",
      purchaseText: "Purchase 5 cases of 750ml",
      purchasePrice: "$44.99",
      productDeal: "Best Deal",
      checkboxId: "1",
      cashImg: "/images/cash.webp",
    },
    {
      productImg: "/images/p7.webp",
      productName: "Don Julio Blanco",
      productLocation: "USA, Georgia",
      purchaseText: "Purchase 5 cases of 750ml",
      purchasePrice: "$44.99",
      productDeal: "Best Deal",
      checkboxId: "2",
      cashImg:"/images/cash.webp"
    },
    {
      productImg: "/images/p7.webp",
      productName: "Don Julio Blanco",
      productLocation: "USA, Georgia",
      purchaseText: "Purchase 5 cases of 750ml",
      purchasePrice: "$44.99",
      productDeal: "Best Deal",
      checkboxId: "3",
      cashImg:"/images/cash.webp",
    }, {
      productImg: "/images/p7.webp",
      productName: "Don Julio Blanco",
      productLocation: "USA, Georgia",
      purchaseText: "Purchase 5 cases of 750ml",
      purchasePrice: "$44.99",
      productDeal: "Best Deal",
      checkboxId: "4",
      cashImg:"/images/cash.webp",
    },
  ];
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
      <div className='content orderSearch'>
     
        <Col className="filterProduct mb-5 flex items-center justify-between">
          <div>
            <div className="heading">
              <h3>Filter Products</h3>
            </div>
            <p>3 total filters applied: Price, Type, Category, Division </p>
            <Col className="filterTags ">
              <button className="ftagBtn mr-2">
                $12 - $24
                <img src="/images/close-circle.webp" />
              </button>
              <button className="ftagBtn mr-2">
                Spirits
                <img src="/images/close-circle.webp" />
              </button>
              <button className="ftagBtn mr-2">
                Tequila
                <img src="/images/close-circle.webp" />
              </button>
              <button className="ftagBtn mr-2">
                Coastal Pacific
                <img src="/images/close-circle.webp" />
              </button>
              <button className="ftagBtn mr-2">
                Emerald
                <img src="/images/close-circle.webp" />
              </button>
            </Col>
          </div>
          <div className=" searchFilterSec">
            <div className="filter" >
              <SearchFilter />
            </div>
            <Popup
              open={open}
              onClose={() => closeModal()}
              closeOnDocumentClick={false}
              className="selectedPopup"
              trigger={
                <button
                  className="selectedBtn mt-3 "
                  aria-describedby="popup-8"
                  onClick={() => setOpen((o) => !o)}
                >
                  Selected (4)
                </button>
              }
              modal
              nested
            >
              {(close) => (
                <div className="modal">
                  <button
                    className="close"
                    onClick={() => {
                      closeModal();
                      close();
                    }}
                  >
                    <img src="/images/close-circle.svg" />
                  </button>

                  <div className="popupContent">
                    <Row gutter={[16, 16]}  >
                      {products.map((product, index) => (
                        <Col key={index} className="gutter-row" xs={24} md={12}>
                          <DisplayProduct
                            productImg={product.productImg}
                            productName={product.productName}
                            productLocation={product.productLocation}
                            purchaseText={product.purchaseText}
                            purchasePrice={product.purchasePrice}
                            productDeal={product.productDeal}
                            checkboxId={product.checkboxId}
                          />
                        </Col>
                      ))}
                    </Row>
                    <Row className="w-full flex justify-center mt-8 popupBtn">
                      <Popup
                        open={open}
                        onClose={() => closeModal()}
                        closeOnDocumentClick={false}
                        className="comparePopup"
                        trigger={
                          <button
                            className="btnBg mr-4 "
                            aria-describedby="popup-8"
                            onClick={() => setOpen((o) => !o)}
                          >
                            Create an Experience
                          </button>
                        }
                        modal
                        nested
                      >
                        {(close) => (
                          <div className="modal">
                            <button
                              className="close"
                              onClick={() => {
                                closeModal();
                                close();
                              }}
                            >
                              <img src="/images/close-circle.svg" />
                            </button>

                            <div className="popupContent">
                              <h2>Save your experiences</h2>
                              <div className=" w-full mt-6 md:mt-10">
                                <div className="md:max-w-[378px] w-full mb-5">
                                  <label>Name the experiences</label>
                                  <input type="text" className="form_control" />
                                </div>
                                <div className="md:max-w-[378px] w-full mb-5">
                                  <label>Description</label>
                                  <textarea className="form_control"></textarea>
                                </div>
                                <div className="md:max-w-[378px] w-full ">
                                  <label>Choose customers</label>
                                   <SelectFiled/>
                                  <div className="w-full afterSelect mt-4">
                                    <div className="styled-input-container styled-input--square">
                                      <div className="styled-input-single">
                                        <input
                                          checked="checked"
                                          onChange={() => null}
                                          type="checkbox"
                                          name="fieldset-2"
                                          id="Cantina Mexico 65865"
                                        />
                                        <label htmlFor="checked">Cantina Mexico 65865</label>
                                      </div>
                                    </div>
                                    <div className="styled-input-container styled-input--square">
                                      <div className="styled-input-single">
                                        <input
                                          checked="checked"
                                          onChange={() => null}
                                          type="checkbox"
                                          name="fieldset-2"
                                          id="Flannery’s Bar 34567"
                                        />
                                        <label htmlFor="checked">Flannery’s Bar 34567</label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex justify-center w-full popupBtn">
                                  <button className="btnBorder mr-4">Save</button>
                                  <button className="btnBorder mr-4" onClick={() => {
                                    closeModal(); close();
                                  }}>Cancel</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Popup>
                      <button className="btnBorder ">Compare items</button>
                    </Row>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </Col>
        <Row gutter={[16, 16]}  >
          {products.map((product, index) => (
            <Col key={index} className="gutter-row" xs={24} md={12} lg={8}>
              <DisplayProduct
                productImg={product.productImg}
                productName={product.productName}
                productLocation={product.productLocation}
                purchaseText={product.purchaseText}
                purchasePrice={product.purchasePrice}
                productDeal={product.productDeal}
                checkboxId={product.checkboxId}
                cashImg={product.cashImg}
              />
            </Col>
          ))}
        </Row>
      </div>



    </>
  );
};

export default Search;
