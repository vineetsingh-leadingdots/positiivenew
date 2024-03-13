import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'; 
import SearchField from '../../../components/searchFIeld'
import AddButton from '../../../components/addButton'
import TableList from '../../../commonComponents/tableList'
import { BrandColumns, BrandData, TypeColumns, TypeData } from '../../../commonComponents/tableData'

const Type = () => {

    return (
        <>
         <HelmetProvider>
                <Helmet>
                    <title>Positiive | Type </title>
                </Helmet>
            </HelmetProvider>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Type</h2>
                    <div className='flex justify-between searchWithButton'>
                        <SearchField  placeholder="Search by name"/>
                        <div className='btnRight'>
                            <AddButton
                                linkHref="/type/add"
                                btnText="Add Type"
                            />
                        </div>
                    </div>
                </div>
                <div className='card '>
                    <div className='tableAreaMaster '>
                        <TableList data={TypeData} columns={TypeColumns} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Type