import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Drawer, Space } from 'antd';
const Popup2 = () => {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState();
    const showDefaultDrawer = () => {
        setSize('default');
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>

            <Space>
                <Button type="primary" onClick={showDefaultDrawer}>
                Popup2
                </Button>
            </Space>
            <Drawer

                placement="left"
                size={size}
                zIndex={999999}
                onClose={onClose}
                open={open}
                width={397}

            >
                <div className="createNewPopup">
                    <div className="createNew ">
                        <div>
                            <div className="close cursor-pointer absolute top-4 right-4"  onClick={onClose}>
                                <img src="images/close-circle.svg" />
                            </div>
                            <h3>Wednesday May 2, 2023</h3>
                            <div className="popupLink mt-4 mb-6">
                                <p>Day View / <Link to="/">Create New</Link></p>
                            </div>
                            <form>
                                <div className="w-full mb-6">
                                    <label className="label">Select type</label>
                                    <div className="formGroup">
                                        <select className="form_control ">
                                            <option>Select one</option>
                                            <option>Meet with customer</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-full mb-8">
                                    <label className="label">Select customer</label>
                                    <div className="formGroup">
                                        <select className="form_control ">
                                            <option>Select one</option>
                                            <option>Meet with customer</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex mb-8 w-full ">
                                    <div className="w-32 mr-10">
                                        <label className="label">Start time</label>
                                        <div className="formGroup">
                                            <select className="form_control ">
                                                <option>12:00 PM</option>
                                                <option>01:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-32">
                                        <label className="label">End time</label>
                                        <div className="formGroup">
                                            <select className="form_control ">
                                                <option>12:00 PM</option>
                                                <option>01:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mb-2">
                                    <label className="label">Add notes</label>
                                    <div className="formGroup">
                                        <textarea className="form_control h-16 " placeholder="Description for your meeting">
                                        </textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="w-full border-t pt-6 pb-5 text-center mt-5">
                            <button
                                className="btn-save  flex items-center justify-center btnSm mx-auto mb-6 "> Save
                            </button>
                            <button className="btnCancel">Cancel</button>
                        </div>
                    </div>
                </div>
            </Drawer>


        </>
    )
}

export default Popup2