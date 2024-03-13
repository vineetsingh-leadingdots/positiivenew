import React from 'react'
import SearchField from '../../components/searchFIeld'
import AddButton from '../../components/addButton'
import TableList from '../../commonComponents/tableList'
import {  DistributorAdminColumns, DistributorAdminData} from '../../commonComponents/tableData'


const Distributor = () => {

    return (
        <>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Distributor</h2>
                    <div className='flex justify-between searchWithButton'>
                        <SearchField  placeholder="Search by name"/>
                        <div className='btnRight'>
                            <AddButton
                                linkHref="/distributor/add"
                                btnText="Add Distributor"
                            />
                        </div>
                    </div>
                </div>
                <div className='card '>
                    <div className='tableAreaMaster '>
                        <TableList data={DistributorAdminData} columns={DistributorAdminColumns} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Distributor