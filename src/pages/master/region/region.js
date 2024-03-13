import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';   
import SearchField from '../../../components/searchFIeld'
import AddButton from '../../../components/addButton'
import TableList from '../../../commonComponents/tableList'
import {RegionsColumns, RegionsData } from '../../../commonComponents/tableData'

const Region = () => {

    return (
        <>
         <HelmetProvider>
                <Helmet>
                    <title>Positiive | Region  </title>
                </Helmet>
            </HelmetProvider>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'>Regions</h2>
                    <div className='flex justify-between searchWithButton'>
                        <SearchField  placeholder="Search by name"/>
                        <div className='btnRight'>
                            <AddButton
                                linkHref="/region/add"
                                btnText="Add Region"
                            />
                        </div>
                    </div>
                </div>
                <div className='card '>
                    <div className='tableAreaMaster '>
                        <TableList data={RegionsData} columns={RegionsColumns} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Region