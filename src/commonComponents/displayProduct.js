import React from 'react'

const DisplayProduct = ({checkboxId, productImg, productName, purchasePrice, purchaseText, productDeal, productLocation}) => {
  return (
    <>
      <div className="displayProduct">
        <div className="checkBoxSec">
          <div className="styled-input-container styled-input--square">
            <div className="styled-input-single">
              <input
                type="checkbox"
                name="fieldset-2"
                id={checkboxId}
              />
              <label htmlFor={checkboxId} />
            </div>
          </div>
        </div>
        <div className="stockList">
          <div className="stockImage">
            <img src={productImg}/>
          </div>
          <div className="stockContent">
            <h3>{productName}</h3>
            <div className="flex justify-end items-baseline pt-10 pr-4">
              <p>{productLocation}</p>
            </div>
          </div>
        </div>
        <div className="deal_card">
          <div className="dealLeft">
            <h4>
              {productDeal} <img src="/images/cash.webp" />
            </h4>
            <p>{purchaseText}</p>
          </div>
          <div className="priceDiv">
            <h5>
              {purchasePrice}<span>per case</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default DisplayProduct