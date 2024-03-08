import React, { useState } from "react";
import PrePlan from "./prePlan";
import { Button, Drawer, Space } from 'antd';
const Popup1 = () => {

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
                    Popup1
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
                <div className="createNew ">
                    <div className="close cursor-pointer absolute top-4 right-4" onClick={onClose}>
                        <img alt="close-circle" src="images/close-circle.svg" />
                    </div>
                    <div>
                        <h3>Wednesday May 2, 2023</h3>
                        <div className="w-full mt-10">
                            <label className="label">Reminder</label>
                            <button className="eventBtn"> LaNova Bistro Meeting</button>
                        </div>
                        <div className="w-full mt-10">
                            <label className="label flex justify-between">Orders <span
                                className="flex items-center"> <img
                                    src="images/basket.svg" />View all orders</span></label>
                            <button className="eventBtn order mb-4 "> Empire Packaging - #129829</button>
                            <button className="eventBtn order mb-4 "> Eastside Bistro & Lounge - #802128
                            </button>
                            <button className="eventBtn order  "> Dave’s Hot Chicken - #463271</button>
                        </div>
                        <div className="w-full mt-10">
                            <label className="label flex justify-between">Pre-plans </label>
                            <PrePlan />
                        </div>
                    </div>
                    <button className="btn-save flex items-center mt-6 justify-center btnSm mx-auto "> Create
                        new
                    </button>
                </div>
            </Drawer>


        </>
    )
}

export default Popup1