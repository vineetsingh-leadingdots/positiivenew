import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SearchField from '../../components/searchFIeld'
import AddButton from '../../components/addButton'
import TableList from '../../commonComponents/tableList'
import { ProductColumn, ProductListData } from '../../commonComponents/tableData'



const ProductList = () => {

    return (
        <>
         <HelmetProvider>
                <Helmet>
                    <title>Positiive | Product </title>
                </Helmet>
            </HelmetProvider>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Products</h2>
                    <div className='flex justify-between searchWithButton'>
                        <SearchField  placeholder="Search by name"/>
                        <div className='btnRight'>
                            <AddButton
                                linkHref="/product/add"
                                btnText="Add Product"
                            />
                        </div>
                    </div>
                </div>
                <div className='card '>
                    <div className='tableAreaMaster '>
                        <TableList data={ProductListData} columns={ProductColumn} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList