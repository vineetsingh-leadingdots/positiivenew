import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import TableList from '../../commonComponents/tableList'
import {  RoleColumn } from '../../commonComponents/tableData'
import { useListroleQuery } from '../../services/roleApi';
import SearchField from '../../components/searchFIeld'
import AddButton from '../../components/addButton'

import { Link } from 'react-router-dom';
import DeletePopup from '../../components/deletePopup';


const Role = () => {

    const { data: roleListData, refetch } = useListroleQuery();


     useEffect(() => {
        refetch();
    }, [ roleListData ]);

    console.log(typeof(roleListData));
    const tableData = roleListData?.data.map((role) => (
        {
        key: role?.id.toString(),
      Name: role?.name,    
      Actions: <>
      <div className="flex gap-1">
      <Link to="/role/add" className="actionButton"><i className="fa fa-pencil"/></Link>
      {/* <button onClick={() => navigate("/role/add", { state: { roleData: role } })} className="actionButton">
        <i className="fa fa-pencil" />
       </button> */}
      <DeletePopup
        roledeleteId={role?.id}
        refetchRole={refetch}
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
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Roles</h2>
                    <div className='flex justify-between searchWithButton'>
                        <SearchField  placeholder="Search by name"/>
                        <div className='btnRight'>
                            <AddButton
                                linkHref="/role/add"
                                btnText="Add Role"
                            />
                        </div>
                    </div>
                </div>
                <div className='card '>
                    <div className='tableAreaMaster '>
                        <TableList data={tableData} columns={RoleColumn} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Role