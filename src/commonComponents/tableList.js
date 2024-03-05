import React from 'react';
import { Table, ConfigProvider } from 'antd';

const TableList = ({ data, columns, className }) => {

  return (
    <>
      <div className="overflow-x-auto w-full whitespace-nowrap">
        <ConfigProvider componentSize="middle" theme={{
          components: {
            Table: {
              headerBg:"#fff",
              cellPaddingInline:" 22px 27px 22px 27px",
              rowHoverBg:"#264653"
            },
          },
        }}>
          <Table
            dataSource={data}
            columns={columns}
            bordered={false}
            className={className}
           
          />
        </ConfigProvider>
      </div>
    </>
  );
}

export default TableList;
