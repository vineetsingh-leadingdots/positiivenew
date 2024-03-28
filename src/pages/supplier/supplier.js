import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../components/searchFIeld";
import AddButton from "../../components/addButton";
import TableList from "../../commonComponents/tableList";
import { SupplierAdminColumns } from "../../commonComponents/tableData";
import { useDeletesupplierMutation, useListsupplierQuery } from "../../services/supplierApi";
import { Link } from "react-router-dom";
import DeletePopup from "../../components/deletePopup";

const Supplier = () => {
  const { data: supplierListData } = useListsupplierQuery();
  const [ deleteSupplier ] = useDeletesupplierMutation();

  const deleteSupplierHandler = (id) => {
    deleteSupplier(id);
  };

  const tableData = supplierListData?.data.map((supplier) => ({
    key: supplier?.suppliers ? supplier?.id?.toString() : "",
    SupplierName: supplier?.suppliers
      ? supplier?.suppliers?.User?.fullName
      : "",
    Email: supplier?.suppliers ? supplier?.suppliers?.User?.email : "",
    Actions: (
      <div className="flex gap-1">
        <Link to="/supplier/add" className="actionButton">
          <i className="fa fa-pencil" />
        </Link>
        <Link to="/supplier/view" className="actionButton">
          <i className="fa fa-eye" />
        </Link>
        {/* <DeletePopup/> */}
        {/* <SupplierDelete deleteId={supplier?.id} refetch={refetch} /> */}
        <DeletePopup 
          onClick={() => deleteSupplierHandler(supplier?.id)} 
        />
      </div>
    ),
  }));

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Suppliers </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Supplier</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/supplier/add" btnText="Add Supplier" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={tableData} columns={SupplierAdminColumns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Supplier;
