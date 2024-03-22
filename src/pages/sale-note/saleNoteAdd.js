import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Col, Row, DatePicker } from 'antd';
import { useNavigate } from "react-router-dom";

const SaleNoteAdd = () => {
    const navigate = useNavigate()

    return (
        <>
         <HelmetProvider>
                <Helmet>
                    <title>Positiive | Sale-Note-Add </title>
                </Helmet>
            </HelmetProvider>
            <div className='content masterPages'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Add Sale Note</h2>
                </div>
                <div className='card p-8 '>
                    <div className="formArea mt-5">
                        <form id="brandAdd">
                            <Row >
                            <Col xs={24} >
                                    <div className=" w-full ">
                                        <div className="form-group mb-6 ">
                                            <label className="formBlock mb-2 py-2">Sale Note</label>
                                            <textarea
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="Enter note"
                                                className="formControl"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} >
                                    <div className=" w-full ">
                                        <div className="form-group mb-6 ">
                                            <label className="formBlock mb-2 py-2">Date</label>
                                            
                                             <DatePicker  className="formControl"/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="w-full formFooter">
                                <div className=" form-group pt-8 pb-3 flex  gap-3 ">
                                    <button
                                        type="submit"
                                        className=" btn-save btnSm " >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => navigate(-1)}
                                        className="btn-cancel btnSm " >
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

export default SaleNoteAdd