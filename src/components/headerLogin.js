import React from "react";
import { Col, Row, Image } from "antd";

const HeaderLogin = () => {
  return (
    <>
      <Row className="headerLogin">
        <Col span={24}>
          <Image src="/images/logo.webp" />
        </Col>
      </Row>
    </>
  );
};

export default HeaderLogin;
