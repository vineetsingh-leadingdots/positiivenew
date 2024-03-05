import Gallery from "../../commonComponents/gallery";
import TabsFile from "../../commonComponents/tabs";
import ExperiencesItems from "../experience/allExp";
import AccountDetails from "../experience/details/accountDetails";
import { IncentiveGoals } from "../experience/details/incentiveGoals";
import PointSales from "../experience/details/pointSales";
import Reminder from "../experience/details/reminder";
import SuppliersTab from "../experience/details/suppliers";

export const CustomerDetailsItem = [
    {
      key: '1',
      label: 'Account Details',
      children:
       <>
       <AccountDetails/>
      </>,
    },
    {
      key: '2',
      label: 'Reminders',
      children: 
      <>
      <Reminder/>
      </>,
    },
    {
      key: '3',
      label: 'Experiences',
      children:
       <>
<div className="tabWithAuto">
   <TabsFile items={ExperiencesItems} />
   </div>
      </>,
    },
    {
      key: '4',
      label: 'Gallery',
      children: 
      <>
     <Gallery/>
      </>,
    },
    {
      key: '5',
      label: 'Suppliers',
      children:
       <>
      <SuppliersTab/>
      </>,
    },
    {
      key: '6',
      label: 'Trackker',
      children: 
      <>
      Trackker
      </>,
    },
    {
      key: '7',
      label: 'Point of Sale',
      children: 
      <>
     <PointSales/>
      </>,
    },
    {
      key: '8',
      label: 'Incentive Goals',
      children: 
      <>
     <IncentiveGoals/>
      </>,
    },
  ];