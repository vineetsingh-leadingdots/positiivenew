import React from 'react'
import SearchField from '../../components/searchFIeld'
import AddButton from '../../components/addButton'
import TableList from '../../commonComponents/tableList'
import {  NewsColumn, NewsData } from '../../commonComponents/tableData'


const News = () => {

    return (
        <>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> News</h2>
                    <div className='flex justify-between'>
                        <SearchField  placeholder="Search by name"/>
                        <div className='btnRight'>
                            <AddButton
                                linkHref="/news/add"
                                btnText="Add News"
                            />
                        </div>
                    </div>
                </div>
                <div className='card '>
                    <div className='tableAreaMaster '>
                        <TableList data={NewsData} columns={NewsColumn} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default News