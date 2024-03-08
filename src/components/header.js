import React, { useState } from 'react'
import { Col, Row, Menu, Dropdown } from "antd";
import Divison from "./divison";
import { Drawer } from 'antd';
import Sidebar from './sidebar';
import { useLogoutUserMutation } from '../services/authApi';
const { Item } = Menu;
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slice/authSlice';

export function Header() {
    const [open, setOpen] = useState(false);
    const showDefaultDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    }
    const [ logoutUser ] = useLogoutUserMutation();
    const  dispatch = useDispatch();
    const handlelLogoutUser = () => {
        logoutUser();
        dispatch(logout());
    }

    const items = [
        {
            key: '1',
            label: (
                <button target="_blank" rel="noopener noreferrer">
                    Settings
                </button>
            ),
        },
        {
            key: '2',
            label: (
                <button target="_blank" rel="noopener noreferrer" onClick={handlelLogoutUser}>
                    Logout
                </button>
            ),
        },

    ];


    return (
        <>

            <Row className="topBar flex-row flex-nowrap justify-between ant-col-nowrap ">
                <Col className="topBarLeft">

                    <Divison />
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
                                <SearchIcon2/>
                            
                            </button>
                        </Col>

                        <div className="bellIcon padding toggleIcon md:hidden" onClick={showDefaultDrawer} >
                           <BurgerMenu/>
                        </div>
                        {/* <div className="bellIcon padding md:hidden searchIcon" >
                            <span className={searchShow ? "fa fa-times" : "fa fa-search"} />
                        </div> */}

                        <Col className="bellIcon padding cursor-pointer" >
                            <BellIcon/>
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


            <Drawer

                placement="left"
                zIndex={999999}
                onClose={onClose}
                open={open}
                width={296}

            >
                <div className={open ? "leftSidebar show" : "leftSidebar"}>                 
                   <span  onClick={onClose}>
                   <SidebarCloseIcon /></span>                  
                    <Sidebar />
                </div>
            </Drawer>


        </>
    );
}
