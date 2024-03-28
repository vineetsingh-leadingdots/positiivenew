import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useCreateroleMutation } from "../../services/roleApi"; 


const RoleAdd = () => {
  const [createrole, { isSuccess: createroleSuccess }] =
    useCreateroleMutation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
      });

      useEffect(() => {
        if (createroleSuccess) {
          navigate("/role/list");
        }
      }, [createroleSuccess]);

      const { state } = useLocation();

      useEffect(() => {
        if (state?.roleData) {
          setFormData({
            name: state?.roleData?.name,
            description: state?.roleData?.description,
          });
        }
      }, [state]);
         
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state?.roleData?.id) {
      let val = {
        name: formData?.name,
        description: formData?.description,
        id: state?.roleData?.id,
      };
      createrole(val);
    } else {
      let val = {
        name: formData?.name,
        description: formData?.description,
      };
      createrole(val);
    }
  };

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
                                            defaultValue={formData?.name}
                                            placeholder="Enter role name"
                                            className="formControl"
                                            onChange={handleChange}
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
                                            defaultValue={formData?.description}
                                            placeholder="Enter role description"
                                            className="formControl"
                                            onChange={handleChange}
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
                                        onClick={handleSubmit}
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
