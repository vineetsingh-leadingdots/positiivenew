import React, { useState } from "react";
import { Link } from "react-router-dom";


const StepThree = () => {

return (
<>
       <div className="succesfullMsg">
       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<path d="M12.186 2.43701C6.80994 2.43701 2.43604 6.81092 2.43604 12.187C2.43604 17.5631 6.80994 21.937 12.186 21.937C17.5621 21.937 21.936 17.5631 21.936 12.187C21.936 6.81092 17.5621 2.43701 12.186 2.43701ZM17.2603 8.91936L10.9603 16.4194C10.8911 16.5017 10.8052 16.5682 10.7081 16.6143C10.6111 16.6605 10.5052 16.6853 10.3978 16.687H10.3851C10.28 16.687 10.176 16.6648 10.08 16.622C9.984 16.5792 9.89806 16.5167 9.82775 16.4386L7.12775 13.4386C7.05918 13.3658 7.00584 13.2801 6.97087 13.1865C6.93589 13.0929 6.91999 12.9932 6.92409 12.8933C6.92818 12.7934 6.95221 12.6954 6.99474 12.6049C7.03727 12.5145 7.09746 12.4334 7.17176 12.3666C7.24606 12.2997 7.33297 12.2484 7.4274 12.2156C7.52182 12.1828 7.62185 12.1692 7.7216 12.1756C7.82135 12.182 7.91881 12.2083 8.00825 12.2529C8.0977 12.2976 8.17732 12.3596 8.24244 12.4355L10.3654 14.7942L16.1118 7.95467C16.2407 7.80564 16.4231 7.71333 16.6195 7.69768C16.8159 7.68202 17.0106 7.7443 17.1615 7.87103C17.3123 7.99776 17.4073 8.17877 17.4258 8.37494C17.4442 8.57111 17.3848 8.76667 17.2603 8.91936Z" fill="white"/>
</svg> Your account has successfully been created.
        </div>    
        <div className="w-full ">
            <div className="flex justify-end">           
                <div className="onBoardImg">
                    <img src="/images/img_bottles.webp" />
                </div>
            </div>

            <div className="flex flex-col gap-9 justify-center items-center md:mt-[215px] mt-10">
                <h2>You’re done !</h2>
                <Link to="/dashboard" className=" hover:bg-[#2A9D8F] transition-all ease-in-out   w-full md:py-3 py-2 leading-10 max-w-[326px] rounded-[8px] bgBlue text-white flex justify-center gap-1 md:text-[24px] text-xl items-center">Go to your home page 
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M22 16L12 26L10.6 24.6L19.2 16L10.6 7.4L12 6L22 16Z" fill="white"/>
                    </svg>
                </Link>
            </div>

       
        </div>
   
</>
)
}

export default StepThree