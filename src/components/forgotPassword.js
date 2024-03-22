import React from "react";
import HeaderLogin from "./headerLogin";
import { Link } from "react-router-dom";
import { Button, Col, Typography } from "antd";
import { Row, Image } from "antd";
import InputFields from "../commonComponents/inputFields";
// import { EyeIcon, LockIcon, MailOutlined } from "../commonComponents/commonSvg";

const ForgotPassword = () => {
  const { Title } = Typography;
  const handlerChange = (e) => {
    let data = {};
    let propName = e.target.name;
    data[propName] = e.target.value;
    // commonValidatorCheckedOnes(data, validatorValid, 'loginForm', propName)
  };
  return (
    <>
      <HeaderLogin />
      <Row className="loginArea  ">
        <Row style={{ textAlign: "center" }}>
          <Col span={24}>
            <Image src="/images/logo.webp" width="144" className="mx-auto" />
          </Col>
          <Col span={24}>
            <Title level={4} style={{ textAlign: "center" }}>
              Forgot your password?
            </Title>
          </Col>
        </Row>
        <form className="text-left" id="forgotPasswordForm">
          <InputFields
            rowClass="form-group relative "
            placeholder="Email Address"
            inputClass="formControl pl-0"
            onChange={(e) => handlerChange(e)}
          />

          <Row
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <Button className="btn-save">Submit</Button>
          </Row>
          <p className="dontAccounta pt-2">
            <Link to="/login">Login</Link>
          </p>
        </form>
      </Row>
    </>
  );
};

export default ForgotPassword;
