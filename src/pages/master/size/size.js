import React from 'react'
import SearchField from '../../../components/searchFIeld'
import AddButton from '../../../components/addButton'
import TableList from '../../../commonComponents/tableList'
import { BrandColumns, BrandData } from '../../../commonComponents/tableData'

const Size = () => {

    return (
        <>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Size</h2>
                    <div className='flex justify-between'>
                        <SearchField  placeholder="Search by name"/>
                        <div className='btnRight'>
                            <AddButton
                                linkHref="/size/add"
                                btnText="Add Size"
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

export default Size