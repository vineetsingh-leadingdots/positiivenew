import React from 'react'
import { Table } from 'antd';
const TableList = () => {
  const dataSource = [
    {
      key: '1',
      date: "09/24/23",
      Order: 876364,
      Distributor: 'Southern',
      MainSales: 'James Harrison',
      Email: 'james.harrison@gmail.com',
      Cell: '212-120-2910 ',
    },

    {
      key: '2',
      date: "09/24/23",
      Order: 876364,
      Distributor: 'Southern',
      MainSales: 'James Harrison',
      Email: 'james.harrison@gmail.com',
      Cell: '212-120-2910 ',
    },
    {
      key: '3',
      Date: "09/24/23",
      Order: 876364,
      Distributor: 'Southern',
      MainSales: 'James Harrison',
      Email: 'james.harrison@gmail.com',
      Cell: '212-120-2910 ',
    },
    

  ];

  const columns = [
    {
      title: 'Order Date',
      dataIndex: 'date	',
      key: 'date',
    },
    {
      title: 'Order #',
      dataIndex: 'Order',
      key: 'Order',
    },
    {
      title: 'Distributor',
      dataIndex: 'Distributor',
      key: 'Distributor',
    },

    {
      title: 'Main sales rep',
      dataIndex: 'MainSales	',
      key: 'MainSales',
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
    },
    {
      title: 'Cell#',
      dataIndex: 'Cell',
      key: 'Cell',
    },
  ];
  return (
    <>
      <div className="w-full mt-4">
        <div className="card pt-4 pb-6 pr-2  dashboardTable  w-full">
          <div className="heading pl-6 pb-2">
            <h2 style={{ marginBottom: "0" }}>Recent Orders</h2>
          </div>
          <div className="overflow-x-auto w-full whitespace-nowrap">
            <Table dataSource={dataSource} columns={columns} bordered={false} className="dashboardTable" />;
          </div>
        </div>
      </div>
    </>
  )
}

export default TableList