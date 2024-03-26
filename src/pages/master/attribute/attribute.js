    import React from "react";
    import { useEffect } from "react";
    import { Helmet, HelmetProvider } from "react-helmet-async";
    import SearchField from "../../../components/searchFIeld";
    import AddButton from "../../../components/addButton";
    import TableList from "../../../commonComponents/tableList";
    import {
    AttributeColumns
    } from "../../../commonComponents/tableData";
    import { useDeleteAttributeMutation, useListAttributeQuery } from "../../../services/attributeApi";
    import DeletePopup from "../../../components/deletePopup";
    import { useNavigate } from "react-router";

    const Attribute = () => {
    const [ deleteAttribute, {isSuccess: deleteAttributeSuccess} ] = useDeleteAttributeMutation();
    const { data: attributeListData, refetch } = useListAttributeQuery();
    const navigate = useNavigate();

    useEffect(() => {
        refetch();
    }, [attributeListData, deleteAttributeSuccess]);

    const deleteAttributeHandler = (id) => {
        deleteAttribute(id);
    };

    const tableData = attributeListData?.data.map((attribute) => ({
        key: attribute?.id?.toString(),
        Name: attribute?.name,
        Actions: (
        <div className="flex gap-1">
            <button
            onClick={() =>
                navigate("/attribute/add", { state: { AttributeData: attribute } })
            }
            className="actionButton"
            >
            <i className="fa fa-pencil" />
            </button>
            <DeletePopup
            onClick={() => deleteAttributeHandler(attribute?.id)}
            />
        </div>
        ),
    }));

    return (
        <>
        <HelmetProvider>
            <Helmet>
            <title>Positiive | Attribute </title>
            </Helmet>
        </HelmetProvider>
        <div className="content">
            <div className="w-full mb-4">
            <h2 className="mb-4"> Attribute</h2>
            <div className="flex justify-between searchWithButton">
                <SearchField placeholder="Search by name" />
                <div className="btnRight">
                <AddButton linkHref="/attribute/add" btnText="Add Attribute" />
                </div>
            </div>
            </div>
            <div className="card ">
            <div className="tableAreaMaster ">
                <TableList data={tableData} columns={AttributeColumns} />
            </div>
            </div>
        </div>
        </>
    );
    };

    export default Attribute;
