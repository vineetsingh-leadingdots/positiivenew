import React from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Popup1 from "./popup1";
import Popup2 from "./popup2";

import CreateNewDropdown from "./createNewDropdown";

import CustomCalendar from "./customCalendar";
const CalendarView = () => {

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Positiive | Calendar </title>
                </Helmet>
            </HelmetProvider>

            <div className="breadcrumb">
                <Link to="/calendar" className="flex items-center">
                    <span>
                        <img src="images/calendar.webp" alt="calendar" />
                    </span>
                    <span className="mx-3"><img src="images/line.webp" alt={'line'} /></span>
                    Calendar
                </Link>
            </div>
            <div className="headingH">
                <h2>Calendar</h2>
            </div>
            <div className="content w-full calendarPage">
                <div className="calendarPageIn mx-auto  relative ">
                    <CreateNewDropdown />
                    <div className='timeCard '>
                        <p>Enter time to meet customer</p>
                        <div className='timeCardBox'>
                            <div className='timeItem'>
                                1
                            </div>
                            <div className='timeDots'>
                                :
                            </div>
                            <div className='timeItem'>
                                00
                            </div>
                            <div className='timeItem'>
                                <div className='timeZoneSwitch'>
                                    <label><input type='radio' checked name='AM' /><span>AM</span></label>
                                    <label><input type='radio' name='AM' /><span>PM</span></label>
                                </div>
                            </div>
                        </div>
                        <div className="timeBoxBtn">
                            <button className="timeBtn cancel">Cancel</button>
                            <button className="timeBtn ">Ok</button>
                        </div>
                    </div>
                    <br/>
                    <Popup1 />
                    <Popup2 />
                    <div className="card pt-8">
                        <CustomCalendar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CalendarView