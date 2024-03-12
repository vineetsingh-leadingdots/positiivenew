import { Col } from 'antd'
import React from 'react'
import { SearchIcon2 } from '../commonComponents/commonSvg'

const SearchField = ({placeholder}) => {
  return (
 <>
    <Col className="searchSec" >
                        <input
                            type="text"
                            className="form_control"
                            placeholder={placeholder}
                        />
                        <button>
                        <SearchIcon2 />
                        </button>
                    </Col>
 </>
  )
}

export default SearchField