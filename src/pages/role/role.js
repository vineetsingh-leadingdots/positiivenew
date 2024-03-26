import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import TableList from "../../commonComponents/tableList";
import { RoleColumn } from "../../commonComponents/tableData";
import { useListroleQuery, useDeleteroleMutation } from '../../services/roleApi';
import SearchField from "../../components/searchFIeld";
import AddButton from "../../components/addButton";

import DeletePopup from '../../components/deletePopup';
import { useNavigate } from "react-router-dom";


const Role = () => {

    const { data: roleListData, refetch } = useListroleQuery();
    const [ deleteRole, { isSuccess: deleteRoleSuccess} ] = useDeleteroleMutation();
    const navigate = useNavigate();
    const [modal1Open, setModal1Open] = useState(false); 
    const closeModal = () => {
        setModal1Open(false);
    };
  
     useEffect(() => {
        refetch();
    }, [ roleListData, deleteRoleSuccess ]);

    const deleteRoleHandler = (id) => {
      deleteRole(id);
      setModal1Open(false);
    };
    
    const tableData = roleListData?.data.map((role) => (
        {
        key: role?.id.toString(),
      Name: role?.name,    
      Actions: <>
      <div className="flex gap-1">
      {/* <Link to="/role/add" className="actionButton"><i className="fa fa-pencil"/></Link> */}
      <button onClick={() => navigate("/role/add", { state: { roleData: role } })} className="actionButton">
        <i className="fa fa-pencil" />
       </button>
       <DeletePopup onClick={() => deleteRoleHandler(role?.id)} 
          setModal1Open={setModal1Open}
          closeModal={closeModal}
          modal1Open={modal1Open}
        />
      </div>
      </>,
    }
    ));
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Role </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Roles</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/role/add" btnText="Add Role" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={tableData} columns={RoleColumn} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Role;
