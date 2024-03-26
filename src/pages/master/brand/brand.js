import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchField from "../../../components/searchFIeld";
import AddButton from "../../../components/addButton";
import TableList from "../../../commonComponents/tableList";
import { BrandColumns } from "../../../commonComponents/tableData";
import { useListBrandQuery } from "../../../services/brandApi";
import { useNavigate } from "react-router-dom";
import DeletePopup from "../../../components/deletePopup";

const Brand = () => {
  const { data: brandListData, refetch } = useListBrandQuery();
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, [brandListData]);

  const tableData = brandListData?.data.map((brand) => ({
    key: brand?.id?.toString(),
    BrandName: brand?.name,
    Actions: (
      <div className="flex gap-1">
        <button
          onClick={() =>
            navigate("/brand/add", { state: { brandData: brand } })
          }
          className="actionButton"
        >
          <i className="fa fa-pencil" />
        </button>
        <DeletePopup deleteId={brand?.id} refetch={refetch} />
      </div>
    ),
  }));

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Brand </title>
        </Helmet>
      </HelmetProvider>
      <div className="content">
        <div className="w-full mb-4">
          <h2 className="mb-4"> Brands</h2>
          <div className="flex justify-between searchWithButton">
            <SearchField placeholder="Search by name" />
            <div className="btnRight">
              <AddButton linkHref="/brand/add" btnText="Add Brands" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="tableAreaMaster ">
            <TableList data={tableData} columns={BrandColumns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
