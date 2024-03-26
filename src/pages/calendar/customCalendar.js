import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);
const CustomCalendar = () => {
  return (
    <>
      <Calendar
        localizer={localizer}
        // events={myEventsList}
        views={{
          day: true,
          week: true,
          month: true,
        }}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </>
  );
};

export default CustomCalendar;
