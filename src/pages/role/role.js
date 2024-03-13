import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import TableList from '../../commonComponents/tableList'
import {  RoleColumn, RoleData } from '../../commonComponents/tableData'
import SearchField from '../../components/searchFIeld'
import AddButton from '../../components/addButton'


const Role = () => {

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
                        <TableList data={RoleData} columns={RoleColumn} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Role