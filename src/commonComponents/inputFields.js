import React from 'react'
import {  Row, Input } from 'antd';
const InputFields = ({rowClass, placeholder, inputClass, inputIcon, onChange, type, suffix}) => {
    return (
        <>
            <Row className={rowClass}>
               <Input className={inputClass} placeholder={placeholder} type={type} prefix={inputIcon} onChange={onChange} suffix={suffix}/>
            </Row>
        </>
    )
}

export default InputFields