import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SearchField from '../../../components/searchFIeld'
import AddButton from '../../../components/addButton'
import TableList from '../../../commonComponents/tableList'
import { BrandColumns, BrandData } from '../../../commonComponents/tableData'

const Brand = () => {

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Positiive | Brand  </title>
                </Helmet>
            </HelmetProvider>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Brands</h2>
                    <div className='flex justify-between searchWithButton'>
                        <SearchField placeholder="Search by name" />
                        <div className='btnRight'>
                            <AddButton
                                linkHref="/brand/add"
                                btnText="Add Brands"
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

export default Brand