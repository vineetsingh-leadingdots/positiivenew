import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SearchField from '../../components/searchFIeld'
import AddButton from '../../components/addButton'
import TableList from '../../commonComponents/tableList'
import { SalesPersonColumns, SalesPersonData } from '../../commonComponents/tableData'



const SalesPerson = () => {

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Positiive | Sales Person </title>
                </Helmet>
            </HelmetProvider>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Sales Persons List</h2>
                    <div className='flex justify-between searchWithButton'>
                        <SearchField placeholder="Search by name" />
                        <div className='btnRight flex gap-2'>
                            <AddButton
                                linkHref="/sales-person/add"
                                btnText="Add Sales Persons"
                            />
                            <select className='rounded px-2'>
                                <option>10</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='card '>
                    <div className='tableAreaMaster '>
                        <TableList data={SalesPersonData} columns={SalesPersonColumns} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SalesPerson