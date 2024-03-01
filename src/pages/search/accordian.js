import { DownOutlined } from '@ant-design/icons';
import React from 'react';
import { Collapse, theme } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const getItems = (panelStyle) => [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <>
      <div className="mt-2 filterCard ">
        <div className="styled-input-container styled-input--square">
          <div className="styled-input-single">
            <input
              type="checkbox"
              name="fieldset-2"
              id="checkbox2-example-five"
            />
            <label htmlFor="checkbox2-example-five">Wine</label>
          </div>
        </div>
        <div className="styled-input-container styled-input--square">
          <div className="styled-input-single">
            <input
              type="checkbox"
              name="fieldset-2"
              id="checkbox2-example-three"
            />
            <label htmlFor="checkbox2-example-three">Spirits</label>
          </div>
        </div>
      </div>
    </>,
    style: panelStyle,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
    style: panelStyle,
  },
];
const AccordianArea = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}
      style={{
        background: token.colorBgContainer,
      }}
      items={getItems(panelStyle)}
    />
  );
};
export default AccordianArea;