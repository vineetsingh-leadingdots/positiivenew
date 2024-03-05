import React, { useState } from 'react';
import { Table } from 'antd';

export const SupplierData = [
    {
      key: '1',
      Name : "Allied Beverage Corporation",
      Address: "2930 Avenue of Americas, New York, NY 10036",
      PhoneNumber: '212.345.9201',
      Division:'Pearl',     
    },
    {
        key: '2',
        Name : "Allied Beverage Corporation",
        Address: "2930 Avenue of Americas, New York, NY 10036",
        PhoneNumber: '212.345.9201',
        Division:'Pearl',     
      },
      {
        key: '3',
        Name : "Allied Beverage Corporation",
        Address: "2930 Avenue of Americas, New York, NY 10036",
        PhoneNumber: '212.345.9201',
        Division:'Pearl',     
      },
  ];

export const ColumnSupplier = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Address',
      dataIndex: 'Address',
      key: 'Address',
    },
    {
      title: 'Phone Number',
      dataIndex: 'PhoneNumber',
      key: 'PhoneNumber',
    },
    {
      title: 'Division',
      dataIndex: 'Division',
      key: 'Division',
    },
  ];

const SupplierTable = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div>
      <Table
        rowSelection={{
          type: selectionType,
          onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          },
        }}
        columns={ColumnSupplier}
        dataSource={SupplierData}
      />
       <style>
        {`
         
          .ant-table tr:hover > td {
            background-color: #264653 !important; 
          }
        `}
      </style>
    </div>
  );
};

export default SupplierTable;
