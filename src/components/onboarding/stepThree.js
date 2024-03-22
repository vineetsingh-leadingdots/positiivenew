import React from "react";
import { Link } from "react-router-dom";
import { RightArrow, WhiteCheckBox } from "../../commonComponents/commonSvg";

const StepThree = () => {
  return (
    <>
      <div className="succesfullMsg">
        <WhiteCheckBox /> Your account has successfully been created.
      </div>
      <div className="w-full ">
        <div className="flex justify-end">
          <div className="onBoardImg">
            <img src="/images/img_bottles.webp" />
          </div>
        </div>
        <div className="flex youAreDone flex-col gap-9 justify-center items-center md:mt-[215px] mt-10">
          <h2>You’re done !</h2>
          <Link
            to="/dashboard"
            className="btnGoHome hover:bg-[#2A9D8F] transition-all ease-in-out   w-full md:py-3 py-2 leading-10 max-w-[326px] rounded-[8px] bgBlue text-white flex justify-center gap-1 md:text-[24px] text-xl items-center"
          >
            Go to your home page
            <RightArrow />
          </Link>
        </div>
      </div>
    </>
  );
};

export default StepThree;
