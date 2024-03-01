import React from "react";
import HeaderLogin from './headerLogin'
import {Link } from "react-router-dom";
import { Button, Col, Typography } from 'antd';

import {  Row, Image  } from 'antd';
import InputFields from "../commonComponents/inputFields";
import { EyeIcon, LockIcon, MailOutlined } from "../commonComponents/commonSvg";

const Login = () => {

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
         <Title level={4} style={{ textAlign: 'center' }}>Welcome!</Title>
         </Col>
         <Col span={24}>
        <Title level={5} style={{margin:"0", fontSize:"14px"}}>Login to your customer portal account</Title>
        </Col>
        </Row>
        <form
          className="text-left"
          id="loginForm"
        >       
          <InputFields rowClass="form-group relative" placeholder="Email Address" inputClass="formControl" inputIcon={<MailOutlined/>}  onChange={(e) => handlerChange(e)} />
          <InputFields rowClass="form-group relative eyeIcon mb-12" placeholder="Password"  type="password"  inputClass="formControl" suffix={<EyeIcon/>} inputIcon={<LockIcon/>}  onChange={(e) => handlerChange(e)} />
          <p style={{ textAlign: "right" }}>
            <Link to="/forgot-password">
              Forgot Password
            </Link>
          </p>
          <p className="dontAccount">
            Don’t have an account?
            <Link to="/signup">
              Sign Up
            </Link>
          </p>
           <Row style={{ display: "flex", width: "100%", justifyContent: "center" }} >
           <Button className="btn-save" >Login</Button>
          </Row>

        </form>
      </Row>

    </>
  )
}

export default Login