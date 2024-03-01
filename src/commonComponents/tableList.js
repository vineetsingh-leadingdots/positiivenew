import React from 'react'
import { Table } from 'antd';

const TableList = ({data, columns}) => {
  
  return (
    <>
      <div className="w-full mt-4">
        <div className="card pt-4 pb-6 pr-2  dashboardTable  w-full">
          <div className="heading pl-6 pb-2">
            <h2 style={{ marginBottom: "0" }}>Recent Orders &#9989;</h2>
          </div>
          <div className="overflow-x-auto w-full whitespace-nowrap">
            <Table dataSource={data} columns={columns} bordered={false} className="dashboardTable" />;
          </div>
        </div>
      </div>
    </>
  )
}

export default TableList