import React from "react";
import { Row, Input } from "antd";
const InputFields = ({
  rowClass,
  placeholder,
  inputClass,
  inputIcon,
  onChange,
  type,
  suffix,
  name,
}) => {
  return (
    <>
      <Row className={rowClass}>
        <Input
          className={inputClass}
          placeholder={placeholder}
          type={type}
          prefix={inputIcon}
          onChange={onChange}
          suffix={suffix}
          name={name}
        />
      </Row>
    </>
  );
};

export default InputFields;
