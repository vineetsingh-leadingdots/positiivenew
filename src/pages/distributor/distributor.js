import React from "react";
import SearchField from "../../components/searchFIeld";
import AddButton from "../../components/addButton";
import TableList from "../../commonComponents/tableList";
import {
  DistributorAdminColumns
} from "../../commonComponents/tableData";
import { useDeletedistributorMutation, useListdistributorQuery } from "../../services/distributorApi";
import { Link } from "react-router-dom";
import DeletePopup from "../../components/deletePopup";

const Distributor = () => {
  const { data: distributorListData } = useListdistributorQuery();
  const [ deletedistributor ] = useDeletedistributorMutation();

  const deletedistributorHandler = (id) => {
    deletedistributor(id);
  };

  const tableData = distributorListData?.data.map((distributor) => ({
    key: distributor ? distributor?.id?.toString() : "",
    distributorName: distributor?.fullName,
    Email: distributor?.email,
    Actions: (
      <div className="flex gap-1">
        <Link to="/distributor/add" className="actionButton">
          <i className="fa fa-pencil" />
        </Link>
        <Link to="/distributor/view" className="actionButton">
          <i className="fa fa-eye" />
        </Link>
        {/* <DeletePopup/> */}
        {/* <distributorDelete deleteId={distributor?.id} refetch={refetch} /> */}
        <DeletePopup 
          onClick={() => deletedistributorHandler(distributor?.id)} 
        />
      </div>
    ),
  }));

  return (
    <>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Distributor</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton
                linkHref="/distributor/add"
                btnText="Add Distributor"
              />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList
              data={tableData}
              columns={DistributorAdminColumns}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Distributor;
