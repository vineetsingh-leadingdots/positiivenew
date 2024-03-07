import { Row, Col } from "antd";
import FilterDropdown from "./filterDropdown";
import { EditICon } from "../../../commonComponents/commonSvg";
const StepFour = () => {



    return (
        <>
            <div className="customerStep customerOnboard ">
                <h3 className="flex">Present<img src="/images/expand.svg" className="pl-4" /> </h3>
                <Row gutter={[16, 16]}>
                    <Col sm={12}>
                        <div className="filterProductItem mt-6">
                            <div className="filterHead relative">
                                <p>LaNova Bistro</p>
                            </div>
                            <div className="py-5 px-4">
                                <div className="mb-4 filterProductList active ">
                                    <p>Three Taverns - Night on Ponce</p>
                                    <div className="flex items-center afterAddIcon">
                                        <img src="/images/smile.svg" />
                                        <img src="/images/smile.svg" />
                                        <span className="editIcon"><img src="/images/fluent_clock.svg"/> </span>
                                        <FilterDropdown />
                                    </div>
                                </div>
                                <div className="presentAddList">
                                    <div className="flex items-center">
                                        <span> <img src="/images/smile.svg" className="mr-6" /></span>
                                        <p> John Loved the new wine, said it was breathtaking</p>
                                    </div>
                                    <img src="/images/trash-gray2.svg" />
                                </div>
                                <div className="presentAddList">
                                    <div className="flex items-center">
                                        <span>  <img src="/images/smile.svg" className="mr-6" /></span>
                                        <p> John Loved the new wine, said it was breathtaking</p>
                                    </div>
                                    <img src="/images/trash-gray2.svg" />
                                </div>
                                <div className="presentAddList">
                                    <div className="flex items-center">
                                        <span > <img src="/images/editbg.svg" className="mr-6" /></span>
                                        <p> John Loved the new wine, said it was breathtaking</p>
                                    </div>
                                    <img src="/images/trash-gray2.svg" />
                                </div>
                                <div className="mb-4 filterProductList ">
                                    <p>sxas</p>
                                    <FilterDropdown />
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <div className="filterProductItem mt-6">
                            <div className="filterHead relative">
                                <p>LaNova Bistro</p>
                            </div>
                            <div className="py-5 px-4">
                                <div className="mb-4 filterProductList active ">
                                    <p>Three Taverns - Night on Ponce</p>
                                    <div className="flex items-center afterAddIcon">
                                        <img src="/images/smile.svg" />
                                        <img src="/images/smile.svg" />
                                        <span className="editIcon"><img src="/images/fluent_clock.svg"/> </span>
                                        <FilterDropdown />
                                    </div>
                                </div>
                                <div className="presentAddList">
                                    <div className="flex items-center">
                                        <span> <img src="/images/smile.svg" className="mr-6" /></span>
                                        <p> John Loved the new wine, said it was breathtaking</p>
                                    </div>
                                    <img src="/images/trash-gray2.svg" />
                                </div>
                                <div className="presentAddList">
                                    <div className="flex items-center">
                                        <span>  <img src="/images/smile.svg" className="mr-6" /></span>
                                        <p> John Loved the new wine, said it was breathtaking</p>
                                    </div>
                                    <img src="/images/trash-gray2.svg" />
                                </div>
                                <div className="presentAddList">
                                    <div className="flex items-center">
                                        <span > <img src="/images/editbg.svg" className="mr-6" /></span>
                                        <p> John Loved the new wine, said it was breathtaking</p>
                                    </div>
                                    <img src="/images/trash-gray2.svg" />
                                </div>
                                <div className="mb-4 filterProductList ">
                                    <p>sxas</p>
                                    <FilterDropdown />
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default StepFour