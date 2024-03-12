import React from 'react'
import SearchField from '../../components/searchFIeld'
import AddButton from '../../components/addButton'
import TableList from '../../commonComponents/tableList'
import { BrandColumns, BrandData, SupplierAdminColumns, SupplierAdminData } from '../../commonComponents/tableData'


const Supplier = () => {

    return (
        <>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Supplier</h2>
                    <div className='flex justify-between'>
                        <SearchField  placeholder="Search by name"/>
                        <div className='btnRight'>
                            <AddButton
                                linkHref="/supplier/add"
                                btnText="Add Supplier"
                            />
                        </div>
                    </div>
                </div>
                <div className='card '>
                    <div className='tableAreaMaster '>
                        <TableList data={SupplierAdminData} columns={SupplierAdminColumns} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Supplier