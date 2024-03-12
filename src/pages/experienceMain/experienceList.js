import React from 'react'
import SearchField from '../../components/searchFIeld'
import AddButton from '../../components/addButton'
import TableList from '../../commonComponents/tableList'
import { ExperenceColumn, ExperenceData } from '../../commonComponents/tableData'


const ExperienceList = () => {

    return (
        <>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Experiences</h2>
                    <div className='flex justify-between'>
                        <SearchField  placeholder="Search by name"/>
                        <div className='btnRight'>
                            <AddButton
                                linkHref="/experience/add"
                                btnText="Add Experience "
                            />
                        </div>
                    </div>
                </div>
                <div className='card '>
                    <div className='tableAreaMaster '>
                        <TableList data={ExperenceData} columns={ExperenceColumn} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExperienceList