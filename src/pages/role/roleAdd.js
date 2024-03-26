import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// import {useNavigate} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useCreateroleMutation } from "../../services/roleApi"; 


const RoleAdd = () => {
  const navigate = useNavigate();

  const [createrole, { isSuccess: createroleSuccess }] =
    useCreateroleMutation();

    const { state } = useLocation();
    const [roleData, setRoleData] = useState({
        name: "",
        description: "",
      });
    
      useEffect(() => {
        if (state?.roleData) {
          setRoleData({
            name: state?.roleData?.name,
            description: state?.roleData?.description,
          });
        }
      }, [state]);
    
      useEffect(() => {
        if (createroleSuccess) {
          navigate("/role/list");
        }
      }, [createroleSuccess]);

  const handleFileChange = (e) => {
    
    setRoleData((prevroleData) => ({
      ...prevroleData,
      name: e.target.value,
    }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (state?.roleData?.id) {
      var formdataEdit = new FormData();
      formdataEdit.append("name", roleData?.name);
      formdataEdit.append("description", roleData?.description);
      formdataEdit.append("id", state.roleData.id);
      createrole(formdataEdit);
    } else {
      var formdata = new FormData();
      formdata.append("name", roleData?.name);
      formdata.append("description", roleData?.description);
      createrole(formdata);
    }
  };
//   return (
//     <>
//       <HelmetProvider>
//         <Helmet>
//           <title>Positiive | Role Add </title>
//         </Helmet>
//       </HelmetProvider>
//       <div className="content masterPages">
//         <div className="w-full mb-4">
//           <h2 className="mb-4"> Role Add</h2>
//         </div>
//         <div className="card p-8 ">
//           <div className="formArea mt-5">
//             <form id="roleAdd">
//               <div className=" w-full ">
//                 <div className="form-group mb-6 ">
//                   <label className="formBlock mb-2 py-2">Name *</label>
//                   <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     placeholder="Enter role name"
//                     className="formControl"
//                   />
//                 </div>
//               </div>
//               <div className=" w-full ">
//                 <div className="form-group mb-6 ">
//                   <label className="formBlock mb-2 py-2">Description</label>
//                   <textarea
//                     id="name"
//                     name="name"
//                     type="text"
//                     placeholder="Enter role description"
//                     className="formControl"
//                   />
//                 </div>
//               </div>
//               <div className="w-full mb-6">
//                 <h2>Permission *</h2>
//               </div>
//               <div className="w-full formFooter">
//                 <div className=" form-group pt-8 pb-3 flex  gap-3 ">
//                   <button type="submit" className=" btn-save btnSm ">
//                     Submit
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => navigate("/role/list")}
//                     className="btn-cancel btnSm "
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
  
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
                                            defaultValue={roleData?.name}
                                            placeholder="Enter role name"
                                            className="formControl"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>      
                                <div className=" w-full ">
                                    <div className="form-group mb-6 ">
                                        <label className="formBlock mb-2 py-2">Description</label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            type="text"
                                            defaultValue={roleData?.description}
                                            placeholder="Enter role description"
                                            className="formControl"
                                            onChange={handleFileChange}
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
    );
};

export default RoleAdd;
