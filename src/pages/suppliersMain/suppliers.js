import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import TableList from "../../commonComponents/tableList";
import { SupplierColumnData, supplierPageData } from "./supplierData";
import SupplierTopCard from "./supplierTopCard";

const Suppliers = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Positiive | Suppliers </title>
        </Helmet>
      </HelmetProvider>
      <div className="suppliersMain">
        <div className="breadcrumb">
          <Link to="/order-history" className="flex items-center">
            <span>
              <img src="/images/home2.svg" />
            </span>
          </Link>
        </div>
        <div className="content w-full ">
          <div className="w-full ">
            <SupplierTopCard />
          </div>
          <div className="w-full mt-2">
            <div className="rounded">
              <TableList data={supplierPageData} columns={SupplierColumnData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suppliers;
