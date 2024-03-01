import { useState } from "react";
import { Link } from "react-router-dom";
import CartPopPup from "./cartPoup";
import UploadPopUp from "./uploadPopUp";

const SearchDetail = () => {
  const [toggleState2, setToggleState2] = useState("Overview");
  const toggleTab2 = (index) => {
    setToggleState2(index);
  };
  const [toggleState3, setToggleState3] = useState("750ML");
  const toggleTab3 = (index) => {
    setToggleState3(index);
  };

  const [toggleState4, setToggleState4] = useState("galleryAll");
  const toggleTab4 = (index) => {
    setToggleState4(index);
  };

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
      <div className="content w-full">  
        <div className="w-full orderSearch" >
          <div className=" md:p-6 p-2 card ">
            <div className="flex items-center justify-between ">
              <div className="searhProductDe flex justify-between w-full">
                <div className="stockList">
                  <div className="stockImage">
                    <img src="/images/p6.webp" />
                  </div>
                  <div className="stockContent">
                    <h3>Jameson Irish Whiskey</h3>
                    <Link>www.jamesonwhiskey.com</Link>
                    <div className="btnGroup flex">
                      <button className="smallBtn mr-4">
                        <img src="/images/share.webp" />
                      </button>
                      <button className="smallBtn">
                        <img src="/images/heart-circle.webp" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="searhProductDeRight">
                  <div className="btnTop flex ml-auto justify-end mb-4">
                    <CartPopPup />
                  </div>
                  <div className="savingsSec">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="32"
                      viewBox="0 0 27 32"
                      fill="none"
                      className="mr-[6px]"
                    >
                      <path
                        d="M3.11629 15.572C3.11629 10.5229 6.83849 6.33593 11.6823 5.58218V7.78628L17.9101 3.89262L11.6811 0V2.43355C5.11248 3.21126 0 8.802 0 15.5722C0 20.3307 2.53057 24.4962 6.3053 26.8276L9.36016 24.9213C5.69666 23.3939 3.11629 19.7809 3.11629 15.572Z"
                        fill="white"
                      />
                      <path
                        d="M20.1703 4.31812L17.1158 6.22721C20.7807 7.74874 23.3612 11.3626 23.3612 15.5718C23.3612 20.6251 19.6397 24.8093 14.7957 25.5641V23.3589L8.56689 27.2541L14.7957 31.1464V28.7091C21.364 27.934 26.4763 22.3439 26.4763 15.5718C26.4765 10.8152 23.9459 6.65003 20.1703 4.31812Z"
                        fill="white"
                      />
                      <path
                        d="M13.9889 22.3818V20.6806C15.906 20.3464 16.9597 19.0787 16.9597 17.5936C16.9597 16.0917 16.1591 15.1751 14.1749 14.4723C12.755 13.9383 12.1702 13.5884 12.1702 13.0379C12.1702 12.5702 12.5201 12.1029 13.6066 12.1029C14.807 12.1029 15.5737 12.4854 16.0092 12.6709L16.4916 10.7847C15.9435 10.5183 15.1908 10.2852 14.0736 10.2358V8.7666H12.4374V10.3513C10.6544 10.7005 9.6187 11.8531 9.6187 13.3209C9.6187 14.9393 10.8375 15.7753 12.6248 16.3746C13.8575 16.7923 14.3912 17.1928 14.3912 17.8278C14.3912 18.4945 13.7416 18.8615 12.7906 18.8615C11.7064 18.8615 10.7213 18.5111 10.0215 18.1274L9.521 20.08C10.1529 20.4476 11.2391 20.7472 12.3561 20.7968V22.382L13.9889 22.3818Z"
                        fill="white"
                      />
                    </svg>
                    69% savings
                    <div className="line"></div>
                    Purchase 6 cases (12 bottles per case)
                  </div>

                </div>
              </div>

            </div>
            <div className="pt-6 pb-2">
              <h3 className="text-base text-blue">Sold by Southern wine and Spirits of New York</h3>
            </div>
            <div className="productTabArea">
              <ul>
                <li>
                  <Link
                    onClick={() => toggleTab2("Overview")}
                    className={toggleState2 === "Overview" ? " active" : "  "}
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => toggleTab2("Awards")}
                    className={toggleState2 === "Awards" ? " active" : "  "}
                  >
                    Awards/Ratings
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => toggleTab2("Promotions")}
                    className={toggleState2 === "Promotions" ? " active" : "  "}
                  >
                    Promotions
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => toggleTab2("Marketing")}
                    className={toggleState2 === "Marketing" ? " active" : "  "}
                  >
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => toggleTab2("PointSale")}
                    className={toggleState2 === "PointSale" ? " active" : "  "}
                  >
                    Point of Sale
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => toggleTab2("Distributor")}
                    className={
                      toggleState2 === "Distributor" ? " active" : "  "
                    }
                  >
                    Distributor Info
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => toggleTab2("Gallery")}
                    className={toggleState2 === "Gallery" ? " active" : "  "}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => toggleTab2("TechSheet")}
                    className={toggleState2 === "TechSheet" ? " active" : "  "}
                  >
                    Tech Sheet
                  </Link>
                </li>
              </ul>
              <div className="tabsSec pt-7">
                <div
                  className={
                    toggleState2 === "Overview"
                      ? "tabContent tabContentActive"
                      : "tabContent"
                  }
                >
                 <div className="flex w-full justify-between">
                    <div className="w-full">
                      <div className="tasteSec flex mb-8">                       
                        <div className="div md:pr-16">
                          <div className="overDetail">
                            <label>Country</label>
                            <p>Ireland</p>
                          </div>
                        </div>
                        <div className="div md:pr-16">
                          <div className="overDetail">
                            <label>Region</label>
                            <p>Dublin</p>
                          </div>
                        </div>
                        <div className="div md:pr-16">
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
                          <img src="/images/image76.svg"/>
                          <img src="/images/image77.svg"/>
                          <img src="/images/image78.svg"/>
                        </div>
                        </div>
                        <p>This wine features flavors of apple, pear, and stone fruits with hints of citrus and tropical notes. Toasted sweet oak, vanilla cream, and baking spice complement a rich, round mouthfeel with balanced acidity and a touch of minerality on the finish.</p>
                      </div>
                      <div className="w-full mb-5">
                        <div className="headingsearchDetail flex items-center gap-3 mb-4">
                        <label>Aroma</label>
                        <div className="flex gap-4">
                          <img src="/images/image73.svg"/>
                          <img src="/images/image74.svg"/>
                        </div>
                        </div>
                       <p>This wine features flavors of apple, pear, and stone fruits with hints of citrus and tropical notes. Toasted sweet oak, vanilla cream, and baking spice complement a rich, round mouthfeel with balanced acidity and a touch of minerality on the finish.</p>
                      </div>
                      <div className="w-full mb-5">
                        <div className="headingsearchDetail flex items-center gap-3 mb-4">
                        <label>Food Pairing</label>
                        <div className="flex gap-4">
                          <img src="/images/fish.svg"/>
                          <img src="/images/game-icons_salmon.svg"/>
                          <img src="/images/emojione-monotone.svg"/>
                        </div>
                        </div>
                     <p>Enjoy this food-friendly Chardonnay with arugula salad with grilled corn, roasted red peppers, and feta cheese; corn chowder or New England clam chowder; Dungeness crab with drawn butter; chicken piccata; or risotto with porcini mushrooms.</p>
                      </div>
                      <div className="w-full mb-5">
                        <div className="headingsearchDetail mb-2">
                        <label>The Story</label>
                        
                        </div>
                   <p>Isabelle Simi learned quickly that the only way to crush the competition was to crush grapes. Over the course of 70 years, she led this winery from the brink of collapse during Prohibition to the California winemaking limelight.</p>
                     <p>Success is in SIMI’s roots. Every sip won’t just teach you about a boss who never settled for anything less than she was worth. It’ll inspire you to do the same.</p>
                      </div>

                  
                      <div className="mt-12 pricingCalculator">
                        <h3>Available Sizes</h3>
                        <div className="pricingTab">
                          <ul>
                            <li>
                              <Link
                                onClick={() => toggleTab3("187ML")}
                                className={
                                  toggleState3 === "187ML" ? " active" : "  "
                                }
                              >
                                187 ML
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={() => toggleTab3("375ML")}
                                className={
                                  toggleState3 === "375ML" ? " active" : "  "
                                }
                              >
                                375 ML
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={() => toggleTab3("750ML")}
                                className={
                                  toggleState3 === "750ML" ? " active" : "  "
                                }
                              >
                                750 ML
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={() => toggleTab3("1L")}
                                className={
                                  toggleState3 === "1L" ? " active" : "  "
                                }
                              >
                                1.0 L
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={() => toggleTab3("1.5L")}
                                className={
                                  toggleState3 === "1.5L" ? " active" : "  "
                                }
                              >
                                1.5 L
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={() => toggleTab3("3L")}
                                className={
                                  toggleState3 === "3L" ? " active" : "  "
                                }
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
                              {/* <div className="selectInside p-2 ">
                          <p>Select Quantity:</p>
                          <div className="selectQuantity">
                            <button className="btnCase">
                            2 cases
                            </button>
                            <button className="btnCase">
                            2 cases
                            </button>
                            <button className="btnCase">
                            2 cases
                            </button>
                            <button className="btnCase">
                            2 cases
                            </button>
                          
                          </div>
                         </div> */}
                              <div className="overflow-x-auto w-full whitespace-nowrap mt-1">
                                <table className="table-fixed table  w-full text-center">
                                  <thead className="text-center">
                                    <tr>
                                      <th className="w-44">Select Quantity:</th>
                                    
                                      <th>
                                        <button className="btnCase">
                                          1 case
                                        </button>
                                      </th>
                                      <th>
                                        <button className="btnCase">
                                          3 cases
                                        </button>
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

                              <div className="btnTop flex w-full mt-16 justify-center ">
                             <CartPopPup />
                            </div>
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
                <div
                  className={
                    toggleState2 === "Awards"
                      ? "tabContent tabContentActive"
                      : "tabContent"
                  }
                >
                  <div className="w-full awardArea">
                    <div className="w-full flex justify-center md:gap-14 gap-4 awardBox">
                      <div className="awardImage">
                        <img src="/images/award3.webp" />
                      </div>
                      <div className="awardImage">
                        <img src="/images/award2.webp" />
                      </div>
                      <div className="awardImage">
                        <img src="/images/award.webp" />
                      </div>
                    </div>
                    <div className="w-full mt-11 awardContent">
                      <h2>Accolades from the experts- </h2>
                      <p>“ arguably the best hand made bourbon of all time”- Paul Pacult</p>
                      <p>“ There is not better bourbon, period ! ”- Anthony Dias Blue</p>
                    </div>
                  </div>

                </div>
                <div
                  className={
                    toggleState2 === "Promotions"
                      ? "tabContent tabContentActive"
                      : "tabContent"
                  }
                >
          <div className="flex flex-col gap-4">
          <p  >Hey everyone, Just wanted to pass along some great information, </p>
                  <p>I hope you all had a fantastic Holiday season and enjoyed some much deserved rest and relaxation this past weekend.</p>
                  <p>'m happy to share some great news!
JAJA Tequila was featured in Wine Enthusiast's Top 100 Spirits receiving 93 points. This review comes just months after being named 2023 Tequila of the Year at the London Spirits Competition.
I have attached the full article (page 5) and a sell sheet for your buyers.</p>
<p>Thank you for all the hard work and support out in the field.</p>
<p>Cheers,<br/>KC</p>

          </div>
                </div>
                <div
                  className={
                    toggleState2 === "Marketing"
                      ? "tabContent tabContentActive"
                      : "tabContent"
                  }
                >
                  <div className="marketingArea">
                    <div className="w-full marketingBox">
                      <div className="w-[271px]">
                        <h4>Makers Mark Story</h4>
                        <div className="marketImage" >
                          <img src="/images/image58.webp" />
                          <Link className="iconCard" to="/">
                            <img src="/images/image57.webp" />
                          </Link>
                        </div>
                      </div>
                      <div className="w-[271px]">
                        <h4>How to make the perfect Manhattan</h4>
                        <div className="marketImage" >
                          <img src="/images/image60.webp" />
                          <Link className="iconCard" to="/">
                            <img src="/images/image63.webp" />
                          </Link>
                        </div>
                      </div>
                      <div className="w-[271px]">
                        <h4>Cocktail Ideas with Makers</h4>
                        <div className="marketImage" >
                          <img src="/images/image61.webp" />
                          <Link className="iconCard" to="/">
                            <img src="/images/image57.webp" />
                          </Link>
                        </div>
                      </div>
                      <div className="w-[271px]">
                        <h4>Makers Party in Brooklyn</h4>
                        <div className="marketImage" >
                          <img src="/images/image59.webp" />
                          <Link className="iconCard" to="/">
                            <img src="/images/image57.webp" />
                          </Link>
                        </div>
                      </div>
                      <div className="w-[271px]">
                        <h4>More cocktail Ideas</h4>
                        <div className="marketImage" >
                          <img src="/images/image68.webp" />
                          <Link className="iconCard" to="/">
                            <img src="/images/image65.webp" />
                          </Link>
                        </div>
                      </div>
                      <div className="w-[271px]">
                        <h4>Makers Party in NYC</h4>
                        <div className="marketImage" >
                          <img src="/images/image66.webp" />
                          <Link className="iconCard" to="/">
                            <img src="/images/image64.webp" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    toggleState2 === "PointSale"
                      ? "tabContent tabContentActive"
                      : "tabContent"
                  }
                >
                  <div className="pointSaleArea">
                    <div className="saleBox flex  flex-wrap">
                      <div className="md:w-1/3  xl:w-1/4 w-full md:pr-4 xl:pr-9 mb-4 xl:mb-9">
                        <div className="pointaleItem">
                          <div className="pointImg">
                            <img src="/images/image53.webp" />
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/3  xl:w-1/4 w-full md:pr-4 xl:pr-9 mb-4 xl:mb-9">
                        <div className="pointaleItem">
                          <div className="pointImg">
                            <img src="/images/image54.webp" />
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/3  xl:w-1/4 w-full md:pr-0 lg:pr-0 xl:pr-9 mb-4 xl:mb-9">
                        <div className="pointaleItem">
                          <div className="pointImg">
                            <img src="/images/image55.webp" />
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/3  xl:w-1/4 w-full xl:mb-9 mb-4 md:pr-4 lg:pr-4 xl:pr-0" >
                        <div className="pointaleItem">
                          <div className="pointImg">
                            <img src="/images/image56.webp" />
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/3 w-full md:pr-4 xl:pr-9 mb-4 xl:mb-9">
                        <div className="pointaleItem">
                          <div className="pointImg">
                            <img src="/images/image74.webp" />
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/3 w-full md:pr-4 xl:pr-9 lg:pr-0 mb-4 xl:mb-9" >
                        <div className="pointaleItem">
                          <div className="pointImg">
                            <img src="/images/image70.webp" />
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/3 w-full xl:mb-9 mb-4 md:pr-4 lg:pr-4 xl:pr-0" >
                        <div className="pointaleItem">
                          <div className="pointImg">
                            <img src="/images/image71.webp" />
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/3  xl:w-1/4 w-full  md:pr-4 xl:pr-9  xl:mb-9 mb-4">
                        <div className="pointaleItem">
                          <div className="pointImg">
                            <img src="/images/image73.webp" />
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/3  xl:w-1/4 w-full md:pr-4 lg:pr-0 xl:pr-9 mb-4 xl:mb-9">
                        <div className="pointaleItem">
                          <div className="pointImg">
                            <img src="/images/image72.webp" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    toggleState2 === "Distributor"
                      ? "tabContent tabContentActive"
                      : "tabContent"
                  }
                >
                  <div className="flex w-full justify-between">
                    Distributor Info
                  </div>
                </div>
                <div
                  className={
                    toggleState2 === "Gallery"
                      ? "tabContent tabContentActive"
                      : "tabContent"
                  }
                >
                  <div className=" md:px-[10px]">
                    <div className="flex w-full justify-end">
                      <div className="sortBy">
                        <select className="form_control"><option>Most recent</option></select>
                      </div>
                    </div>
                    <div className="galleryTab">
                      <ul>
                        <li>
                          <Link
                            onClick={() => toggleTab4("galleryAll")}
                            className={
                              toggleState4 === "galleryAll" ? " active" : "  "
                            }
                          >
                            All
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => toggleTab4("Favorites")}
                            className={
                              toggleState4 === "Favorites" ? " active" : "  "
                            }
                          >
                           Favorites
                          </Link>
                        </li>
                      </ul>
                      <div className="tabArea">
                        <div
                          className={
                            toggleState4 === "galleryAll"
                              ? "tabContent tabContentActive"
                              : "tabContent"
                          }
                        >
                          <div className="mt-9 gallerySec flex flex-wrap ">
                          <div className="md:w-1/3  xl:w-1/4 w-full md:pr-4  xl:pr-9 mb-4 md:mb-9">
                              <div className="galleryItem ">
                                <div className="galleryImage">
                                  <img src="/images/image69.webp" />
                                  <div className="video">
                                    <img src="/images/play.webp" />
                                  </div>
                                </div>
                                <div className="galleryContent">
                                  <h3>Making Makers Mark</h3>
                                  <p>Take an in depth look at the production of a bottle of Jameson </p>
                                  <button className="btnPhoto videoBtn">Video</button>
                                </div>
                              </div>
                            </div>
                            <div className="md:w-1/3  xl:w-1/4 w-full md:pr-4 xl:pr-9 mb-4 md:mb-9">
                              <div className="galleryItem ">
                                <div className="galleryImage">
                                  <img src="/images/g1.webp" />
                                  <div className="video">
                                    <img src="/images/play.webp" />
                                  </div>
                                </div>
                                <div className="galleryContent">
                                  <h3>Billboard in Brooklyn</h3>
                                  <p>Billboard in Bushwick Brooklyn 39th street & 10th Ave. </p>
                                  <button className="btnPhoto videoBtn">Video</button>
                                </div>
                              </div>
                            </div>
                         
                            <div className="md:w-1/3  xl:w-1/4 w-full xl:pr-9 mb-4 md:mb-9">
                              <div className="galleryItem ">
                                <div className="galleryImage">
                                  <img src="/images/g1.webp" />
                                </div>
                                <div className="galleryContent">
                                  <h3>Billboard in Brooklyn</h3>
                                  <p>Billboard in Bushwick Brooklyn 39th street & 10th Ave. </p>
                                  <button className="btnPhoto document_btn">Document</button>
                                </div>
                              </div>
                            </div>
                            <div className="md:w-1/3  xl:w-1/4 w-full md:pr-4 xl:pr-0 mb-4 md:mb-9">
                              <div className="galleryItem  ">
                                <div className="galleryImage">
                                  <img src="/images/g1.webp" />
                                </div>
                                <div className="galleryContent">
                                  <h3>Billboard in Brooklyn</h3>
                                  <p>Billboard in Bushwick Brooklyn 39th street & 10th Ave. </p>
                                  <button className="btnPhoto videoBtn">Video</button>
                                </div>
                              </div>
                            </div>
                            <div className="md:w-1/3  xl:w-1/4 w-full md:pr-4 xl:pr-9 mb-4 md:mb-9">
                              <div className="galleryItem ">
                                <div className="galleryImage">
                                  <img src="/images/document.webp" />
                                </div>
                                <div className="galleryContent">
                                  <h3>Billboard in Brooklyn</h3>
                                  <p>Billboard in Bushwick Brooklyn 39th street & 10th Ave. </p>
                                  <button className="btnPhoto document_btn">Document</button>
                                </div>
                              </div>
                            </div>
                            <div className="md:w-1/3  xl:w-1/4 w-full md:pr-0 xl:pr-9 mb-4 md:mb-9">
                              <div className="galleryItem  ">
                                <div className="galleryImage">
                                  <img src="/images/g1.webp" />
                                </div>
                                <div className="galleryContent">
                                  <h3>Billboard in Brooklyn</h3>
                                  <p>Billboard in Bushwick Brooklyn 39th street & 10th Ave. </p>
                                  <button className="btnPhoto videoBtn">Video</button>
                                </div></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={
                            toggleState4 === "Favorites"
                              ? "tabContent tabContentActive"
                              : "tabContent"
                          }
                        >
                          Favorites
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    toggleState2 === "TechSheet"
                      ? "tabContent tabContentActive"
                      : "tabContent"
                  }
                >
                  <div className="flex w-full justify-center flex-wrap px-6">
                    <div className="w-1/2 sm:w-1/3 pr-3 md:pr-6 md:mb-6 mb-3">
                      <img src="/images/t.webp"/>
                    </div>
                    <div className=" w-1/2 sm:w-1/3 pr-3 md:pr-6 md:mb-6 mb-3">
                      <img src="/images/t2.webp"/>
                    </div>
                    <div className="w-1/2 sm:w-1/3 pr-3 md:pr-6 md:mb-6 mb-3">
                      <img src="/images/t2.webp"/>
                    </div>
                    <div className="w-1/2 sm:w-1/3 pr-3 md:pr-6 md:mb-6 mb-3">
                      <img src="/images/t2.webp"/>
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

export default SearchDetail;
