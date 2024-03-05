import { Col, Row } from 'antd'
import React from 'react'

const TechSheet = () => {
  return (
    <>
         <div className="tabsSec pt-7">
      <Row className="flex px-5 techSheet " gutter={[20 ,16]}>
        <Col sm={12} md={8} >
          <img src="/images/t.webp" />
        </Col>
        <Col sm={12} md={8} >
          <img src="/images/t2.webp" />
        </Col>
        <Col  sm={12} md={8} >
          <img src="/images/t2.webp" />
        </Col>
        <Col sm={12} md={8} >
          <img src="/images/t2.webp" />
        </Col>
      </Row>
      </div>
    </>
  )
}

export default TechSheet