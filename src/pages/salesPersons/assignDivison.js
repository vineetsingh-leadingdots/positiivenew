import React from "react";
import { useState } from "react";
import { Modal } from 'antd';

const AssignDivisonPopup = () => {

    const [modal1Open, setModal1Open] = useState(false);
    const closeModal = () => {
        setModal1Open(false);
    };
    return (
        <>
            <button className="actionButton  " onClick={() => setModal1Open(true)}>
             Assign Divison
            </button>
            <Modal
                centered
                open={modal1Open}
                onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)}
                footer={false}
                closeIcon={false}
                zIndex="999999999999"
                width="480px"
                className="sharePopup-content"
            >
                <>
                    <button
                        className="close"
                        onClick={() => setModal1Open(false)}
                    >
                        <img src="/images/close-circle.svg" />
                    </button>
                    <h2> Assign Division</h2>
                    <div className="pt-6 ">
                    <div className=" w-full ">
                                <div className="form-group mb-6 ">
                                        <label className="formBlock mb-2 py-2">Divisions</label>
                                       <select className="formControl" >
                                      <option>Divisions1</option>
                                       </select>
                                    </div>
                                </div> 
                        <div className="flex justify-center gap-5 popupBtn pt-10">
                            <button className="btnBack submit ">Assign</button>
                            <button className="btnBack  " onClick={() => {
                                closeModal();
                                close();
                            }}
                            >Cancel</button>

                        </div>
                    </div>
                </>
            </Modal>
        </>
    );
};

export default AssignDivisonPopup;
