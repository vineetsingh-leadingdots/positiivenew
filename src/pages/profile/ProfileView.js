import * as React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {Link} from "react-router-dom";



function ProfileView() {

    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Positiive |Admin Profile Update</title>
                </Helmet>
            </HelmetProvider>

            <div className=" content ">
                <h2 className="text-2xl mb-3 font-normal  ">
                    Admin Profile Update
                </h2>

                <div className="page-title-box">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h4 className="page-title"> &nbsp;</h4>
                        </div>
                        <div className="col-sm-6">
                            <div className="float-right d-md-block">
                                <Link to={"/profile"}>
                                    <button className="btn btn-primary arrow-none waves-effect waves-light"
                                            type="button">
                                        <i className="far fa-edit"/> Edit
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card p-4">
                            <div className="card-body">
                                <h4 className="mt-0 header-title mb-4 ">My Profile</h4>

                                <div className="row flex justify-between">
                                    <div className="md:w-1/2 w-full md:pr-6">
                                        <div className="table-responsive">
                                            <table className="table mb-0 w-full">
                                                <thead className="bg-gray-100">
                                                <tr>
                                                    <th colSpan="2" style={{opacity: "1"}}
                                                        className='pt-2 px-2 border-b  leading-6 border-gray-300'
                                                    >User Details
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                <tr className='border-b '>
                                                    <td><b>Name :</b></td>
                                                    <td>-</td>
                                                </tr>

                                                <tr className='border-b'>
                                                    <td><b>Contact No. :</b></td>
                                                    <td>-</td>
                                                </tr>

                                                <tr className='border-b'>
                                                    <td><b>Alternate Contact No. :</b></td>
                                                    <td>-</td>
                                                </tr>

                                                <tr>
                                                    <td><b>Address :</b></td>
                                                    <td>- <br/></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 w-full">
                                        <div className="table-responsive">
                                            <table className="table mb-0 w-full">
                                                <thead className="bg-gray-100">
                                                <tr>
                                                    <th colSpan="2" style={{opacity: "1"}}
                                                        className='pt-2 px-2 border-b  leading-6 border-gray-300'>Organization
                                                        Details
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                <tr className='border-b'>
                                                    <td><b>Organization Name :</b></td>
                                                    <td> -</td>
                                                </tr>

                                                <tr className='border-b'>
                                                    <td><b>Email :</b></td>
                                                    <td>-</td>
                                                </tr>
                                                <tr className='border-b'>
                                                    <td><b>Designation :</b></td>
                                                    <td>Super Admin</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileView;