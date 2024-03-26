import React from 'react';
import { Dropdown, Radio, Row } from 'antd';
const items = [

  {
   

    label: (
      <>
      <h3>Choose a division</h3>
      </>
    ),
    key: '0',
  },
  {
   

    label: (
      <>
        <Radio value="0" />      
        Atlantic
      </>
    ),
    key: '20',
  },
  {
    label: (
      <>
        <Radio value="0" />      
        Coastal
      </>
    ),
    key: '0',
  },
  {
    label: (
      <>
        <Radio value="0" />      
        Diamond
      </>
    ),
    key: '0',
  },
  {
    label: (
      <>
        <Radio value="0" />      
        Emerald
      </>
    ),
    key: '0',
  },
  {
    label: (
      <>
        <Radio value="0" />      
        Full book
      </>
    ),
    key: '0',
  },
  {
    label: (
      <>
        <Radio value="0" />      
        Pearl
      </>
    ),
    key: '0',
  },
  {
    label: (
      <>
        <Radio value="0" />      
        Sapphire
      </>
    ),
    key: '0',
  },
  {
    label: (
      <>
        <Radio value="0" />      
        Transatlantic
      </>
    ),
    key: '0',
  },
];
const Divison = () => (

  
<Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
    overlayStyle={{ zIndex: 9999 }}
    overlayClassName="divisonDropdown"
  >
    <a onClick={(e) => e.preventDefault()}>
    <Row className="flex items-start" >
                        <img src="/images/dashIcon.svg" />
                        <h3>
                            Divisions <img src="/images/arrow.svg" />
                        </h3>
                    </Row>
    </a>
  </Dropdown>

);
export default Divison;