import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";

const AttributeAdd = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='content masterPages'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Attribute Add</h2>
                </div>
                <div className='card p-8 '>
                    <div className="formArea ">
                        <form id="brandAdd">                        
                                <div className=" w-full ">
                                    <div className="form-group mb-6 ">
                                        <label className="formBlock mb-2 py-2">Name *</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter Attribute name"
                                            className="formControl"
                                        />
                                    </div>
                                </div>                  

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
                                        onClick={() => navigate("/attribute/list")}
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

export default AttributeAdd