import { useState } from "react";
import { Modal } from 'antd';
import { useDeletesupplierMutation } from "../services/supplierApi";
import { useEffect } from "react";

const SupplierDelete = ({deleteId, refetch}) => {
    const [ deleteSupplier, { isSuccess: deleteSupplierSuccess }] = useDeletesupplierMutation();
    const [modal1Open, setModal1Open] = useState(false);
    const closeModal = () => {
        setModal1Open(false);
    };
    const handleDelete = (e) => {
        e.preventDefault();
        deleteSupplier(deleteId);
    };

    useEffect(() => {
        if(deleteSupplierSuccess){
            refetch();
            closeModal();
        }
    }, [ deleteSupplierSuccess ]);
    
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
                            <button 
                                className="btnBack submit " 
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
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

export default SupplierDelete;
