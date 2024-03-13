import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SearchField from '../../components/searchFIeld'
import TableList from '../../commonComponents/tableList'
import { TransactionColumn, TransactionData } from '../../commonComponents/tableData'



const Transactions = () => {

    return (
        <>
         <HelmetProvider>
                <Helmet>
                    <title>Positiive | Transaction </title>
                </Helmet>
            </HelmetProvider>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Transactions</h2>
                    <div className='flex justify-between'>
                        <SearchField  placeholder="Search by name"/>                        
                    </div>
                </div>
                <div className='card '>
                    <div className='tableAreaMaster '>
                        <TableList data={TransactionData} columns={TransactionColumn} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Transactions