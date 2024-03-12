import { Col, Row } from 'antd';
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";

const MemberAdd = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='content masterPages'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Member Add</h2>
                </div>
                <div className='card p-8 '>
                    <div className="formArea mt-5">
                        <form id="brandAdd">
                            <Row gutter={[16, 0]}>
                                <Col xs={24} md={4}>
                                <div className=" w-full ">
                                <div className="form-group mb-6 ">
                                        <label className="formBlock mb-2 py-2">Title *</label>
                                       <select className="formControl" >
                                      <option>Mr.</option>
                                       </select>
                                    </div>
                                </div> 
                                </Col>
                                <Col xs={24} md={10}>
                                <div className=" w-full ">
                                    <div className="form-group mb-6 ">
                                        <label className="formBlock mb-2 py-2">First Name *</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter member first name"
                                            className="formControl"
                                        />
                                    </div>
                                </div>  
                                </Col>
                                <Col xs={24} md={10}>
                                <div className=" w-full ">
                                    <div className="form-group mb-6 ">
                                        <label className="formBlock mb-2 py-2">Last Name *</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter member first name"
                                            className="formControl"
                                        />
                                    </div>
                                </div>  
                                </Col>                                
                            </Row>

                            <Row gutter={[16, 0]}>                           
                                <Col xs={24} md={12}>
                                <div className=" w-full ">
                                    <div className="form-group mb-6 ">
                                        <label className="formBlock mb-2 py-2">Phone Number *</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter phone number"
                                            className="formControl"
                                        />
                                    </div>
                                </div>  
                                </Col>
                                <Col xs={24} md={12}>
                                <div className=" w-full ">
                                    <div className="form-group mb-6 ">
                                        <label className="formBlock mb-2 py-2">Alternate Phone No.</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter alternate phone number"
                                            className="formControl"
                                        />
                                    </div>
                                </div>  
                                </Col>      
                                <Col xs={24} md={12}>
                                <div className=" w-full ">
                                    <div className="form-group mb-6 ">
                                        <label className="formBlock mb-2 py-2">Role</label>
                                        <select className="formControl" >
                                            <option>role1</option>
                                        </select>
                                    </div>
                                </div>  
                                </Col>                            
                                <Col xs={24} md={12}>
                                <div className=" w-full ">
                                    <div className="form-group mb-6 ">
                                        <label className="formBlock mb-2 py-2">Email</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter email address"
                                            className="formControl"
                                        />
                                    </div>
                                </div>  
                                </Col>  
                                <Col xs={24} md={12}>
                                <div className=" w-full ">
                                    <div className="form-group mb-6 ">
                                        <label className="formBlock mb-2 py-2">Password *</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter password"
                                            className="formControl"
                                        />
                                    </div>
                                </div>  
                                </Col>  
                                <Col xs={24} md={12}>
                                <div className=" w-full ">
                                    <div className="form-group mb-6 ">
                                        <label className="formBlock mb-2 py-2">Confirm Password *</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter confirm password"
                                            className="formControl"
                                        />
                                    </div>
                                </div>  
                                </Col>  
                            </Row>                 

                            <div className="w-full formFooter">
                                <div className=" form-group pt-8 pb-3 flex  gap-3 ">
                                    <button
                                        type="submit"
                                        className=" btn-save btnSm "
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => navigate("/member/list")}
                                        className="btn-cancel btnSm "
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MemberAdd