import React from 'react';
import { Upload, message } from 'antd';
import { useNavigate } from "react-router-dom";
import { UploadIcon } from '../../commonComponents/commonSvg';
const { Dragger } = Upload;
const ImportCustomer = () => {
  const navigate = useNavigate();
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  return (
    <>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 >Upload Customers</h2>
          <p>(Upload Customers to your organization.)</p>
        </div>
        <div className="card p-8 ">

        <div className='w-full mb-4'>
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <UploadIcon />
            </p>
            <h3 className="ant-upload-text">Click or drag file to this area to upload</h3>
          </Dragger>
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
