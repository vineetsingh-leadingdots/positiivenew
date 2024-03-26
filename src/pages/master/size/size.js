import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../../components/searchFIeld";
import AddButton from "../../../components/addButton";
import TableList from "../../../commonComponents/tableList";
import { SizeColumns } from "../../../commonComponents/tableData";
import { useDeleteSizeMutation, useListSizeQuery } from "../../../services/sizeApi";
import DeletePopup from "../../../components/deletePopup";
import { useNavigate } from "react-router-dom";

const Size = () => {
  const { data: sizeListData, refetch } = useListSizeQuery();
  const [ deleteSize, { data: dataSizeSuccess } ] = useDeleteSizeMutation(); 
  const navigate = useNavigate();

  const [modal1Open, setModal1Open] = useState(false); 
  const closeModal = () => {
      setModal1Open(false);
  };

  useEffect(() => {
    refetch();
  }, [sizeListData, dataSizeSuccess]);


  const deleteSizeHandler = (id) => {
    deleteSize(id);
    setModal1Open(false);
  };


  const sizeData = sizeListData?.data.map((size) => ({
    key: size?.id?.toString(),
    Name: size?.name,
    Actions: (
      <div className="flex gap-1">
        <button
          onClick={() =>
            navigate("/size/add", { state: { sizeDataList: size } })
          }
          className="actionButton"
        >
          <i className="fa fa-pencil" />
        </button>
        <DeletePopup onClick={() => deleteSizeHandler(size?.id)}
          setModal1Open={setModal1Open}
          closeModal={closeModal}
          modal1Open={modal1Open}
        />
      </div>
    ),
  }));
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Size </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Size</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/size/add" btnText="Add Size" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={sizeData} columns={SizeColumns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Size;
