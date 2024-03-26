import Marketing from "./marketing";
import React from "react";
import Award from "./award";
import Overview from "./overview";
import Promotions from "./promotions";
import PointOfSale from "./pointOfSale";
import DistributorInfo from "./distributorInfo";
import Gallery from "./gallery";
import TechSheet from "./techSheet";
import { OrderHistoryData, PendingOrderData, columnOrder, columnPendingOrder } from "./tableData";
import TableList from "./tableList";

export const items = [
    {
      key: '1',
      label: 'Overview',
      children:
       <>
      <Overview/>
      </>,
    },
    {
      key: '2',
      label: 'Awards/Ratings',
      children: 
      <>
      <Award/>
      </>,
    },
    {
      key: '3',
      label: 'Promotions',
      children: 
      <>
      <Promotions/>
      </>,
      
    },
    {
        key: '4',
        label: 'Marketing',
        children:
        <>
        <Marketing/>
        </>,
      },
      {
        key: '5',
        label: 'Point of Sale',
        children:
         <>
         <PointOfSale/>
        </>,
      },
      {
        key: '6',
        label: 'Distributor Info',
        children: 
         <>    
         <DistributorInfo/>    
         </>,
      },
      {
        key: '7',
        label: 'Gallery',
        children: 
        <>    
      <Gallery/>
        </>,
      },
      {
        key: '8',
        label: 'Tech Sheet',
        children: 
        <>    
         <TechSheet/>
        </>,
      },
];
  


export const orderHistoryItem = [
  {
    key: '1',
    label: 'Pending Orders',
    children:
     <>
    <div className="pt-6">
    <TableList data={PendingOrderData} columns={columnPendingOrder} />
    </div>
    </>,
  },
  {
    key: '2',
    label: 'Order History',
    children: 
    <>
    <div className="pt-6">
    <TableList data={OrderHistoryData} columns={columnOrder} />
    </div>
    </>,
  },
  
];


