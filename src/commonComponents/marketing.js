import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const Marketing = () => {
  return (
    <>
      <div className="tabsSec pt-7">
        <div className="marketingArea">
          <Row className="w-full marketingBox">
            <Col className="marketingBoxItem">
              <h4>Makers Mark Story</h4>
              <div className="marketImage">
                <img src="/images/image58.webp" />
                <Link className="iconCard" to="/">
                  <img src="/images/image57.webp" />
                </Link>
              </div>
            </Col>
            <Col className="marketingBoxItem">
              <h4>How to make the perfect Manhattan</h4>
              <div className="marketImage">
                <img src="/images/image60.webp" />
                <Link className="iconCard" to="/">
                  <img src="/images/image63.webp" />
                </Link>
              </div>
            </Col>
            <Col className="marketingBoxItem">
              <h4>Cocktail Ideas with Makers</h4>
              <div className="marketImage">
                <img src="/images/image61.webp" />
                <Link className="iconCard" to="/">
                  <img src="/images/image57.webp" />
                </Link>
              </div>
            </Col>
            <Col className="marketingBoxItem">
              <h4>Makers Party in Brooklyn</h4>
              <div className="marketImage">
                <img src="/images/image59.webp" />
                <Link className="iconCard" to="/">
                  <img src="/images/image57.webp" />
                </Link>
              </div>
            </Col>
            <Col className="marketingBoxItem">
              <h4>More cocktail Ideas</h4>
              <div className="marketImage">
                <img src="/images/image68.webp" />
                <Link className="iconCard" to="/">
                  <img src="/images/image65.webp" />
                </Link>
              </div>
            </Col>
            <Col className="marketingBoxItem">
              <h4>Makers Party in NYC</h4>
              <div className="marketImage">
                <img src="/images/image66.webp" />
                <Link className="iconCard" to="/">
                  <img src="/images/image64.webp" />
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Marketing;
