import React from 'react';
import { Button, Upload } from 'antd';
import { UploadIcon } from './commonSvg';
const UploadField = () => (


    <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture"
        maxCount={3}
        multiple
    >
      
            <h3 className='text-[#7E7E7E] mb-1'>Drag & Drop your file here </h3>
            <UploadIcon />
  
    </Upload>

);
export default UploadField;