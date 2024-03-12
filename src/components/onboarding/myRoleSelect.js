import { Select } from 'antd';
import { Radio } from 'antd';


const { Option } = Select;

const MyRoleSelect = () => {
  const handleChange = value => {
    console.log(`Selected ${value}`);
  };

  return (
    <Select
      defaultValue="1"
      className="customSelect"
      onChange={handleChange}
    >
      <Option value="1">
         Select your role
      </Option>
      <Option value="2">
        <Radio value="2" /> Sales Consultant
      </Option>
      <Option value="3">
        <Radio value="3" /> Marketing Associate
      </Option>
      <Option value="4">
        <Radio value="4" /> Sales Manager
      </Option>
      <Option value="5">
        <Radio value="5" /> Director of Sales
      </Option>
      <Option value="6">
        <Radio value="6" /> Trade Development Manager
      </Option>
    </Select>
  );
}

export default MyRoleSelect;
;
