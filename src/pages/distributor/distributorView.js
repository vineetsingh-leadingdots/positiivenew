import { Col, Row } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DistributorView = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="content masterPages">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Positiive-Distributor</h2>
        </div>
        <div className="card p-4">
          <div className="card-body">
            <div className="flex justify-between items-center mb-4 flex-wrap md:flex-nowrap">
              <h4 className="mt-0 header-title  md:mb-0 mb-4">
                {" "}
                Positiive Distributor
              </h4>
              <div className="flex gap-1 flex-wrap md:flex-nowrap">
                <Link
                  title={"roles"}
                  to={"/role/list/"}
                  className="btnRole text-white px-3 py-2 rounded flex items-center gap-2 "
                >
                  <span className="fa fa-users" />
                  Roles
                </Link>
                <Link
                  title={"members"}
                  to={"/member/list/"}
                  className="btnMember px-3 py-2   text-white rounded flex items-center  gap-2 text-[12px]"
                >
                  <span className="fa fa-user" />
                  Members
                </Link>
                <Link
                  title={"divisions"}
                  to={"/division/list/"}
                  className="btnDivision text-white px-3 py-2 rounded flex items-center  gap-2 text-[12px]"
                >
                  <span className="fa fa-random" />
                  Divisions
                </Link>
                <Link
                  title={"products"}
                  to={"/product/list/"}
                  className="btnProducts text-white px-3 py-2 rounded flex items-center  gap-2 text-[12px]"
                >
                  <span className="fa fa-glass-cheers" />
                  Products
                </Link>
                <Link
                  title={"edit"}
                  to={"/supplier/add"}
                  className="btnEdit text-white px-3 py-2 rounded flex items-center  gap-2 text-[12px]"
                >
                  <span className="fa fa-edit" />
                  Edit
                </Link>
                <button
                  onClick={() => navigate(-1)}
                  className="bgBlue text-white px-3 py-2 rounded flex items-center  gap-2 text-[12px]"
                >
                  <span className="fa fa-arrow-left" />
                  Back
                </button>
              </div>
            </div>
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <div className="table-responsive">
                  <table className="table mb-0 w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th
                          colSpan="2"
                          style={{ opacity: "1" }}
                          className="pt-2 px-2 border-b  leading-6 border-gray-300"
                        >
                          User Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b ">
                        <td>
                          <b>Name :</b>
                        </td>
                        <td> Mr. Supplier first</td>
                      </tr>

                      <tr className="border-b">
                        <td>
                          <b>Contact No. :</b>
                        </td>
                        <td>254125445</td>
                      </tr>

                      <tr className="border-b">
                        <td>
                          <b>Email : </b>
                        </td>
                        <td>2352995236</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="table-responsive">
                  <table className="table mb-0 w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th
                          colSpan="2"
                          style={{ opacity: "1" }}
                          className="pt-2 px-2 border-b  leading-6 border-gray-300"
                        >
                          Organization Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td>
                          <b>Organization Name :</b>
                        </td>
                        <td>Positiive-Supplier</td>
                      </tr>

                      <tr className="border-b">
                        <td>
                          <b>Head office Address :</b>
                        </td>
                        <td>near madison square</td>
                      </tr>

                      <tr className="border-b">
                        <td>
                          <b>Logo : </b>
                        </td>
                        <td>
                          <div className="w-24 h-24">
                            <img
                              src="/images/thumbnail.webp"
                              alt={"thumbnail.webp"}
                              width="60"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td>
                          <b>Splash Screen : </b>
                        </td>
                        <td>
                          <img
                            src="/images/thumbnail.webp"
                            alt={"thumbnail.webp"}
                            width="60"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default DistributorView;
