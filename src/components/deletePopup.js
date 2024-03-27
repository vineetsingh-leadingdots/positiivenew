
import React from "react";
import { Modal } from 'antd';

const DeletePopup = ({onClick, modal1Open, closeModal, setModal1Open}) => {

    return (
        <>
            <button className="actionButton delete " onClick={() => setModal1Open(true)}>
               <i className="fa fa-trash"/>
            </button>
            <Modal
                centered
                open={modal1Open}
                onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)}
                footer={false}
                closeIcon={false}
                zIndex="999999999999"
                width="400px"
                className="sharePopup-content"
            >
                <>
                    <button
                        className="close"
                        onClick={() => setModal1Open(false)}
                    >
                        <img src="/images/close-circle.svg" />
                    </button>
                    <h2> Are you sure?</h2>
                    <div className="pt-6 deleteContent">
                        <p>You would not be able to revert this!</p>

                        <div className="flex justify-center gap-5 popupBtn pt-10">
                            <button 
                                className="btnBack submit " 
                                onClick={onClick}
                            >
                                Delete
                            </button>
                            <button className="btnBack  " onClick={() => {
                                closeModal();
                                //close();
                            }}
                            >Cancel</button>

                        </div>
                    </div>
                </>
            </Modal>
        </>
    );
};

export default DeletePopup;
