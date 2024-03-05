import React from 'react'
import { Link } from "react-router-dom";
const SupplierTopCard = () => {
    return (
        <>
            <div className="card md:pt-[22px] md:pl-9 md:pb-[14px] md:pr-[18px] p-6">
                <div className="flex items-center justify-between ">
                    <div className="searhProductDe flex justify-between w-full">
                        <div className="stockList">
                            <div className="stockImage">
                                <img src="/images/warehouse.webp" />
                            </div>
                            <div className="stockContent">
                                <h3>Allied Beverage Corporation</h3>
                                <p>2930 Avenue of Americas New York, NY 10036</p>
                                <Link to="/">www.alliedbeverage.com</Link>
                            </div>
                        </div>
                        <div className="searhProductDeRight">
                            <p><strong>Division: </strong>Sapphire</p>
                            <p><strong>Southern Glazers Rep:</strong> Martin Wexler</p>
                            <p><strong>Phone:</strong> 718.231-2345</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SupplierTopCard