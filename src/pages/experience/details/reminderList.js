import React from 'react';
import { BottleIcon, EditICon } from '../../../commonComponents/commonSvg';

const reminders = [
  { id: 1, icon: <><EditICon/></>, date: 'August 17th 2023' },
  { id: 2, icon: <><EditICon/></>, date: 'August 17th 2023' },
  { id: 3, icon: <><EditICon/></>, date: 'August 17th 2023' },
  { id: 4, icon: <><EditICon/></>, date: 'August 17th 2023' },
  { id: 5, icon: <><BottleIcon/></>, date: 'August 17th 2023' },
];

const AddReminderItem = ({ reminder }) => (
  <div className="addReminderItem flex w-full" key={reminder.id}>
    <div className="mr-8 checkBoxIcon">
      <div className="styled-input-container styled-input--square ">
        <div className="styled-input-single">
          <input type="checkbox" name="fieldset-2" id={`blanco${reminder.id}`} />
          <label htmlFor={`blanco${reminder.id}`} />
        </div>
      </div>
    </div>
    <div className="reminderIcon mr-5">
    {reminder.icon}
    </div>
    <div className="reminderInput">
      <textarea
        type="text"
        className="w-full p-2 pr-30 appearance-none resize-none h-11 border-b border-black"
      />
      <span>{reminder.date}</span>
    </div>
    <div className="ml-6 relative -top-[14px]">
      <div className="styled-input-container styled-input--square">
        <div className="styled-input-single">
          <input type="checkbox" name="fieldset-2" id={`blanco${reminder.id}`} />
          <label htmlFor={`blanco${reminder.id}`} />
        </div>
      </div>
    </div>
  </div>
);

const ReminderList = () => (
  <>
    {reminders.map((reminder) => (
      <AddReminderItem key={reminder.id} reminder={reminder} />
    ))}
  </>
);

export default ReminderList;
