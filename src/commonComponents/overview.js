import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Overview = () => {
  const [toggleState3, setToggleState3] = useState("750ML");
  const toggleTab3 = (index) => {
    setToggleState3(index);
  };

  return (
    <>
      <div className="tabsSec pt-7">
        <div className="flex w-full justify-between">
          <div className="w-full">
            <div className="tasteSec flex mb-8">
              <div className="div pr-16">
                <div className="overDetail">
                  <label>Country</label>
                  <p>Ireland</p>
                </div>
              </div>
              <div className="div pr-16">
                <div className="overDetail">
                  <label>Region</label>
                  <p>Dublin</p>
                </div>
              </div>
              <div className="div pr-16">
                <div className="overDetail">
                  <label>Vintage</label>
                  <p>2012</p>
                </div>
              </div>
              <div className="div ">
                <div className="overDetail">
                  <label>Supplier</label>
                  <p>Jim Beam Brands</p>
                </div>
              </div>
            </div>

            <div className="w-full mb-5">
              <div className="headingsearchDetail flex items-center gap-3 mb-4">
                <label>Taste</label>
                <div className="flex gap-4">
                  <img src="/images/image76.svg" />
                  <img src="/images/image77.svg" />
                  <img src="/images/image78.svg" />
                </div>
              </div>
              <p>
                This wine features flavors of apple, pear, and stone fruits with
                hints of citrus and tropical notes. Toasted sweet oak, vanilla
                cream, and baking spice complement a rich, round mouthfeel with
                balanced acidity and a touch of minerality on the finish.
              </p>
            </div>
            <div className="w-full mb-5">
              <div className="headingsearchDetail flex items-center gap-3 mb-4">
                <label>Aroma</label>
                <div className="flex gap-4">
                  <img src="/images/image73.svg" />
                  <img src="/images/image74.svg" />
                </div>
              </div>
              <p>
                This wine features flavors of apple, pear, and stone fruits with
                hints of citrus and tropical notes. Toasted sweet oak, vanilla
                cream, and baking spice complement a rich, round mouthfeel with
                balanced acidity and a touch of minerality on the finish.
              </p>
            </div>
            <div className="w-full mb-5">
              <div className="headingsearchDetail flex items-center gap-3 mb-4">
                <label>Food Pairing</label>
                <div className="flex gap-4">
                  <img src="/images/fish.svg" />
                  <img src="/images/game-icons_salmon.svg" />
                  <img src="/images/emojione-monotone.svg" />
                </div>
              </div>
              <p>
                Enjoy this food-friendly Chardonnay with arugula salad with
                grilled corn, roasted red peppers, and feta cheese; corn chowder
                or New England clam chowder; Dungeness crab with drawn butter;
                chicken piccata; or risotto with porcini mushrooms.
              </p>
            </div>
            <div className="w-full mb-5">
              <div className="headingsearchDetail mb-2">
                <label>The Story</label>
              </div>
              <p>
                Isabelle Simi learned quickly that the only way to crush the
                competition was to crush grapes. Over the course of 70 years,
                she led this winery from the brink of collapse during
                Prohibition to the California winemaking limelight.
              </p>
              <p>
                Success is in SIMI’s roots. Every sip won’t just teach you about
                a boss who never settled for anything less than she was worth.
                It’ll inspire you to do the same.
              </p>
            </div>
            <div className="mt-12 pricingCalculator">
              <h3>Available Sizes</h3>
              <div className="pricingTab">
                <ul>
                  <li>
                    <Link
                      onClick={() => toggleTab3("187ML")}
                      className={toggleState3 === "187ML" ? " active" : "  "}
                    >
                      187 ML
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => toggleTab3("375ML")}
                      className={toggleState3 === "375ML" ? " active" : "  "}
                    >
                      375 ML
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => toggleTab3("750ML")}
                      className={toggleState3 === "750ML" ? " active" : "  "}
                    >
                      750 ML
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => toggleTab3("1L")}
                      className={toggleState3 === "1L" ? " active" : "  "}
                    >
                      1.0 L
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => toggleTab3("1.5L")}
                      className={toggleState3 === "1.5L" ? " active" : "  "}
                    >
                      1.5 L
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => toggleTab3("3L")}
                      className={toggleState3 === "3L" ? " active" : "  "}
                    >
                      3.0 L
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tabArea">
              <div
                className={
                  toggleState3 === "187ML"
                    ? "tabContent tabContentActive"
                    : "tabContent"
                }
              >
                187ML
              </div>
              <div
                className={
                  toggleState3 === "375ML"
                    ? "tabContent tabContentActive"
                    : "tabContent"
                }
              >
                375ML
              </div>

              <div
                className={
                  toggleState3 === "750ML"
                    ? "tabContent tabContentActive"
                    : "tabContent"
                }
              >
                <div className="w-full">
                  <div className="discountChart mt-8">
                    <label className="flex items-center">
                      <img src="/images/group.webp" className="mr-2" />
                      Discount Chart
                    </label>
                    <ul className="mt-3">
                      <li>July</li>
                      <li className="active">
                        <span>Current </span>May
                      </li>
                      <li>June</li>
                    </ul>
                  </div>
                  <div className="frontLine my-6 flex justify-between">
                    <div className=" mt-1 text-center ">
                      <h3>Front Line Prices</h3>
                      <div className="w-auto flex gap-4 justify-center mt-2 ">
                        <p>Bottle cost: $9.00</p>
                        <p>Case cost: $108.00</p>
                      </div>
                    </div>
                    <div className=" mt-1 text-center ">
                      <h3>Best Price on 3 cases </h3>
                      <div className="w-auto flex gap-4 justify-center  mt-2 ">
                        <p>Bottle cost: $9.00</p>
                        <p>Case cost: $108.00</p>
                        <p>Case cost: $108.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="selectQuantity  ">
                    <div className="overflow-x-auto w-full whitespace-nowrap mt-1">
                      <table className="table-fixed table  w-full text-center">
                        <thead className="text-center">
                          <tr>
                            <th className="w-44">Select Quantity:</th>

                            <th>
                              <button className="btnCase">1 case</button>
                            </th>
                            <th>
                              <button className="btnCase">3 cases</button>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Bottle cost</td>
                            <td>$12.67</td>
                            <td>$12.00</td>
                          </tr>
                          <tr>
                            <td>Case cost</td>
                            <td>$12.67</td>
                            <td>$12.00</td>
                          </tr>
                          <tr>
                            <td>Discount</td>
                            <td>$12.67</td>
                            <td>$12.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* <div className="btnTop flex w-full mt-16 justify-center "></div> */}
                  </div>
                </div>
              </div>
              <div
                className={
                  toggleState3 === "1L"
                    ? "tabContent tabContentActive"
                    : "tabContent"
                }
              >
                1L
              </div>
              <div
                className={
                  toggleState3 === "1.5L"
                    ? "tabContent tabContentActive"
                    : "tabContent"
                }
              >
                1.L
              </div>
              <div
                className={
                  toggleState3 === "3L"
                    ? "tabContent tabContentActive"
                    : "tabContent"
                }
              >
                3L
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
