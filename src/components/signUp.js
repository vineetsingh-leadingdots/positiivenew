import React, { useState } from "react";
import HeaderLogin from './headerLogin'
import { Link } from "react-router-dom";
import { Button, Col, Typography } from 'antd';

import { Row, Image } from 'antd';
import InputFields from "../commonComponents/inputFields";
import { EyeIcon, LockIcon, MailOutlined, PhoneIcon, UserIcon } from "../commonComponents/commonSvg";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const { Title } = Typography;

  const handlerChange = (e) => {
    let data = {}
    let propName = e.target.name
    data[propName] = e.target.value
    // commonValidatorCheckedOnes(data, validatorValid, 'loginForm', propName)
  }

  return (
    <>
      <HeaderLogin />

      <Row className="loginArea bg-white ">
        <Row style={{ textAlign: 'center' }}>
          <Col span={24}>
            <Image src="/images/logo.webp" width="144" className="mx-auto" />
          </Col>
          <Col span={24}>
            <Title level={4} style={{ textAlign: 'center' }}>Welcome </Title>
          </Col>
          <Col span={24}>
            <Title level={5} style={{ margin: "0", fontSize: "14px" }}>Login to your customer portal account</Title>
          </Col>
        </Row>
        <form
          className="text-left"
          id="signUpForm"

        >
          <InputFields rowClass="form-group relative" placeholder="First Name" inputClass="formControl" inputIcon={<UserIcon/>} onChange={(e) => handlerChange(e)} />
          <InputFields rowClass="form-group relative" placeholder="Last Name" type="text" inputClass="formControl" inputIcon={<UserIcon />} onChange={(e) => handlerChange(e)} />
          <InputFields rowClass="form-group relative" placeholder="Email Address" inputClass="formControl" inputIcon={<MailOutlined />} onChange={(e) => handlerChange(e)} />
          <InputFields rowClass="form-group relative " placeholder="Phone Number" type="text" inputClass="formControl" inputIcon={<PhoneIcon/>} onChange={(e) => handlerChange(e)} />        
          <InputFields rowClass="form-group relative eyeIcon " placeholder="Password" type="password" inputClass="formControl"  suffix={<EyeIcon />} inputIcon={<LockIcon />} onChange={(e) => handlerChange(e)} />
          <InputFields rowClass="form-group relative eyeIcon " placeholder="Confirm Password" type="password" inputClass="formControl"  suffix={<EyeIcon />} inputIcon={<LockIcon />} onChange={(e) => handlerChange(e)} />
       
          <p className="dontAccount"> Already have an account? <Link to="/login">  Login </Link> </p>
          <Row style={{ display: "flex", width: "100%", justifyContent: "center" }} >
            <Button className="btn-save" >Sign Up</Button>
          </Row>
        </form>
      </Row>

    </>
  )
}

export default SignUp