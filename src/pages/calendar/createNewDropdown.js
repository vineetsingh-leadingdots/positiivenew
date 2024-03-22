import React, { useState } from "react";

import CustomerOnboarding from "./customerStep/customerOnboarding";
import {
  CalendarIcon2,
  DropDownIcon,
  MeetingIcon,
  PrePlanIcon,
  ReminderIcon,
} from "../../commonComponents/commonSvg";
import { Drawer } from "antd";
const CreateNewDropdown = () => {
  const [eventDate] = useState(new Date());
  const [noteType] = useState("meeting");

  const [showDropdown, setShowDropdown] = useState(false);
  const showDrop = () => {
    setShowDropdown(!showDropdown);
  };

  const [open, setOpen] = useState(false);
  const showDefaultDrawer = () => {
    setOpen(true);
    setShowDropdown(!showDropdown);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="createNewBtn ">
        <div className="relative">
          <button
            onClick={() => showDrop()}
            className={
              showDropdown
                ? " active btnCreate flex items-center md:ml-auto mb-6"
                : "btnCreate flex items-center ml-auto mb-6"
            }
          >
            <div className="flex items-center">
              <CalendarIcon2 />
              <span className="pl-2">Create New</span>
            </div>
            <DropDownIcon />
          </button>
          <div
            className={
              showDropdown
                ? "show createNewDropDown calendarDropdown"
                : "createNewDropDown calendarDropdown"
            }
          >
            <ul>
              <li>
                <MeetingIcon />
                Meeting
              </li>
              <li onClick={showDefaultDrawer}>
                <PrePlanIcon />
                Pre-Plan
              </li>
              <Drawer
                placement="right"
                zIndex={999999}
                onClose={onClose}
                open={open}
                width={1100}
              >
                {" "}
                <div
                  className="close cursor-pointer absolute top-4 right-4"
                  onClick={onClose}
                >
                  <img src="images/close-circle.svg" />
                </div>
                <CustomerOnboarding
                  noteType={noteType}
                  eventDate={eventDate}
                  setOpen={setOpen}
                />
              </Drawer>
              <li>
                <ReminderIcon />
                Reminder
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewDropdown;
