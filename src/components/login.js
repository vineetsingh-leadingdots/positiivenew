import React from "react";
import  { useEffect } from "react";
import { useState } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HeaderLogin from "./headerLogin";
import { Link } from "react-router-dom";
import { Button, Col, Typography } from "antd";
import { Row, Image } from "antd";
import InputFields from "../commonComponents/inputFields";
import { EyeIcon, LockIcon, MailOutlined } from "../commonComponents/commonSvg";
import { useLoginUserMutation } from "../services/authApi";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../commonContent.js/validation";

const Login = () => {
  const [loginUser, { isSuccess: loginUserSuccess }] = useLoginUserMutation();
  const { Title } = Typography;
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errorData, setErrorData] = useState({
    emailError: "",
    passwordError: ""
  });

  const handlerChange = (e) => {
    const { name, value } = e.target;
    // Handle validation and set errors
    switch (name) {
      case "email":
        validateEmail(value, setErrorData);
        break;
      case "password":
        validatePassword(value, setErrorData);
        break;
      // Add cases for other form fields
      default:
        break;
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    if (loginUserSuccess) {
      navigate("/dashboard");
    }
  }, [loginUserSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let value = {
      email: formData?.email,
      password: formData?.password
    };
    loginUser(value);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Login </title>
        </Helmet>
      </HelmetProvider>
      <HeaderLogin />
      <Row className="loginArea bg-white ">
        <Row style={{ textAlign: "center" }}>
          <Col span={24}>
            <Image src="/images/logo.webp" width="144" className="mx-auto" />
          </Col>
          <Col span={24}>
            <Title level={4} style={{ textAlign: "center" }}>
              Welcome!
            </Title>
          </Col>
          <Col span={24}>
            <Title level={5} style={{ margin: "0", fontSize: "14px" }}>
              Login to your customer portal account
            </Title>
          </Col>
        </Row>
        <form className="text-left" id="loginForm">
          <InputFields
            rowClass="form-group relative"
            name="email"
            placeholder="Email Address"
            inputClass="formControl"
            inputIcon={<MailOutlined />}
            onChange={(e) => handlerChange(e)}
          />
          <p>{errorData?.emailError}</p>
          <InputFields
            rowClass="form-group relative eyeIcon mb-12"
            name="password"
            placeholder="Password"
            type={passwordShown ? "text" : "password"}
            inputClass="formControl"
            suffix={<EyeIcon setPasswordShown={setPasswordShown} passwordShown={passwordShown}/>}
            inputIcon={<LockIcon />}
            onChange={(e) => handlerChange(e)}
          />
          <p>{errorData?.passwordError}</p>
          <p style={{ textAlign: "right" }}>
            <Link to="/forgot-password">Forgot Password</Link>
          </p>
          <p className="dontAccount">
            Don’t have an account?
            <Link to="/signup">Sign Up</Link>
          </p>
          <Row
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <Button className="btn-save" onClick={handleSubmit}>
              Login
            </Button>
          </Row>
        </form>
      </Row>
    </>
  );
};

export default Login;
