import { useState } from "react";
import { Modal } from 'antd';
import { useDeleteBrandMutation } from "../services/brandApi";
import { useEffect } from "react";
import { useDeleteAttributeMutation } from "../services/attributeApi";
import { useDeleteRatingMutation } from "../services/ratingApi";

const DeletePopup = ({deleteId, attributeDeleteId, ratingdeleteId, refetch, refetchAttribute, refetchRating}) => {
    const [ deleteBrand, { isSuccess: deleteBrandSuccess }] = useDeleteBrandMutation();
    const [ deleteAttribute, { isSuccess: deleteAttributeSuccess }] = useDeleteAttributeMutation();
    const [ deleteRating, { isSuccess: deleteRatingSuccess }] = useDeleteRatingMutation();
    const [modal1Open, setModal1Open] = useState(false); 
    const closeModal = () => {
        setModal1Open(false);
    };
    const handleDelete = (e) => {
        e.preventDefault();
        if(deleteId){
            deleteBrand(deleteId);
        }
        else if(attributeDeleteId){
            deleteAttribute(attributeDeleteId);
        }
        else if(ratingdeleteId){
            deleteRating(ratingdeleteId);
        }
    };

    useEffect(() => {
        if(deleteBrandSuccess){
            refetch();
            closeModal();
        }
        else if(deleteAttributeSuccess){
            refetchAttribute();
            closeModal();
        }
        else if(deleteRatingSuccess){
            refetchRating();
            closeModal();
        }
    }, [ deleteBrandSuccess, deleteAttributeSuccess, deleteRatingSuccess ]);
    
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
