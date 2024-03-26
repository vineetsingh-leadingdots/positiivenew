import React from "react";

// import {useNavigate} from "react-router-dom";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { useCreateroleMutation } from '../../services/roleApi';
// import {  useLocation, useNavigate  } from 'react-router-dom';

const RoleAdd = () => {
  const navigate = useNavigate();

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Role Add </title>
        </Helmet>
      </HelmetProvider>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Role Add</h2>
        </div>
        <div className="card p-8 ">
          <div className="formArea mt-5">
            <form id="brandAdd">
              <div className=" w-full ">
                <div className="form-group mb-6 ">
                  <label className="formBlock mb-2 py-2">Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter brand name"
                    className="formControl"
                  />
                </div>
              </div>
              <div className=" w-full ">
                <div className="form-group mb-6 ">
                  <label className="formBlock mb-2 py-2">Description</label>
                  <textarea
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter role description"
                    className="formControl"
                  />
                </div>
              </div>
              <div className="w-full mb-6">
                <h2>Permission *</h2>
              </div>
              <div className="w-full formFooter">
                <div className=" form-group pt-8 pb-3 flex  gap-3 ">
                  <button type="submit" className=" btn-save btnSm ">
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/role/list")}
                    className="btn-cancel btnSm "
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
  
    // const [ createrole, { isSuccess:createroleSuccess } ] = useCreateroleMutation();
    // const navigate = useNavigate();
    // const {state} = useLocation();
    // const [ roleData, setRoleData ] = useState({
    //     file: "",
    //     fileName: ""
    // });

    // useEffect(() => {
    //     if (state?.roleData) {
    //         const { description, name } = state?.roleData;
    //         setRoleData({
    //             file: description,
    //             fileName: name
    //         });
    //     }
    // }, [ state ]);

    // useEffect(() => {
    //     if(createroleSuccess){
    //         navigate("/role/list");
    //     }
    // }, [ createroleSuccess ]);


    // const handleFileChange = (e) => {
    //     setRoleData((prevroleData) => ({
    //         ...prevroleData,
    //         fileName: e.target.value
    //     }));
    // }

    // const handelSubmit = (e) => {
    //     e.preventDefault();
    //     if(state?.roleData?.id){
    //         var formdata = new FormData();
    //         formdata.append("name", roleData?.fileName);
    //         formdata.append("description", roleData?.file);
    //         formdata.append("id", state.roleData.id);
    //         createrole(formdata);
    //     }
    //     else{
    //         var formdata = new FormData();
    //         formdata.append("name", roleData?.fileName);
    //         formdata.append("description", roleData?.file);
    //         createrole(formdata);
    //     }  
    // }

    return (
        <>
         <HelmetProvider>
                <Helmet>
                    <title>Positiive | Role Add </title>
                </Helmet>
            </HelmetProvider>
            <div className='content masterPages'>
                <div className='w-full mb-4'>
                    <h2 className='mb-4'> Role Add</h2>
                </div>
                <div className='card p-8 '>
                    <div className="formArea mt-5">
                        <form id="roleAdd">
                                <div className=" w-full ">
                                    <div className="form-group mb-6 ">
                                        <label className="formBlock mb-2 py-2">Name *</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter role name"
                                            className="formControl"
                                        />
                                    </div>
                                </div>      
                                <div className=" w-full ">
                                    <div className="form-group mb-6 ">
                                        <label className="formBlock mb-2 py-2">Description</label>
                                        <textarea
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter role description"
                                            className="formControl"
                                        />
                                    </div>
                                </div>                  
                             <div className='w-full mb-6'>
                                <h2>Permission *</h2>
                             </div>
                            <div className="w-full formFooter">
                                <div className=" form-group pt-8 pb-3 flex  gap-3 ">
                                    <button
                                        type="submit"
                                        className=" btn-save btnSm "
                                        onClick={handelSubmit}
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => navigate("/role/list")}
                                        className="btn-cancel btnSm "
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoleAdd;
