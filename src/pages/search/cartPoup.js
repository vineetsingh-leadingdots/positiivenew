import { useState } from "react";
// import Popup from "reactjs-popup";
import PriceSlider from "./priceSlider";
import { MinusIcon, PlusIcon } from "../../commonComponents/commonSvg";
import { Modal } from 'antd';
import { columns, columnsCart, dataSource, dataSourceCart } from '../../commonComponents/tableData';
import TableList from "../../commonComponents/tableList";
const CartPopPup = () => {
  const [toggleState4, setToggleState4] = useState("Cases");
  const toggleTab4 = (index) => {
    setToggleState4(index);
  };
  const [modal1Open, setModal1Open] = useState(false);
  let [count, setCount] = useState(80);
  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }


  return (
    <>
      <button
        className="btnUpload cartBtn "
        aria-describedby="popup-8"
        onClick={() => setModal1Open(true)}
      >
        <img src="/images/cart-white2.webp" /> Add to cart
      </button>

      <Modal
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
        footer={false}
        closeIcon={false}
        zIndex="999999999999"
        width="430px"

      >
        <>
          <button
            className="close"
            onClick={() => setModal1Open(false)}
          >
            <img src="/images/close-circle.svg" />
          </button>
          <div className="header">
            <h3>Add to Cart</h3>
          </div>
          <div className="popupContent mt-6">
            <div className="popupTab">
              <div className="btnTabGroup">
                <button
                  onClick={() => toggleTab4("bottles")}
                  className={toggleState4 === "bottles" ? " active" : "  "}
                >
                  Bottles
                </button>

                <button
                  onClick={() => toggleTab4("Cases")}
                  className={toggleState4 === "Cases" ? " active" : "  "}
                >
                  Cases
                </button>
              </div>
              <div className="tabsSec pt-6">
                <div
                  className={
                    toggleState4 === "bottles"
                      ? "tabContent tabContentActive"
                      : "tabContent"
                  }
                >
                  Bottles
                </div>
                <div
                  className={
                    toggleState4 === "Cases"
                      ? "tabContent tabContentActive"
                      : "tabContent"
                  }
                >
                  <div className="flex px-6 justify-center casesArea">
                    <div className="w-115px mr-12">
                      <label className="label2">Size</label>
                      <div className="form-group">
                        <select className="form_control">
                          <option>750ML</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-115px">
                      <label className="label2">Quantity</label>
                      <div className="form-group quantityDiv">
                        <span onClick={decrementCount}>
                          <MinusIcon />
                        </span>
                        <div className="number">{count}</div>
                        <span onClick={incrementCount}>
                          <PlusIcon />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="profileCalculator">
                    <PriceSlider />
                    <p style={{ color: "#939191", marginTop: "12px" }}>(35%)<br />Profit calculator</p>
                  </div>
                  <div className="tableProfit">
                    <TableList data={dataSourceCart} columns={columnsCart} />
                    <div className="savingTable">
                      <div className="flex  saving">
                        <div className="w-auto">
                          Savings
                        </div>
                        <div>
                          ($xxx.xx)
                        </div>
                      </div>
                      <div className="flex  totalPrice">
                        <div className="w-auto">
                          Total Price
                        </div>
                        <div>
                          $x,xxx.xx
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-10">
                      <button className="btnUpload cartBtn"><img src="/images/Plus.webp" className="mr-2" /> Add products</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Modal>

    </>
  );
};

export default CartPopPup;
