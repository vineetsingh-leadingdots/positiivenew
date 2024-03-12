import React from 'react'
import { Link } from 'react-router-dom'
import { PlusIcon2 } from '../commonComponents/commonSvg'

const AddButton = ({linkHref, btnText }) => {
    return (
        <>
            <Link to={linkHref} className="btn-save btnauto  items-center flex gap-1" >
                <PlusIcon2 />{btnText}
            </Link>
        </>
    )
}

export default AddButton