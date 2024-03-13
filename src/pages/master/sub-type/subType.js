import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';   
import SearchField from '../../../components/searchFIeld'
import AddButton from '../../../components/addButton'
import TableList from '../../../commonComponents/tableList'
import { SubTypesColumns, SubTypesData } from '../../../commonComponents/tableData'

const SubType = () => {

    return (
        <>
          <HelmetProvider>
                <Helmet>
                    <title>Positiive | SubTypes  </title>
                </Helmet>
            </HelmetProvider>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> SubTypes</h2>
                    <div className='flex justify-between searchWithButton'>
                        <SearchField  placeholder="Search by name"/>
                        <div className='btnRight'>
                            <AddButton
                                linkHref="/sub/type/add"
                                btnText="Add SubType"
                            />
                        </div>
                    </div>
                </div>
                <div className='card '>
                    <div className='tableAreaMaster '>
                        <TableList data={SubTypesData} columns={SubTypesColumns} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubType