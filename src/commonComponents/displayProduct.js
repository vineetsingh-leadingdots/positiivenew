import React from 'react'

const DisplayProduct = () => {
  return (
    <>
      <div className="displayProduct">
        <div className="checkBoxSec">
          <div className="styled-input-container styled-input--square">
            <div className="styled-input-single">
              <input
                type="checkbox"
                name="fieldset-2"
                id="tequila"
              />
              <label htmlFor="tequila" />
            </div>
          </div>
        </div>
        <div className="stockList">
          <div className="stockImage">
            <img src="/images/p6.webp" />
          </div>
          <div className="stockContent">
            <h3>Some Tequila Name</h3>
            <div className="flex justify-end items-baseline pt-10 pr-4">
              <p>USA, Georgia</p>
            </div>
          </div>
        </div>
        <div className="deal_card">
          <div className="dealLeft">
            <h4>
              Best Deal <img src="/images/cash.webp" />
            </h4>
            <p>Purchase 5 cases of 750ml</p>
          </div>
          <div className="priceDiv">
            <h5>
              $44.99<span>per case</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default DisplayProduct