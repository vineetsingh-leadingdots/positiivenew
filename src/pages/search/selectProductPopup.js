import { useState } from "react";
import { Col, Row, Modal, ConfigProvider } from 'antd';
import DisplayProduct from "../../commonComponents/displayProduct";
import SelectFiled from "../../commonComponents/selectFiled";

const SelectProductPopup = () => {

    const [modal1Open, setModal1Open] = useState(false);
    const [modal1Open2, setModal1Open2] = useState(false);
    const products = [
        {
            productImg: "/images/p7.webp",
            productName: "Don Julio Blanco",
            productLocation: "USA, Georgia",
            purchaseText: "Purchase 5 cases of 750ml",
            purchasePrice: "$44.99",
            productDeal: "Best Deal",
            checkboxId: "1",
            cashImg: "/images/cash.webp",
        },
        {
            productImg: "/images/p7.webp",
            productName: "Don Julio Blanco",
            productLocation: "USA, Georgia",
            purchaseText: "Purchase 5 cases of 750ml",
            purchasePrice: "$44.99",
            productDeal: "Best Deal",
            checkboxId: "2",
            cashImg: "/images/cash.webp"
        },
        {
            productImg: "/images/p7.webp",
            productName: "Don Julio Blanco",
            productLocation: "USA, Georgia",
            purchaseText: "Purchase 5 cases of 750ml",
            purchasePrice: "$44.99",
            productDeal: "Best Deal",
            checkboxId: "3",
            cashImg: "/images/cash.webp",
        }, {
            productImg: "/images/p7.webp",
            productName: "Don Julio Blanco",
            productLocation: "USA, Georgia",
            purchaseText: "Purchase 5 cases of 750ml",
            purchasePrice: "$44.99",
            productDeal: "Best Deal",
            checkboxId: "4",
            cashImg: "/images/cash.webp",
        },
    ];
    return (
        <>

            <button className="selectedBtn mt-3 " onClick={() => setModal1Open(true)}>
                Selected (4)
            </button>
            <ConfigProvider
                theme={{
                    components: {
                        Modal: {

                        },
                    },
                }}
            >
                <Modal
                    centered
                    open={modal1Open}
                    onOk={() => setModal1Open(false)}
                    onCancel={() => setModal1Open(false)}
                    footer={false}
                    closeIcon={false}
                    zIndex="999999999999"
                    width="851px"
                    className="selectedPopup-content"
                >
                    <>
                        <button
                            className="close"
                           onClick={() => setModal1Open(false)}
                        >
                            <img src="/images/close-circle.svg" />
                        </button>
                        <Row gutter={[16, 16]}  >
                            {products.map((product, index) => (
                                <Col key={index} className="gutter-row" xs={24} md={12}>
                                    <DisplayProduct
                                        productImg={product.productImg}
                                        productName={product.productName}
                                        productLocation={product.productLocation}
                                        purchaseText={product.purchaseText}
                                        purchasePrice={product.purchasePrice}
                                        productDeal={product.productDeal}
                                        checkboxId={product.checkboxId}
                                    />
                                </Col>
                            ))}
                        </Row>

                        <Row className="w-full flex justify-center mt-8 popupBtn">
                        <button
                            className="btnBg mr-4 "
                            onClick={() => setModal1Open2(true)}                           
                          >
                            Create an Experience
                          </button>
                        <Modal
                    centered
                    open={modal1Open2}
                    onOk={() => setModal1Open2(false)}
                    onCancel={() => setModal1Open2(false)}
                    footer={false}
                    closeIcon={false}
                    zIndex="999999999999"
                    width="607px"
                    className="comparePopup-content"
                >
                    <>
                    <button
                            className="close"
                           onClick={() => setModal1Open2(false)}
                        >
                            <img src="/images/close-circle.svg" />
                        </button>
                    <div className="popupContent">
                              <h2>Save your experiences</h2>
                              <div className=" w-full mt-6 md:mt-10">
                                <div className="md:max-w-[378px] w-full mb-5">
                                  <label>Name the experiences</label>
                                  <input type="text" className="form_control" />
                                </div>
                                <div className="md:max-w-[378px] w-full mb-5">
                                  <label>Description</label>
                                  <textarea className="form_control"></textarea>
                                </div>
                                <div className="md:max-w-[378px] w-full ">
                                  <label>Choose customers</label>
                                   <SelectFiled/>
                                  <div className="w-full afterSelect mt-4">
                                    <div className="styled-input-container styled-input--square">
                                      <div className="styled-input-single">
                                        <input
                                          checked="checked"
                                          onChange={() => null}
                                          type="checkbox"
                                          name="fieldset-2"
                                          id="Cantina Mexico 65865"
                                        />
                                        <label htmlFor="checked">Cantina Mexico 65865</label>
                                      </div>
                                    </div>
                                    <div className="styled-input-container styled-input--square">
                                      <div className="styled-input-single">
                                        <input
                                          checked="checked"
                                          onChange={() => null}
                                          type="checkbox"
                                          name="fieldset-2"
                                          id="Flannery’s Bar 34567"
                                        />
                                        <label htmlFor="checked">Flannery’s Bar 34567</label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex justify-center w-full popupBtn">
                                  <button className="btnBorder mr-4">Save</button>
                                  <button className="btnBorder mr-4"  onClick={() => setModal1Open2(false)}>Cancel</button>
                                </div>
                              </div>
                            </div>
                    </>
                       </Modal>
                      <button className="btnBorder ">Compare items</button>
                    </Row>
                    </>
                </Modal>
            </ConfigProvider>
        </>
    )
}

export default SelectProductPopup