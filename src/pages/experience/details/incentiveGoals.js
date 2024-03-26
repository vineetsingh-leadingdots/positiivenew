import React from "react";
import TabsFile from "../../../commonComponents/tabs";
import { orderHistoryItem } from "../../../commonComponents/tabItems";

export const IncentiveGoals = () => {
  return (
    <>
      <div className="productTabArea orderTabs">
        <TabsFile items={orderHistoryItem} />
      </div>
    </>
  );
};
