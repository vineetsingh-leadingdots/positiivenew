import React, { useState } from "react";
// import SelectBtn2 from "./select2";
import { Link } from "react-router-dom";
import { TimePicker } from 'antd';

const StepTwo = () => {

    const [toggleState2, setToggleState2] = useState("1");
    const toggleTab2 = (index) => {
        setToggleState2(index);
    };
    return (
        <>

            <div className="w-full step2">
                <div className="flex justify-between">
                    <div>
                       
                        <h2>Customer Contact information</h2>
                    </div>
                    <div className="onBoardImg">
                        <img src="/images/img_bottles.webp" />
                    </div>
                </div>

                <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between w-full flex-wrap">
                        <div className="onboardLeft ">
                            <div className="pr-3 pb-4 pt-7 flex items-center">
                                <img src="/images/trash.svg" />  <h3 >My Customers</h3> 
                            </div>
                            <div className="onboardRightContent customerInfo">
                                <div onClick={() => toggleTab2("1")}
                                    className={toggleState2 === "1" ? " active clientList" : " clientList "}>
                                    <p>
                                        <div className="styled-input-container styled-input--square">
                                            <div className="styled-input-single">
                                                <input
                                                    type="checkbox"
                                                    name="fieldset-2"
                                                    id="tequila"
                                                />
                                                <label htmlFor="tequila" />
                                            </div>
                                        </div>
                                        Harrisberg Bar <span>347 State Street Brooklyn NY 22123 347 State Street Brooklyn</span>
                                    </p>
                                </div>
                                <div onClick={() => toggleTab2("2")}
                                    className={toggleState2 === "2" ? " active clientList" : " clientList "}>
                                    <p>
                                        <div className="styled-input-container styled-input--square">
                                            <div className="styled-input-single">
                                                <input
                                                    type="checkbox"
                                                    name="fieldset-2"
                                                    id="tequila1"
                                                />
                                                <label htmlFor="tequila1" />
                                            </div>
                                        </div>
                                        Harrisberg Bar <span>347 State Street Brooklyn NY 22123 347 State Street Brooklyn</span>
                                    </p>
                                </div>
                                <div onClick={() => toggleTab2("3")}
                                    className={toggleState2 === "3" ? " active clientList" : " clientList "}>
                                    <p>
                                        <div className="styled-input-container styled-input--square">
                                            <div className="styled-input-single">
                                                <input
                                                    type="checkbox"
                                                    name="fieldset-2"
                                                    id="tequila1"
                                                />
                                                <label htmlFor="tequila1" />
                                            </div>
                                        </div>
                                        Harrisberg Bar <span>347 State Street Brooklyn NY 22123 347 State Street Brooklyn</span>
                                    </p>
                                </div>

                                <div onClick={() => toggleTab2("4")}
                                    className={toggleState2 === "4" ? " active clientList" : " clientList "}>
                                    <p>
                                        <div className="styled-input-container styled-input--square">
                                            <div className="styled-input-single">
                                                <input
                                                    type="checkbox"
                                                    name="fieldset-2"
                                                    id="tequila"
                                                />
                                                <label htmlFor="tequila" />
                                            </div>
                                        </div>
                                        Harrisberg Bar <span>347 State Street Brooklyn NY 22123 347 State Street Brooklyn</span>
                                    </p>
                                </div>
                                <div onClick={() => toggleTab2("5")}
                                    className={toggleState2 === "5" ? " active clientList" : " clientList "}>
                                    <p>
                                        <div className="styled-input-container styled-input--square">
                                            <div className="styled-input-single">
                                                <input
                                                    type="checkbox"
                                                    name="fieldset-2"
                                                    id="tequila1"
                                                />
                                                <label htmlFor="tequila1" />
                                            </div>
                                        </div>
                                        Harrisberg Bar <span>347 State Street Brooklyn NY 22123 347 State Street Brooklyn</span>
                                    </p>
                                </div>
                                <div onClick={() => toggleTab2("6")}
                                    className={toggleState2 === "6" ? " active clientList" : " clientList "}>
                                    <p>
                                        <div className="styled-input-container styled-input--square">
                                            <div className="styled-input-single">
                                                <input
                                                    type="checkbox"
                                                    name="fieldset-2"
                                                    id="tequila1"
                                                />
                                                <label htmlFor="tequila1" />
                                            </div>
                                        </div>
                                        Harrisberg Bar <span>347 State Street Brooklyn NY 22123 347 State Street Brooklyn</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="onboardRight ">
                            <h3 className="mb-4 pt-7">Contact Details</h3>
                            <div className="contactDetails">

                                <div className={toggleState2 === "1" ? "tabContent active " : "tabContent"}>
                                    <div className="myCustomertag">
                                        <p className="font-bold">Harrisberg Bar <span className="font-normal">43-20st Grand street, Brooklyn , NY 10042</span></p>
                                    </div>
                                    <div className="px-3">
                                        <div className="w-full mb-4 ">
                                            <h3>Liquor License Serial Number</h3>
                                            <div className="w-full">
                                                <input type="text" className="form_control" placeholder="Company Name" />
                                            </div>
                                        </div>
                                        <div className="w-full mb-4 ">
                                            <h3>Company Name</h3>
                                            <div className="w-full">
                                                <input type="text" className="form_control" placeholder="Elizaberth Walker" />
                                            </div>
                                        </div>
                                        <div className="w-full mb-4 ">
                                            <h3>Contact Role</h3>
                                            <div className="w-full">
                                                {/* <SelectBtn2 /> */}
                                            </div>
                                        </div>
                                        <div className="w-full mb-4 ">
                                            <h3>Contact Email</h3>
                                            <div className="w-full">
                                                <input type="text" className="form_control" placeholder="Elizabeth@lanovabistro.com" />
                                            </div>
                                        </div>
                                        <div className="w-full mb-4 ">
                                            <h3>Contact Mobile Number</h3>
                                            <div className="w-full">
                                                <input type="text" className="form_control" placeholder="212-345-0987" />
                                            </div>
                                        </div>
                                        <div className="w-full mb-4 ">
                                            <h3>Set best days to meet customer</h3>
                                            <div className="w-full flex gap-4 justify-center">
                                                <div className="daysButton">
                                                    <input type="radio" name="days" id="Mon" checked />
                                                    <label>Mon</label>
                                                </div>
                                                <div className="daysButton">
                                                    <input type="radio" name="days" id="Tue" />
                                                    <label>Tue</label>
                                                </div>
                                                <div className="daysButton">
                                                    <input type="radio" name="days" id="Wed" />
                                                    <label>Wed</label>
                                                </div>
                                                <div className="daysButton">
                                                    <input type="radio" name="days" id="Thu" />
                                                    <label>Thu</label>
                                                </div>
                                                <div className="daysButton">
                                                    <input type="radio" name="days" id="Fri" />
                                                    <label>Fri</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full mb-16 ">
                                            <h3>Set best time to meet</h3>
                                            <div className="w-full flex justify-center">
                                                <div className="w-20">
                                                    <TimePicker.RangePicker activeBorderColor="#000" /> Mon
                                                </div>

                                            </div>
                                        </div>
                                        <div className="w-full mb-3 ">
                                            <h3><input type="checkbox" className="accent-black" /> Share my contact with this information</h3>
                                        </div>
                                        <div className="w-full mb-2 ">
                                            <h3>Notes</h3>
                                            <div className="w-full">
                                                <textarea className="form_control" placeholder="Enter notes about your customer" />
                                            </div>
                                        </div>
                                        <div className="w-full mb-2 ">
                                            <h3>Delivery Instructions</h3>
                                            <div className="w-full">
                                                <textarea className="form_control" placeholder="Delivery Instructions" />
                                            </div>
                                        </div>
                                        <div className="w-full mb-6">
                                            <h3>+ Add another contact</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className={toggleState2 === "2" ? "tabContent active " : "tabContent"}>
                                    <div className="p-4">
                                        2
                                    </div>
                                </div>
                                <div className={toggleState2 === "3" ? "tabContent active " : "tabContent"}>
                                    <div className="p-4">
                                        3
                                    </div>
                                </div>
                                <div className={toggleState2 === "4" ? "tabContent active " : "tabContent"}>
                                    <div className="p-4">
                                        4
                                    </div>
                                </div>
                                <div className={toggleState2 === "5" ? "tabContent active " : "tabContent"}>
                                    <div className="p-4">
                                        5
                                    </div>
                                </div>
                                <div className={toggleState2 === "6" ? "tabContent active " : "tabContent"}>
                                    <div className="p-4">
                                        6
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default StepTwo