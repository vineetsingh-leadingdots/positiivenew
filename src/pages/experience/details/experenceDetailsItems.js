import React from "react";
import Gallery from "../../../commonComponents/gallery";
import AccountDetails from "./accountDetails";
import ExperiencesTab from "./experiencesTab";
import { IncentiveGoals } from "./incentiveGoals";
import PointSales from "./pointSales";
import Reminder from "./reminder";
import SuppliersTab from "./suppliers";

export const ExperenceDetailsItems = [
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
     <ExperiencesTab/>
    
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