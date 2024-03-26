import * as React from "react";
import { SearchIcon2 } from "../../../commonComponents/commonSvg";
import TableList from "../../../commonComponents/tableList";
import { ColumnCustomerData, CustomerData } from "./customerTableData";

const StepOne = () => {
  const [sortedInfo, setSortedInfo] = React.useState({});

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };
  return (
    <>
      <div className="customerStep customerOnboard">
        <div className="searchSec mb-9">
          <input type="text" className="form_control" placeholder="Search " />
          <button>
            <SearchIcon2 />
          </button>
        </div>
        <TableList
          data={CustomerData}
          columns={ColumnCustomerData}
          sortedInfo={sortedInfo}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default StepOne;
