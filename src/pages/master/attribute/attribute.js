import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SearchField from '../../../components/searchFIeld'
import AddButton from '../../../components/addButton'
import TableList from '../../../commonComponents/tableList'
import { AttributeColumns, AttributeData, BrandColumns, BrandData } from '../../../commonComponents/tableData'

const Attribute = () => {

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Positiive | Attribute </title>
                </Helmet>
            </HelmetProvider>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Attribute</h2>
                    <div className='flex justify-between searchWithButton'>
                        <SearchField placeholder="Search by name" />
                        <div className='btnRight'>
                            <AddButton
                                linkHref="/attribute/add"
                                btnText="Add Attribute"
                            />
                        </div>
                    </div>
                </div>
                <div className='card '>
                    <div className='tableAreaMaster '>
                        <TableList data={AttributeData} columns={AttributeColumns} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Attribute