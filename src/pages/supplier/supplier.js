import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SearchField from '../../components/searchFIeld'
import AddButton from '../../components/addButton'
import TableList from '../../commonComponents/tableList'
import { SupplierAdminColumns, SupplierAdminData } from '../../commonComponents/tableData'


const Supplier = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Positiive | Suppliers </title>
                </Helmet>
            </HelmetProvider>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Supplier</h2>
                    <div className='flex justify-between searchWithButton'>
                        <SearchField placeholder="Search by name" />
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