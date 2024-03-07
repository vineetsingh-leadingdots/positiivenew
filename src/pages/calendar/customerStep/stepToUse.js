import {useState} from "react";
import {useSelector} from "react-redux";

const StepThree = ({selectedCustomers,
                       selectedProducts}) => {
    const {masterData} = useSelector((store) => store.notesSlice);
    const [filterDropShow, setfilterDropShow] = useState(false);
    const FilterShow = () => setfilterDropShow(!filterDropShow);
    const [customerShow, setCustomerShow] = useState(false);
    const handleOpen = () => {
        setCustomerShow(!customerShow);
    };
    const [notesShow, setNotesShow] = useState(false);
    const handleOpen2 = () => {
        setNotesShow(!notesShow);
    };
    const [showDropdown, setShowDropdown] = useState(false)
    const showDrop = () => {
        setShowDropdown(!showDropdown)
    }
    return (
        <>
            <div className="customerStep customerOnboard">
                <h3>Select the products you plan on presenting</h3>

                <div
                    className=" mt-6 grid grid-flow-row gap-8 items-start  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ">
                    <div className="filterProductItem">
                        <div className="filterHead relative">
                            <p>LaNova Bistro</p>
                            <button onClick={showDrop}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path
                                        d="M8.0011 9.50221C8.83014 9.50221 9.50221 8.83014 9.50221 8.0011C9.50221 7.17207 8.83014 6.5 8.0011 6.5C7.17207 6.5 6.5 7.17207 6.5 8.0011C6.5 8.83014 7.17207 9.50221 8.0011 9.50221Z"
                                        fill="white"/>
                                    <path
                                        d="M13.0011 9.50221C13.8301 9.50221 14.5022 8.83014 14.5022 8.0011C14.5022 7.17207 13.8301 6.5 13.0011 6.5C12.1721 6.5 11.5 7.17207 11.5 8.0011C11.5 8.83014 12.1721 9.50221 13.0011 9.50221Z"
                                        fill="white"/>
                                    <path
                                        d="M3.0011 9.50221C3.83014 9.50221 4.50221 8.83014 4.50221 8.0011C4.50221 7.17207 3.83014 6.5 3.0011 6.5C2.17207 6.5 1.5 7.17207 1.5 8.0011C1.5 8.83014 2.17207 9.50221 3.0011 9.50221Z"
                                        fill="white"/>
                                </svg>
                            </button>
                            <div className={showDropdown ? "show createNewDropDown" : "createNewDropDown"}>
                                <ul>
                                    <li>
                                        <input type="checkbox"/>
                                        <label>
                                            <span>  <img src="/images/icon1.svg"/></span>
                                            Notes
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <label>
                                            <span> <img src="/images/icon2.svg"/></span>
                                            Alarm
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <label>
                                            <span> <img src="/images/icon3.svg"/></span>
                                            Pickup
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <label>
                                            <span> <img src="/images/icon4.svg"/></span>
                                            Tasting
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <label>
                                            <span>   <img src="/images/icon5.svg"/></span>
                                            Sample request
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <label>
                                            <span> <img src="/images/icon6.svg"/></span>
                                            Reship
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <label>
                                            <span> <img src="/images/icon7.svg"/></span>
                                            Allocations
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <label>
                                            <span>  <img src="/images/icon8.svg"/></span>
                                            Invoice issue
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <label>
                                            <span>  <img src="/images/icon9.svg"/></span>
                                            Meet
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <label>
                                            <span>  <img src="/images/icon10.svg"/></span>
                                            Promo
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <label>
                                            <span>  <img src="/images/icon11.svg"/></span>
                                            Order reminder
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <label>
                                            <span>  <img src="/images/icon12.svg"/></span>
                                            POS request
                                        </label>
                                    </li>
                                </ul>
                                <button className="btn-save  mx-auto mt-6 mb-3 block"> Next</button>
                            </div>
                        </div>
                        <div className="py-5 px-4">
                            <div className="mb-4 filterProductList active">
                                <p>Three Taverns - Night on Ponce</p>
                                <div className="flex gap-2">
                                    <span> <img src="/images/smile.svg"/></span>
                                    <span> <img src="/images/smile.svg"/></span>
                                    <span><img src="/images/fluent_clock.svg"/></span>
                                    <button onClick={FilterShow}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M8.0011 9.50221C8.83014 9.50221 9.50221 8.83014 9.50221 8.0011C9.50221 7.17207 8.83014 6.5 8.0011 6.5C7.17207 6.5 6.5 7.17207 6.5 8.0011C6.5 8.83014 7.17207 9.50221 8.0011 9.50221Z"
                                                fill="white"/>
                                            <path
                                                d="M13.0011 9.50221C13.8301 9.50221 14.5022 8.83014 14.5022 8.0011C14.5022 7.17207 13.8301 6.5 13.0011 6.5C12.1721 6.5 11.5 7.17207 11.5 8.0011C11.5 8.83014 12.1721 9.50221 13.0011 9.50221Z"
                                                fill="white"/>
                                            <path
                                                d="M3.0011 9.50221C3.83014 9.50221 4.50221 8.83014 4.50221 8.0011C4.50221 7.17207 3.83014 6.5 3.0011 6.5C2.17207 6.5 1.5 7.17207 1.5 8.0011C1.5 8.83014 2.17207 9.50221 3.0011 9.50221Z"
                                                fill="white"/>
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className={filterDropShow ? "filterProductDropdown show" : "filterProductDropdown"}>
                                    <ul>
                                        <li>
                 <span onClick={handleOpen}> <img src="/images/reaction.svg"/>
                  Customer reaction  </span>
                                            {customerShow && (
                                                <div className="pt-2 px-3 bg-white filterDropContent">
                                                    <img src="/images/smilie.svg"/>
                                                </div>
                                            )}
                                        </li>

                                        <li>
                 <span onClick={handleOpen2}>  <img src="/images/notes.svg"/>
                  Add notes</span>
                                            {notesShow && (
                                                <div className="pt-2 px-3 bg-white filterDropContent">
                                                    <textarea className="w-full border rounded"/>
                                                </div>
                                            )}
                                        </li>
                                        <li>
               <span> <img src="/images/sparkles2.svg"/>
                View experience</span>
                                        </li>
                                        <li>
                <span><img src="/images/bi_trash.svg"/>
                Remove item</span>
                                        </li>
                                        <li>
            <span>    <img src="/images/replace.svg"/>
                Replace item</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="afterAddFilter">
                                    <span className="flex items-center gap-4"><img src="/images/smile.svg"/> John Loved the new wine, said it was breathtaking</span>
                                    <button><img src="/images/bi_trash.svg"/></button>
                                </div>
                                <div className="afterAddFilter">
                                    <span className="flex items-center gap-4"><img src="/images/smile.svg"/> Wanda, Johns wife hated the wine. Said it was too sweet</span>
                                    <button><img src="/images/bi_trash.svg"/></button>
                                </div>
                                <div className="afterAddFilter">
            <span className="flex items-center gap-4">
            <span className="w-6 h-6 rounded-[50px] flex items-center justify-center bg-gray-100"><img
                src="/images/notes.svg"/></span> Wanda, Johns wife hated the wine. Said it was too sweet</span>
                                    <button><img src="/images/bi_trash.svg"/></button>
                                </div>
                                <div className="afterAddFilter">
            <span className="flex items-center gap-4">
            <span className="w-6 h-6 rounded-[50px] flex items-center justify-center bg-gray-100"><img
                src="/images/notes.svg"/></span> Wanda, Johns wife hated the wine. Said it was too sweet</span>
                                    <button><img src="/images/bi_trash.svg"/></button>
                                </div>
                            </div>


                            <div className="mb-4 filterProductList">
                                <p>Libby Wine</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path
                                        d="M8.0011 9.50221C8.83014 9.50221 9.50221 8.83014 9.50221 8.0011C9.50221 7.17207 8.83014 6.5 8.0011 6.5C7.17207 6.5 6.5 7.17207 6.5 8.0011C6.5 8.83014 7.17207 9.50221 8.0011 9.50221Z"
                                        fill="white"/>
                                    <path
                                        d="M13.0011 9.50221C13.8301 9.50221 14.5022 8.83014 14.5022 8.0011C14.5022 7.17207 13.8301 6.5 13.0011 6.5C12.1721 6.5 11.5 7.17207 11.5 8.0011C11.5 8.83014 12.1721 9.50221 13.0011 9.50221Z"
                                        fill="white"/>
                                    <path
                                        d="M3.0011 9.50221C3.83014 9.50221 4.50221 8.83014 4.50221 8.0011C4.50221 7.17207 3.83014 6.5 3.0011 6.5C2.17207 6.5 1.5 7.17207 1.5 8.0011C1.5 8.83014 2.17207 9.50221 3.0011 9.50221Z"
                                        fill="white"/>
                                </svg>
                            </div>
                            <div className="mb-4 filterProductList">
                                <p>Titos Vodka</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path
                                        d="M8.0011 9.50221C8.83014 9.50221 9.50221 8.83014 9.50221 8.0011C9.50221 7.17207 8.83014 6.5 8.0011 6.5C7.17207 6.5 6.5 7.17207 6.5 8.0011C6.5 8.83014 7.17207 9.50221 8.0011 9.50221Z"
                                        fill="white"/>
                                    <path
                                        d="M13.0011 9.50221C13.8301 9.50221 14.5022 8.83014 14.5022 8.0011C14.5022 7.17207 13.8301 6.5 13.0011 6.5C12.1721 6.5 11.5 7.17207 11.5 8.0011C11.5 8.83014 12.1721 9.50221 13.0011 9.50221Z"
                                        fill="white"/>
                                    <path
                                        d="M3.0011 9.50221C3.83014 9.50221 4.50221 8.83014 4.50221 8.0011C4.50221 7.17207 3.83014 6.5 3.0011 6.5C2.17207 6.5 1.5 7.17207 1.5 8.0011C1.5 8.83014 2.17207 9.50221 3.0011 9.50221Z"
                                        fill="white"/>
                                </svg>
                            </div>
                            <div className=" mb-4 filterProductList">
                                <p>El Tesoro Tequila </p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path
                                        d="M8.0011 9.50221C8.83014 9.50221 9.50221 8.83014 9.50221 8.0011C9.50221 7.17207 8.83014 6.5 8.0011 6.5C7.17207 6.5 6.5 7.17207 6.5 8.0011C6.5 8.83014 7.17207 9.50221 8.0011 9.50221Z"
                                        fill="white"/>
                                    <path
                                        d="M13.0011 9.50221C13.8301 9.50221 14.5022 8.83014 14.5022 8.0011C14.5022 7.17207 13.8301 6.5 13.0011 6.5C12.1721 6.5 11.5 7.17207 11.5 8.0011C11.5 8.83014 12.1721 9.50221 13.0011 9.50221Z"
                                        fill="white"/>
                                    <path
                                        d="M3.0011 9.50221C3.83014 9.50221 4.50221 8.83014 4.50221 8.0011C4.50221 7.17207 3.83014 6.5 3.0011 6.5C2.17207 6.5 1.5 7.17207 1.5 8.0011C1.5 8.83014 2.17207 9.50221 3.0011 9.50221Z"
                                        fill="white"/>
                                </svg>
                            </div>
                            <div className="filterProductList">
                                <p>Jameson Whiskey</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path
                                        d="M8.0011 9.50221C8.83014 9.50221 9.50221 8.83014 9.50221 8.0011C9.50221 7.17207 8.83014 6.5 8.0011 6.5C7.17207 6.5 6.5 7.17207 6.5 8.0011C6.5 8.83014 7.17207 9.50221 8.0011 9.50221Z"
                                        fill="white"/>
                                    <path
                                        d="M13.0011 9.50221C13.8301 9.50221 14.5022 8.83014 14.5022 8.0011C14.5022 7.17207 13.8301 6.5 13.0011 6.5C12.1721 6.5 11.5 7.17207 11.5 8.0011C11.5 8.83014 12.1721 9.50221 13.0011 9.50221Z"
                                        fill="white"/>
                                    <path
                                        d="M3.0011 9.50221C3.83014 9.50221 4.50221 8.83014 4.50221 8.0011C4.50221 7.17207 3.83014 6.5 3.0011 6.5C2.17207 6.5 1.5 7.17207 1.5 8.0011C1.5 8.83014 2.17207 9.50221 3.0011 9.50221Z"
                                        fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="filterProductItem">
                        <div className="filterHead">
                            <p>LaNova Bistro</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                 fill="none">
                                <path
                                    d="M8.0011 9.50221C8.83014 9.50221 9.50221 8.83014 9.50221 8.0011C9.50221 7.17207 8.83014 6.5 8.0011 6.5C7.17207 6.5 6.5 7.17207 6.5 8.0011C6.5 8.83014 7.17207 9.50221 8.0011 9.50221Z"
                                    fill="white"/>
                                <path
                                    d="M13.0011 9.50221C13.8301 9.50221 14.5022 8.83014 14.5022 8.0011C14.5022 7.17207 13.8301 6.5 13.0011 6.5C12.1721 6.5 11.5 7.17207 11.5 8.0011C11.5 8.83014 12.1721 9.50221 13.0011 9.50221Z"
                                    fill="white"/>
                                <path
                                    d="M3.0011 9.50221C3.83014 9.50221 4.50221 8.83014 4.50221 8.0011C4.50221 7.17207 3.83014 6.5 3.0011 6.5C2.17207 6.5 1.5 7.17207 1.5 8.0011C1.5 8.83014 2.17207 9.50221 3.0011 9.50221Z"
                                    fill="white"/>
                            </svg>
                        </div>
                        <div className="py-5 px-4">

                            <div className="mb-4 filterProductList">
                                <p>Titos Vodka</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path
                                        d="M8.0011 9.50221C8.83014 9.50221 9.50221 8.83014 9.50221 8.0011C9.50221 7.17207 8.83014 6.5 8.0011 6.5C7.17207 6.5 6.5 7.17207 6.5 8.0011C6.5 8.83014 7.17207 9.50221 8.0011 9.50221Z"
                                        fill="white"/>
                                    <path
                                        d="M13.0011 9.50221C13.8301 9.50221 14.5022 8.83014 14.5022 8.0011C14.5022 7.17207 13.8301 6.5 13.0011 6.5C12.1721 6.5 11.5 7.17207 11.5 8.0011C11.5 8.83014 12.1721 9.50221 13.0011 9.50221Z"
                                        fill="white"/>
                                    <path
                                        d="M3.0011 9.50221C3.83014 9.50221 4.50221 8.83014 4.50221 8.0011C4.50221 7.17207 3.83014 6.5 3.0011 6.5C2.17207 6.5 1.5 7.17207 1.5 8.0011C1.5 8.83014 2.17207 9.50221 3.0011 9.50221Z"
                                        fill="white"/>
                                </svg>
                            </div>
                            <div className=" mb-4 filterProductList">
                                <p>El Tesoro Tequila </p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path
                                        d="M8.0011 9.50221C8.83014 9.50221 9.50221 8.83014 9.50221 8.0011C9.50221 7.17207 8.83014 6.5 8.0011 6.5C7.17207 6.5 6.5 7.17207 6.5 8.0011C6.5 8.83014 7.17207 9.50221 8.0011 9.50221Z"
                                        fill="white"/>
                                    <path
                                        d="M13.0011 9.50221C13.8301 9.50221 14.5022 8.83014 14.5022 8.0011C14.5022 7.17207 13.8301 6.5 13.0011 6.5C12.1721 6.5 11.5 7.17207 11.5 8.0011C11.5 8.83014 12.1721 9.50221 13.0011 9.50221Z"
                                        fill="white"/>
                                    <path
                                        d="M3.0011 9.50221C3.83014 9.50221 4.50221 8.83014 4.50221 8.0011C4.50221 7.17207 3.83014 6.5 3.0011 6.5C2.17207 6.5 1.5 7.17207 1.5 8.0011C1.5 8.83014 2.17207 9.50221 3.0011 9.50221Z"
                                        fill="white"/>
                                </svg>
                            </div>
                            <div className="filterProductList">
                                <p>Jameson Whiskey</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <path
                                        d="M8.0011 9.50221C8.83014 9.50221 9.50221 8.83014 9.50221 8.0011C9.50221 7.17207 8.83014 6.5 8.0011 6.5C7.17207 6.5 6.5 7.17207 6.5 8.0011C6.5 8.83014 7.17207 9.50221 8.0011 9.50221Z"
                                        fill="white"/>
                                    <path
                                        d="M13.0011 9.50221C13.8301 9.50221 14.5022 8.83014 14.5022 8.0011C14.5022 7.17207 13.8301 6.5 13.0011 6.5C12.1721 6.5 11.5 7.17207 11.5 8.0011C11.5 8.83014 12.1721 9.50221 13.0011 9.50221Z"
                                        fill="white"/>
                                    <path
                                        d="M3.0011 9.50221C3.83014 9.50221 4.50221 8.83014 4.50221 8.0011C4.50221 7.17207 3.83014 6.5 3.0011 6.5C2.17207 6.5 1.5 7.17207 1.5 8.0011C1.5 8.83014 2.17207 9.50221 3.0011 9.50221Z"
                                        fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default StepThree