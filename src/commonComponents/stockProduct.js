import React from 'react'

const StockProduct = ({btnClassName, productImg, productTitle,productDeal, productLocation, productName, productCase, productAmount}) => {
    return (
        <>
            <div className="stockProduct">
                <div className="stockList">
                    <div className="stockImage">
                        <img src={productImg} />
                    </div>
                    <div className="stockContent">
                        <h3>{productTitle}</h3>
                        <div className="productLocation pt-4">
                            <button className={btnClassName}>{productName}</button>
                            <p>{productLocation}</p>
                        </div>
                    </div>
                </div>
                <div className="deal_card">
                    <div className="dealLeft">
                        <h4>
                           {productDeal} <img src="images/cash.webp" />
                        </h4>
                        <p>{productCase}</p>
                    </div>
                    <div className="priceDiv">
                        <h5>
                            {productAmount}<span>per case</span>
                        </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StockProduct