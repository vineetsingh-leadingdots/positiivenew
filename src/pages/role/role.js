import React from 'react'
import TableList from '../../commonComponents/tableList'
import { BrandColumns, BrandData } from '../../commonComponents/tableData'
import SearchField from '../../components/searchFIeld'
import AddButton from '../../components/addButton'


const Role = () => {

    return (
        <>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Roles</h2>
                    <div className='flex justify-between'>
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
                        <TableList data={BrandData} columns={BrandColumns} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Role