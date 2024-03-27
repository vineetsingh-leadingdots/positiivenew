import React from 'react';
import { Upload } from 'antd';
import { useNavigate } from "react-router-dom";
import { UploadIcon } from '../../commonComponents/commonSvg';
const ImportCustomer = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="content masterPages">
                <div className="w-full mb-4">
                    <h2 >Upload Customers</h2>
                    <p>(Upload Customers to your organization.)</p>
                </div>
                <div className="card p-8 ">
                  <div className='text-center uploadFileSec mb-4'>
                  <Upload
                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                        listType="picture"
                        maxCount={3}
                        multiple
                    >
                        <h3 className='text-[#7E7E7E] mb-1'>Drag & Drop your file here </h3>
                     <UploadIcon/>
                    </Upload>
                  </div>

                    <div className="w-full formFooter">
                <div className=" form-group pt-8 pb-3 flex  gap-3 ">
                  <button type="submit" className=" btn-save btnSm ">
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="btn-cancel btnSm "
                  >
                    Cancel
                  </button>
                </div>
              </div>
                </div>
            </div>
        </>
    );
};

export default ImportCustomer;
