import React, { useState } from "react";
import HeaderLogin from './headerLogin'
import { Link } from "react-router-dom";
import { Button, Col, Typography } from 'antd';

import { Row, Image } from 'antd';
import InputFields from "../commonComponents/inputFields";
import { EyeIcon, LockIcon, MailOutlined, PhoneIcon, UserIcon } from "../commonComponents/commonSvg";
import { useRegisterUserMutation } from "../services/authApi";

const SignUp = () => {

  const [ registerUser ] = useRegisterUserMutation();

  const [ formData, setFormData ] = useState({
    email: "",
    first_name: "",
    last_name: "",
    company_name: "",
    country_code: "",
    mobile_no: "",
    password: ""
  });

  const handlerChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const  handleSubmit = (e) => {
    e.preventDefault();
    let value = {
      email: formData?.email,
      first_name: formData?.first_name,
      last_name: formData?.last_name,
      company_name: formData?.company_name,
      country_code: formData?.country_code,
      mobile_no: formData?.mobile_no,
      password: formData?.password,
    };
    registerUser(value);
  }

  const { Title } = Typography;

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
          <InputFields rowClass="form-group relative" name="first_name" placeholder="First Name" inputClass="formControl" inputIcon={<UserIcon/>} onChange={(e) => handlerChange(e)} />
          <InputFields rowClass="form-group relative" name="last_name" placeholder="Last Name" type="text" inputClass="formControl" inputIcon={<UserIcon />} onChange={(e) => handlerChange(e)} />
          <InputFields rowClass="form-group relative" name="email" placeholder="Email Address" inputClass="formControl" inputIcon={<MailOutlined />} onChange={(e) => handlerChange(e)} />
          <InputFields rowClass="form-group relative" name="mobile_no" placeholder="Phone Number" type="text" inputClass="formControl" inputIcon={<PhoneIcon/>} onChange={(e) => handlerChange(e)} />        
          <InputFields rowClass="form-group relative eyeIcon" name="password" placeholder="Password" type="password" inputClass="formControl"  suffix={<EyeIcon />} inputIcon={<LockIcon />} onChange={(e) => handlerChange(e)} />
          <InputFields rowClass="form-group relative eyeIcon" name="confirm_password" placeholder="Confirm Password" type="password" inputClass="formControl"  suffix={<EyeIcon />} inputIcon={<LockIcon />} onChange={(e) => handlerChange(e)} />
       
          <p className="dontAccount"> Already have an account? <Link to="/login">  Login </Link> </p>
          <Row style={{ display: "flex", width: "100%", justifyContent: "center" }} >
            <Button className="btn-save" onClick={handleSubmit}>Sign Up</Button>
          </Row>
        </form>
      </Row>

    </>
  )
}

export default SignUp