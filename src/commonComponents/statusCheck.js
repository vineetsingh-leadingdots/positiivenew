import React, { useState } from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const StatusCheck = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <Button className="actionButton"
    style={{ color: checked ? 'black' : 'green',
           border: checked ? '1px solid black' : '1px solid green'
        } }
      icon={checked ? <CloseOutlined /> : <CheckOutlined />}
      onClick={handleClick}
    />
    
    
  );
};

export default StatusCheck;
