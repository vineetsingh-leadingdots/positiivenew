import { useState } from "react";
import { Col, Row } from 'antd';
import DisplayProduct from "../../commonComponents/displayProduct";
import SearchFilter from "./searchFilter";

const Search = () => {
  const products = [
    {
      productImg: "/images/p7.webp",
      productName: "Don Julio Blanco",
      productLocation: "USA, Georgia",
      purchaseText: "Purchase 5 cases of 750ml",
      purchasePrice: "$44.99",
      productDeal: "Best Deal",
      checkboxId:"1"
    },
    {
      productImg: "/images/p7.webp",
      productName: "Don Julio Blanco",
      productLocation: "USA, Georgia",
      purchaseText: "Purchase 5 cases of 750ml",
      purchasePrice: "$44.99",
      productDeal: "Best Deal",
      checkboxId:"2"
    },
     {
      productImg: "/images/p7.webp",
      productName: "Don Julio Blanco",
      productLocation: "USA, Georgia",
      purchaseText: "Purchase 5 cases of 750ml",
      purchasePrice: "$44.99",
      productDeal: "Best Deal",
      checkboxId:"3"
    },   {
      productImg: "/images/p7.webp",
      productName: "Don Julio Blanco",
      productLocation: "USA, Georgia",
      purchaseText: "Purchase 5 cases of 750ml",
      purchasePrice: "$44.99",
      productDeal: "Best Deal",
      checkboxId:"4"
    },   {
      productImg: "/images/p7.webp",
      productName: "Don Julio Blanco",
      productLocation: "USA, Georgia",
      purchaseText: "Purchase 5 cases of 750ml",
      purchasePrice: "$44.99",
      productDeal: "Best Deal",
      checkboxId:"5"
    },
  ];
  return (
    <>
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
          <div className="flex gap-1 mt-4 md:mt-0 md:gap-0 md:flex-col items-center">
            <div className="filter" >
              <SearchFilter />
            </div>
            {/* <Popup
                open={open}
                onClose={() => closeModal()}
                closeOnDocumentClick={false}
                className="selectedPopup"
                trigger={
                  <button
                    className="selectedBtn md:mt-[14px] "
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
                      <div className="flex flex-wrap ">
                        <div className="md:w-1/2 flex w-full md:pr-4 mb-4">
                          <div className="displayProduct">
                            <div className="checkBoxSec">
                              <div className="styled-input-container styled-input--square">
                                <div className="styled-input-single">
                                  <input
                                    type="checkbox"
                                    name="fieldset-2"
                                    id="tequila22"
                                  />
                                  <label htmlFor="tequila22" />
                                </div>
                              </div>
                            </div>
                            <div className="stockList">
                              <div className="stockImage">
                                <img src="/images/p6.webp" />
                              </div>
                              <div className="stockContent">
                                <h3>Some Tequila Name</h3>
                                <div className="flex justify-end items-baseline pt-10 pr-4">
                                  <p>USA, Georgia</p>
                                </div>
                              </div>
                            </div>
                            <div className="deal_card">
                              <div className="dealLeft">
                                <h4>
                                  Best Deal <img src="/images/cash.webp" />
                                </h4>
                                <p>Purchase 5 cases of 750ml</p>
                              </div>
                              <div className="priceDiv">
                                <h5>
                                  $44.99<span>per case</span>
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-1/2 flex w-full mb-4">
                          <div className="displayProduct">
                            <div className="checkBoxSec">
                              <div className="styled-input-container styled-input--square">
                                <div className="styled-input-single">
                                  <input
                                    type="checkbox"
                                    name="fieldset-2"
                                    id="blanco22"
                                  />
                                  <label htmlFor="blanco22" />
                                </div>
                              </div>
                            </div>
                            <div className="stockList">
                              <div className="stockImage">
                                <img src="/images/p7.webp" />
                              </div>
                              <div className="stockContent">
                                <h3>Don Julio Blanco</h3>
                                <div className="flex justify-end items-baseline pt-10 pr-4">
                                  <p>USA, Georgia</p>
                                </div>
                              </div>
                            </div>
                            <div className="deal_card">
                              <div className="dealLeft">
                                <h4>
                                  Best Deal <img src="/images/cash.webp" />
                                </h4>
                                <p>Purchase 5 cases of 750ml</p>
                              </div>
                              <div className="priceDiv">
                                <h5>
                                  $44.99<span>per case</span>
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-1/2 flex w-full md:pr-4  mb-4">
                          <div className="displayProduct">
                            <div className="checkBoxSec">
                              <div className="styled-input-container styled-input--square">
                                <div className="styled-input-single">
                                  <input
                                    type="checkbox"
                                    name="fieldset-2"
                                    id="tequila223"
                                  />
                                  <label htmlFor="tequila223" />
                                </div>
                              </div>
                            </div>
                            <div className="stockList">
                              <div className="stockImage">
                                <img src="/images/p6.webp" />
                              </div>
                              <div className="stockContent">
                                <h3>Some Tequila Name</h3>
                                <div className="flex justify-end items-baseline pt-10 pr-4">
                                  <p>USA, Georgia</p>
                                </div>
                              </div>
                            </div>
                            <div className="deal_card">
                              <div className="dealLeft">
                                <h4>
                                  Best Deal <img src="/images/cash.webp" />
                                </h4>
                                <p>Purchase 5 cases of 750ml</p>
                              </div>
                              <div className="priceDiv">
                                <h5>
                                  $44.99<span>per case</span>
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-1/2 flex w-full mb-4">
                          <div className="displayProduct">
                            <div className="checkBoxSec">
                              <div className="styled-input-container styled-input--square">
                                <div className="styled-input-single">
                                  <input
                                    type="checkbox"
                                    name="fieldset-2"
                                    id="tequila111"
                                  />
                                  <label htmlFor="tequila111" />
                                </div>
                              </div>
                            </div>
                            <div className="stockList">
                              <div className="stockImage">
                                <img src="/images/p6.webp" />
                              </div>
                              <div className="stockContent">
                                <h3>Some Tequila Name</h3>
                                <div className="flex justify-end items-baseline pt-10 pr-4">
                                  <p>USA, Georgia</p>
                                </div>
                              </div>
                            </div>
                            <div className="deal_card">
                              <div className="dealLeft">
                                <h4>
                                  Best Deal <img src="/images/cash.webp" />
                                </h4>
                                <p>Purchase 5 cases of 750ml</p>
                              </div>
                              <div className="priceDiv">
                                <h5>
                                  $44.99<span>per case</span>
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full flex justify-center md:mt-8 mt-4  md:flex-row flex-col gap-2 md:gap-0">
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
                                      <SelectBtn />
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
                                    <div className="flex justify-center w-full md:mt-10 mt-6 flex-col gap-2 md:gap-0 md:flex-row">
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
                          <button className="btnBorder mr-4">Compare items</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Popup> */}
          </div>
        </Col>
        <Row gutter={[16, 24]}  >
        {products.map((product, index) => (
        <Col key={index} className="gutter-row" xs={24} lg={8}>
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
      </div>



    </>
  );
};

export default Search;
