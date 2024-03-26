import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const ViewExperence = () => {
  // const [toggleState2, setToggleState2] = useState("Overview");
  // const toggleTab2 = (index) => {
  //   setToggleState2(index);
  // };
  // const [toggleState3, setToggleState3] = useState("750ML");
  // const toggleTab3 = (index) => {
  //   setToggleState3(index);
  // };

  // const [toggleState4, setToggleState4] = useState("galleryAll");
  // const toggleTab4 = (index) => {
  //   setToggleState4(index);
  // };
  const [expandShow, setExpandShow] = useState(false);
  const expandClick = () => setExpandShow(!expandShow);
  return (
    <>
     
      <div className="breadcrumb">
        <Link to="/order-history" className="flex items-center">
          <span>
            <img src="/images/sparkles.svg" className="h-4" />
          </span>
          <span className="mx-3">
            <img src="/images/line.webp" />
          </span>
          Your experiences
          <span className="mx-3">
            <img src="/images/line.webp" />
          </span>
          Sprint Wine & Beer
        </Link>
      </div>
      <div className="headingH">
        <h2>Experiences</h2>
      </div>
      <div className="content w-full viewExperence">
        <div className="w-full " >
          <div className="p-6 ligthGary" >
            <div className="flex w-full justify-end">
              <button className="deleteExperience"><img src="/images/trash.svg" />Delete experience</button>
            </div>
            <div className="w-full">
              <h2>New Gin</h2>
              <div className="flex items-center newGinImage">
                <div className="image mr-[14px]">
                  <img src="/images/100_1.webp" className="w-[28px] h-[28px] rounded-full" />
                </div>
                <p>Sent Mar 10, 2023, by Mitch Cho</p>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 ">
              <div className="md:w-1/3 w-fullflex md:pr-4 mb-6">
                <Link to="/experience/details" className="displayProduct">
                  <div className="checkBoxSec">
                    <div className="styled-input-container styled-input--square">
                      <div className="styled-input-single">
                        <input
                          type="checkbox"
                          name="fieldset-2"
                          id="tequila"
                        />
                        {/* <label for="tequila" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="stockList">
                    <div className="stockImage">
                      <img src="/images/whale.webp" />
                    </div>
                    <div className="stockContent">
                      <h3>Gray Whale Gin</h3>
                    </div>
                  </div>
                  <div className="deal_card">
                    <div className="dealLeft">
                      <h4>
                        Best Deal
                      </h4>
                      <p>Purchase 10 cases</p>
                      <span>(12 bottles per case)</span>
                    </div>
                    <div className="savings">
                      <img src="/images/dollar.svg" />   <p> 62% savings</p>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="tasteSec ">
                      <div className="div pr-14">
                        <label>Taste</label>
                        <div className="flex">
                          <img
                            src="/images/meadowsweet1.svg"
                            className="mr-4"
                          />
                          <img
                            src="/images/orientalgrapefruit.svg"

                          />
                        </div>
                      </div>
                      <div className="div pr-14">
                        <label>Nose</label>
                        <div className="flex">
                          <img
                            src="/images/kaffirlime1.svg"
                            className="mr-4"
                          />
                          <img
                            src="/images/angelicaroot1.svg"
                            className="mr-4"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between flex-wrap">
                      <div className="w-1/2 ">
                        <div className="overDetail">
                          <label>Country</label>
                          <p>Ireland</p>
                        </div>
                      </div>
                      <div className="w-1/2">
                        <div className="overDetail">
                          <label>Region</label>
                          <p>Dublin</p>
                        </div>
                      </div>
                      <div className="w-1/2">
                        <div className="overDetail">
                          <label>Vintage</label>
                          <p>2012</p>
                        </div>
                      </div>
                      <div className="w-1/2">
                        <div className="overDetail">
                          <label>Supplier</label>
                          <p>Pernod Ricard</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={expandShow ? "expandConent active w-full" : "expandConent w-full"}>
                    <label>Description</label>
                    <p>
                      At night on ponce IPA. Three Taverns 3 Craft beers.
                      What you are about to drink. A night on ponce IPA
                      grafts on American ale yeast on to the same malts and
                      hops used in a night in brussels IPA. The result is an
                      entirely...
                      <button onClick={expandClick} className={expandShow ? "expandBtn active" : "expandBtn"}><img src="/images/fi_chevron-down.svg" /></button>
                    </p>
                  </div>
                </Link>
              </div>
             
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ViewExperence;
