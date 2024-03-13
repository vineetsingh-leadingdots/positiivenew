import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';   
import SearchField from '../../../components/searchFIeld'
import AddButton from '../../../components/addButton'
import TableList from '../../../commonComponents/tableList'
import { StylesColumns, StylesData } from '../../../commonComponents/tableData'

const Style = () => {

    return (
        <>
         <HelmetProvider>
                <Helmet>
                    <title>Positiive | Style  </title>
                </Helmet>
            </HelmetProvider>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'>Styles</h2>
                    <div className='flex justify-between searchWithButton'>
                        <SearchField  placeholder="Search by name"/>
                        <div className='btnRight'>
                            <AddButton
                                linkHref="/style/add"
                                btnText="Add Rating"
                            />
                        </div>
                    </div>
                </div>
                <div className='card '>
                    <div className='tableAreaMaster '>
                        <TableList data={StylesData} columns={StylesColumns} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Style