import React, { useState } from "react";
import SharePopup from '../sharePopup'

import { Col, Row, Popover } from "antd";
import { DotsIcon, HeartIcon, ShareIcon } from "../../../commonComponents/commonSvg";
import ExperienceItem from "./experienceItem";
import SendExperience from "../sendExperience";
const products = [
    {
      productImg: "/images/image58.webp",
      btnClass: "btn-beer wine absolute bottom-7 left-24",
      btnText: "Beer",
      heading: "USA, California",
      description: "Special Offer",
      deal: " Best Deal ",
      cases: "5 cases",
      bottleNumber: "$19.99",
      savingImg:"/images/dollar.svg",
      percentage:"62%",
      taste:"Taste",
      tasteImgOne:"/images/meadowsweet1.svg",
      tasteImgTwo:"/images/orientalgrapefruit.svg",
      Nose:"Nose",
      noseImg:"/images/kaffirlime1.svg",
      noseImg2:"/images/angelicaroot1.svg",
      countryName:"Ireland",
      region:"Dublin",
      vintage:"2012",
      supplier:"Pernod Ricard"


    },
    
 
  ];
const ExperiencesTab = () => {
// const [show2, setShow2] = useState()
// const OpenPopup2 = () => {
// setShow2(true)
// setShowDropdown(!showDropdown)
// }
// const ClosePopup2 = () => {
// setShow2(false)
// }


return (
<>
<div className="px-2 pt-6 pb-4 ">
<div className=" w-full viewExperence">
<div className="w-full ">
<div className="ligthGary">
    <div
        className="mostRecentArea">
        <div className="sortBy ml-auto">
            <select className="form_control h32">
                <option>Most recent</option>
            </select>
        </div>
        <div className=" ml-auto">
        <button
            className="btn-save flex items-center gap-3 btnSm md:w-auto w-full ">
            <svg xmlns="http://www.w3.org/2000/svg" width="18"
                height="13" viewBox="0 0 18 13" fill="none">
                <path d="M8.98145 0.5V12.5" stroke="white"
                    strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.37305 6.5H16.5919" stroke="white"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Create an Experience
        </button>
        </div>
        <div className=" ml-auto">
        <SharePopup />
    </div>
    </div>
    <div
        className="w-full newProductHeading  ">
        <div className="mb-4 md:mb-0">
            <h2>New Pernod Products</h2>
            <p className="label2 pt-1">July 21, 2022</p>
        </div>
        <div>
            <div
                className="flex newProductBtns ">
                <button
                    className="flex gap-1 textBlue items-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="16" height="17" viewBox="0 0 16 17"
                        fill="none">
                        <path
                            d="M7.93978 6.27078V11.2719M10.4212 8.77133H5.45836M13.8952 8.77133C13.8952 5.45811 11.2277 2.77002 7.93978 2.77002C4.6519 2.77002 1.98438 5.45811 1.98438 8.77133C1.98438 12.0846 4.6519 14.7726 7.93978 14.7726C11.2277 14.7726 13.8952 12.0846 13.8952 8.77133Z"
                            stroke="#264653" strokeWidth="1.00189"
                            strokeLinecap="round" />
                    </svg>
                    Add products
                </button>
              <SendExperience/>
                <button
                    className="flex gap-1 textBlue items-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" viewBox="0 0 16 16"
                        fill="none">
                        <path
                            d="M12.6431 9.4134C12.4374 9.61329 12.3429 9.90238 12.3898 10.1859L13.0958 14.1042C13.1554 14.4363 13.0156 14.7723 12.7384 14.9643C12.4668 15.1634 12.1054 15.1873 11.8092 15.028L8.29158 13.1883C8.16927 13.123 8.03346 13.088 7.89447 13.084H7.67923C7.60458 13.0951 7.53151 13.119 7.46479 13.1557L3.94639 15.0041C3.77246 15.0917 3.57549 15.1228 3.38249 15.0917C2.91231 15.0025 2.5986 14.5533 2.67564 14.0795L3.38249 10.1612C3.42935 9.87531 3.33484 9.58462 3.12914 9.38154L0.2612 6.59416C0.0213454 6.36081 -0.0620479 6.0104 0.0475547 5.69423C0.15398 5.37886 0.425604 5.1487 0.753618 5.09693L4.7009 4.52273C5.00112 4.49167 5.2648 4.3085 5.39982 4.03773L7.13916 0.46191C7.18046 0.38227 7.23368 0.309002 7.29801 0.246883L7.36949 0.191135C7.40681 0.149722 7.4497 0.115477 7.49736 0.0876035L7.58393 0.0557477L7.71894 0H8.05331C8.35194 0.0310594 8.61483 0.210249 8.75223 0.477837L10.5146 4.03773C10.6417 4.29815 10.8887 4.47893 11.1738 4.52273L15.1211 5.09693C15.4547 5.14472 15.7334 5.37567 15.8438 5.69423C15.9479 6.01358 15.8581 6.364 15.6135 6.59416L12.6431 9.4134Z"
                            fill="#264653" />
                    </svg>
                    Remove from favorites
                </button>
            </div>
            <div className="text-right pt-4">
                <p className="text-[12px] textBlue opacity-70">Sent
                    to 3 customers</p>
            </div>
        </div>
    </div>
    <Row gutter={[8, 16]}>
        <Col md={12} lg={12} xl={8}>
        <div
            className="experienceBox">
                 {products.map((product, index) => (
              <ExperienceItem
                key={index} 
                productImg={product.productImg}
                btnClass={product.btnClass}
                btnText={product.btnText}
                heading={product.heading}
                description={product.description}
                deal={product.deal}
                cases={product.cases}
                bottleNumber={product.bottleNumber}
                savingImg={product.savingImg}
                percentage={product.percentage}
                taste={product.taste}
                tasteImgOne={product.tasteImgOne}
                tasteImgTwo={product.tasteImgTwo}
                Nose={product.Nose}
                noseImg={product.noseImg}
                noseImg2={product.noseImg2}
                countryName={product.countryName}
                region={product.region}
                vintage={product.vintage}
                supplier={product.supplier}
                
          
              />
            ))}
           
        </div>  
        </Col>
    </Row>
</div>
</div>
</div>
</div>
</>
)
}

export default ExperiencesTab