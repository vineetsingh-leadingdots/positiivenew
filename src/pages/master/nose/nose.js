import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SearchField from '../../../components/searchFIeld'
import AddButton from '../../../components/addButton'
import TableList from '../../../commonComponents/tableList'
import { NosePalatesColumns, NosePalatesData } from '../../../commonComponents/tableData'

const Nose = () => {

    return (
        <>
        <HelmetProvider>
                <Helmet>
                    <title>Positiive | Nose Palate  </title>
                </Helmet>
            </HelmetProvider>
            <div className='content'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Nose Palate</h2>
                    <div className='flex justify-between searchWithButton'>
                        <SearchField  placeholder="Search by name"/>
                        <div className='btnRight'>
                            <AddButton
                                linkHref="/nose/palate/add"
                                btnText="Add Nose"
                            />
                        </div>
                    </div>
                </div>
                <div className='card '>
                    <div className='tableAreaMaster '>
                        <TableList data={NosePalatesData} columns={NosePalatesColumns} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nose