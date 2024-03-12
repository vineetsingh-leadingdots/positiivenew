import { useState } from "react";
import { Modal } from 'antd';

const DeletePopup = () => {

    const [modal1Open, setModal1Open] = useState(false);
    const closeModal = () => {
        setModal1Open(false);
    };
    return (
        <>
            <button className="actionButton delete " onClick={() => setModal1Open(true)}>
                <img src="/images/trash.svg"/>
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
                        <p>   You won't be able to revert this!</p>

                        <div className="flex justify-center gap-5 popupBtn pt-10">
                            <button className="btnBack submit ">Delete</button>
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

export default DeletePopup;
