import React from 'react';
import { Tabs, ConfigProvider } from 'antd';

const onChange = (key) => {
  console.log(key);
};

const TabsFile = ({items}) => (
  <ConfigProvider
    theme={{
      components: {
        Tabs: {
          colorBorder: '#d9d9d9',
          fontSize:'14px',
          itemColor:"#ABAFB1",
          itemSelectedColor:'#2B2F32',
          lineWidthFocus:'4px ',
          colorBorder:'#264653',
          tabActiveBorderColor: '#000',
          horizontalItemPadding:"10px 14px",
          horizontalItemMargin:"0",
          horizontalItemGutter:"0",
          horizontalMargin:"0",
          tabActiveBorderColor: 'red',
        },
      },
    }}
  >
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  </ConfigProvider>
);

export default TabsFile;
