import { useState } from "react";
import { Row, Col } from "antd";
import { MoreIcon } from "../../../commonComponents/commonSvg";
import FilterDropdown from "./filterDropdown";
import FilterDropdownFirst from "./filterDropdownFirst";

const StepThree = () => {

    const products = [
        { name: "LaNova Bistro" },
        { name: "Libby Wine" },
        { name: "LaNova Bistro" },
        { name: "Libby Wine" }
    ];

    return (
        <div className="customerStep customerOnboard">
            <h3>Select the products you plan on presenting</h3>
            <div className="mt-6 ">
                <Row gutter={[16, 16]}>
                    {products.map((product, index) => (
                        <Col span={12} key={index}>
                            <div className="filterProductItem">
                                <div className="filterHead relative">
                                <p>{product.name}</p>
                                 <FilterDropdownFirst/>
                                </div>
                                <div className="py-5 px-4">
                                    <div className="mb-4 filterProductList ">
                                        <p>{product.name}</p>
                                        <FilterDropdown />
                                    </div>
                                    <div className="mb-4 filterProductList ">
                                        <p>{product.name}</p>
                                        <FilterDropdown />
                                    </div>
                                    <div className="mb-4 filterProductList ">
                                        <p>{product.name}</p>
                                        <FilterDropdown />
                                    </div>
                                    <div className="mb-4 filterProductList ">
                                        <p>{product.name}</p>
                                        <FilterDropdown />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default StepThree;
