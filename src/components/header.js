import React, { useState } from 'react'
import { Col, Row,  Menu, Dropdown } from "antd";
import Divison from "./divison";
import { Layout, Flex, Button } from 'antd'; 
import Sidebar from './sidebar';
const { Item } = Menu;

export function Header() {
    const [showSider, setShowSider] = useState(false); 

    const toggleSider = () => {
      setShowSider(!showSider); 
    };

    const toggleSiderClose = () => {
        setShowSider(!showSider); 
      };

    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">

                    Settings
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Logout
                </a>
            ),
        },

    ];
   

    return (
        <>

            <Row className="topBar flex-row flex-nowrap justify-between ant-col-nowrap ">
                <Col className="topBarLeft">               
                    
                <Divison/>
                </Col>
                <Col className="topBarRight flex justify-end w-full items-center ant-col-nowrap">
                    <Row className="topInfoArea ">
                        <Col className="searchSec" >
                            <input
                                type="text"
                                className="form_control"
                                placeholder="Search"
                            />
                            <button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                >
                                    <g opacity="0.6">
                                        <path
                                            d="M6.14286 11.2857C8.98318 11.2857 11.2857 8.98318 11.2857 6.14286C11.2857 3.30254 8.98318 1 6.14286 1C3.30254 1 1 3.30254 1 6.14286C1 8.98318 3.30254 11.2857 6.14286 11.2857Z"
                                            stroke="black"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M13.0001 13.0001L10.4287 10.4287"
                                            stroke="black"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                </svg>
                            </button>
                        </Col>
                   
                       <div className="bellIcon padding toggleIcon md:hidden" onClick={toggleSider} >
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                        </svg>
                        </div>
                        {/* <div className="bellIcon padding md:hidden searchIcon" >
                            <span className={searchShow ? "fa fa-times" : "fa fa-search"} />
                        </div> */}
                       
                        <Col className="bellIcon padding cursor-pointer" >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                            >
                                <path
                                    d="M20.268 17.1915C19.0642 15.7183 18.2144 14.9683 18.2144 10.9065C18.2144 7.18701 16.315 5.86186 14.7517 5.21826C14.544 5.13295 14.3486 4.93701 14.2853 4.72373C14.0111 3.79045 13.2423 2.96826 12.2204 2.96826C11.1986 2.96826 10.4294 3.79092 10.1579 4.72467C10.0947 4.94029 9.8992 5.13295 9.69154 5.21826C8.12639 5.86279 6.22888 7.18326 6.22888 10.9065C6.22654 14.9683 5.3767 15.7183 4.17295 17.1915C3.6742 17.8019 4.11107 18.7183 4.98342 18.7183H19.4622C20.3298 18.7183 20.7639 17.799 20.268 17.1915Z"
                                    stroke="#030229"
                                    strokeWidth="1.00189"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15.2216 18.7183V19.4684C15.2216 20.2641 14.9054 21.0273 14.3428 21.59C13.7801 22.1527 13.0169 22.4688 12.2211 22.4688C11.4254 22.4688 10.6622 22.1527 10.0995 21.59C9.53682 21.0273 9.2207 20.2641 9.2207 19.4684V18.7183"
                                    stroke="#030229"
                                    strokeWidth="1.00189"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Col>

                        <Col className="ant-col-nowrap flex-flow-nowrap">
                            <Dropdown className="profile padding cursor-pointer"
                                menu={{
                                    items,
                                }}
                                placement="bottomRight"
                            >
                                <img src="/images/profile.webp" />
                            </Dropdown>
                        </Col>
                    </Row>
                </Col>
            </Row>

          

      {showSider && (
        <>
        <div className={showSider ? "leftSidebar show" : "leftSidebar"}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" onClick={toggleSiderClose}>
         <path fill="none" d="M0 0h24v24H0z"/>
          < path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
        </svg>
        <Sidebar/>
        </div>
       
        </>
        )}

        </>
    );
}
