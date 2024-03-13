import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SearchField from '../../../components/searchFIeld'
import AddButton from '../../../components/addButton'
import TableList from '../../../commonComponents/tableList'
import { CategoryColumns, CategoryData } from '../../../commonComponents/tableData'

const Category = () => {

    return (
        <>
          <HelmetProvider>
                <Helmet>
                    <title>Positiive | Category   </title>
                </Helmet>
            </HelmetProvider>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Category</h2>
                    <div className='flex justify-between searchWithButton'>
                        <SearchField  placeholder="Search by name"/>
                        <div className='btnRight'>
                            <AddButton
                                linkHref="/category/add"
                                btnText="Add Category"
                            />
                        </div>
                    </div>
                </div>
                <div className='card '>
                    <div className='tableAreaMaster '>
                        <TableList data={CategoryData} columns={CategoryColumns} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category