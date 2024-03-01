import { useState } from "react";
import Popup from "reactjs-popup";
import Slider from 'react-slider';
const CartPopPup = () => {
  const [toggleState4, setToggleState4] = useState("Cases");
  const toggleTab4 = (index) => {
    setToggleState4(index);
  };
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };
  let [count, setCount] = useState(80);
  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }

  const [values, setValues] = useState([0, 6000]);
  const handleChange = (newValues) => setValues(newValues);
  return (
    <>
      <Popup
        open={open}
        onClose={() => closeModal()}
        closeOnDocumentClick={false}
        className="max430"
        trigger={
          <button
            className="btnUpload cartBtn "
            aria-describedby="popup-8"
            onClick={() => setOpen((o) => !o)}
          >
            <img src="/images/cart-white2.webp" /> Add to cart
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button
              className="close"
              onClick={() => {
                closeModal();
                close();
              }}
            >
              &times;
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
                    <div className="flex px-6 justify-center">
                      <div className="w-[115px] mr-12">
                        <label className="label2">Size</label>
                        <div className="form-group">
                          <select className="form_control">
                            <option>750ML</option>
                          </select>
                        </div>
                      </div>
                      <div className="w-[115px]">
                        <label className="label2">Quantity</label>
                        <div className="form-group quantityDiv">
                          <span onClick={decrementCount}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M20.9995 12.001C20.9995 7.03223 16.9683 3.00098 11.9995 3.00098C7.03076 3.00098 2.99951 7.03223 2.99951 12.001C2.99951 16.9697 7.03076 21.001 11.9995 21.001C16.9683 21.001 20.9995 16.9697 20.9995 12.001Z"
                                stroke="black"
                                strokeWidth="1.00189"
                                stroke-miterlimit="10"
                              />
                              <path
                                d="M15.7506 12.0015H8.24951"
                                stroke="black"
                                strokeWidth="1.00189"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <div className="number">{count}</div>
                          <span onClick={incrementCount}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M11.999 8.25049V15.7505M15.749 12.0005H8.24902M20.999 12.0005C20.999 7.03174 16.9678 3.00049 11.999 3.00049C7.03027 3.00049 2.99902 7.03174 2.99902 12.0005C2.99902 16.9692 7.03027 21.0005 11.999 21.0005C16.9678 21.0005 20.999 16.9692 20.999 12.0005Z"
                                stroke="black"
                                strokeWidth="1.00189"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="profileCalculator">
                    <p className='flex justify-between mt-2'><span className='mr-1'> ${values[0]}</span> <span>${values[1]}</span></p>
                    <Slider
                        className="slider mt-5"
                        value={values}
                        onChange={handleChange}
                        min={0}
                        max={100}
                    />
                   <p style={{ color:"#939191", marginTop:"12px"}}>(35%)<br/>Profit calculator</p>
                    </div>
                    <div className="tableProfit">
                      <div className="overflow-x-auto w-full whitespace-nowrap ">
                        <table className="table-auto table  w-full">
                          <thead className="thead-dark ">
                            <tr>
                              <th className="w-32">Size</th>
                              <th className="w-36">Qty</th>
                              <th  >Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1.0L</td>
                              <td>12 cases</td>
                              <td>
                                <div className="flex items-center">
                                  $318.37
                                  <button className="ml-2">
                                    <img src="/images/trash1.webp" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>1.0L</td>
                              <td>12 cases</td>
                              <td>
                                <div className="flex items-center">
                                  $318.37
                                  <button className="ml-2">
                                    <img src="/images/trash1.webp" />
                                  </button>
                                </div>
                              </td>
                            </tr>                          
                          </tbody>
                        </table>
                      </div>
                      <div className="savingTable">
                        <div className="flex justify-between items-center saving">
                          <div className="w-auto">
                          Savings
                          </div>
                          <div>
                           ($xxx.xx)
                          </div>
                        </div>
                        <div className="flex justify-between items-center totalPrice">
                          <div className="w-auto">
                          Total Price
                          </div>
                          <div>
                          $x,xxx.xx
                          </div>
                        </div>
                      </div>
                    <div className="flex justify-center mt-10">
                    <button className="btnUpload cartBtn"><img src="/images/Plus.webp" className="mr-2"/> Add products</button>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </>
  );
};

export default CartPopPup;
