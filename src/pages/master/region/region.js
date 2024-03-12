import React from 'react'
import SearchField from '../../../components/searchFIeld'
import AddButton from '../../../components/addButton'
import TableList from '../../../commonComponents/tableList'
import { BrandColumns, BrandData } from '../../../commonComponents/tableData'

const Region = () => {

    return (
        <>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'>Regions</h2>
                    <div className='flex justify-between'>
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
                        <TableList data={BrandData} columns={BrandColumns} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Region