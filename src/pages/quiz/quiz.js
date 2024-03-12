import React from 'react'
import SearchField from '../../components/searchFIeld'
import AddButton from '../../components/addButton'
import TableList from '../../commonComponents/tableList'
import {   QuizColumn, QuizData } from '../../commonComponents/tableData'


const Quiz = () => {

    return (
        <>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Quiz</h2>
                    <div className='flex justify-between'>
                        <SearchField  placeholder="Search by name"/>
                        <div className='btnRight'>
                            <AddButton
                                linkHref="/quiz/add"
                                btnText="Add Quiz"
                            />
                        </div>
                    </div>
                </div>
                <div className='card '>
                    <div className='tableAreaMaster '>
                        <TableList data={QuizData} columns={QuizColumn} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz