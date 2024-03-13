import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';   
import SearchField from '../../../components/searchFIeld'
import AddButton from '../../../components/addButton'
import TableList from '../../../commonComponents/tableList'
import { BrandColumns, BrandData, RegionsSubColumns, RegionsSubData } from '../../../commonComponents/tableData'

const SubRegion = () => {

    return (
        <>
         <HelmetProvider>
                <Helmet>
                    <title>Positiive | Sub Region  </title>
                </Helmet>
            </HelmetProvider>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'>Sub Regions</h2>
                    <div className='flex justify-between searchWithButton'>
                        <SearchField  placeholder="Search by name"/>
                        <div className='btnRight'>
                            <AddButton
                                linkHref="/sub/region/add"
                                btnText="Add Region"
                            />
                        </div>
                    </div>
                </div>
                <div className='card '>
                    <div className='tableAreaMaster '>
                        <TableList data={RegionsSubData} columns={RegionsSubColumns} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubRegion