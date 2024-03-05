import React, { useState } from "react";
import { HeartIcon, ShareIcon, DotsIcon } from "../../../commonComponents/commonSvg";

const ExperienceItem = ({productImg, btnClass, btnText, heading, description, deal, cases, bottleNumber, savingImg, percentage, taste, tasteImgOne, tasteImgTwo, Nose, noseImg, noseImg2, countryName, region, vintage, supplier }) => {
 

const [showDropdown, setShowDropdown] = useState(false)
const showDrop = () => {
setShowDropdown(!showDropdown)
}


const [deleteShow, setDeleteShow] = useState(false);
const handleClick = () => setDeleteShow(!deleteShow);


const [expandShow, setExpandShow] = useState(false);
const expandClick = () => setExpandShow(!expandShow);
 
    return (
    <>
      <div className="displayProduct">
                <div className="checkBoxSec">
                    <div
                        className="styled-input-container styled-input--square">
                        <div className="styled-input-single">
                            <input
                                type="checkbox"
                                name="fieldset-2"
                                id="tequila"
                            />
                            <label for="tequila" />
                        </div>
                    </div>
                </div>
                <div className="itemContent">
                    <div className="stockList ">
                        <div className="stockImage">
                            <img src={productImg} />
                        </div>
                        <button
                            className={btnClass}>{btnText}
                        </button>                                               
                    </div>                                           
                    <div
                        className="shareSec">
                        <button className="heartBtn">
                         
                        <HeartIcon/>
                     
                        </button>
                        <button className="btnShare2">
                           <ShareIcon/>
                            Share
                        </button>                     
                        <button onClick={handleClick}>
                            <DotsIcon/>
                            <div
                                className={deleteShow ? "deletePopup show" : "deletePopup"}>
                                Delete
                            </div>
                        </button>
                    </div>
                </div>
                <div className="stockContent">
                            <h3>{heading}</h3>
                        </div>
                <div className="deal_card">
                    <div className="dealLeft">
                        <h4>
                            {deal}
                        </h4>
                        <p>Purchase {cases}</p>
                        <span>({bottleNumber} bottles per case)</span>
                    </div>
                    <div className="savings">
                        <img src={savingImg}/>
                           <p> {percentage}
                            savings</p>
                    </div>
                </div>
                <div className="w-full">
                    <div className="tasteSec ">
                        <div className="div pr-14">
                            <label>{taste}</label>
                            <div className="flex">
                                <img
                                    src={tasteImgOne}
                                    className="mr-4"
                                />
                                <img
                                      src={tasteImgTwo}

                                />
                            </div>
                        </div>
                        <div className="div pr-14">
                            <label>{Nose}</label>
                            <div className="flex">
                                <img
                                     src={noseImg}
                                    className="mr-4"
                                />
                                <img
                                   src={noseImg2}
                                    className="mr-4"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between flex-wrap">
                        <div className="w-50 ">
                            <div className="overDetail">
                                <label>Country</label>
                                <p>{countryName}</p>
                            </div>
                        </div>
                        <div className="w-50">
                            <div className="overDetail">
                                <label>Region</label>
                                <p>{region}</p>
                            </div>
                        </div>
                        <div className="w-50">
                            <div className="overDetail">
                                <label>Vintage</label>
                                <p>{vintage}</p>
                            </div>
                        </div>
                        <div className="w-50">
                            <div className="overDetail">
                                <label>Supplier</label>
                                <p>{supplier}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={expandShow ? "expandConent active w-full" : "expandConent w-full"}>
                    <label>Description</label>
                    <p>
                    At night on ponce IPA. Three Taverns 3 Craft
                        beers.
                        What you are about to drink. A night on
                        ponce IPA
                        grafts on American ale yeast on to the same
                        malts and
                        hops used in a night in brussels IPA. The
                        result is an
                        entirely...
                        <button onClick={expandClick}
                            className={expandShow ? "expandBtn active" : "expandBtn"}>
                            <img src="/images/fi_chevron-down.svg" />
                        </button>
                    </p>
                </div>
            </div>
            </>
  )
}

export default ExperienceItem