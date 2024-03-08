import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Helmet, HelmetProvider } from "react-helmet-async";

import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";


const OnBoarding = () => {
  const [step, setStep] = useState(1);

  const backStep = () => {
    setStep(step - 1)
  }
  const nextStep = () => {
    setStep(step + 1)
  }
  return (
    <div className=" flex w-full">
      {/* <HelmetProvider>
        <Helmet>
          <title>Positiive | Sign Up </title>
        </Helmet>
      </HelmetProvider> */}

      <div className=" w-full">
        <div className="headerLogin">
          <Link to="/">
            <img src="/images/logo.webp" />
          </Link>
        </div>
        <div className=" w-full my-10 onBoardPage ">
          <div className="onboardingArea mx-auto rounded-xl ">
            {
              step === 1 && <StepOne />
            }
            {
              step === 2 && <StepTwo />
            }
            {
              step === 3 && <StepThree />
            }

            <div className="actionBtn flex w-full justify-between md:flex-row flex-col pt-7 gap-4 md:gap-0 relative md:pt-24 items-center   ">

              {step > 1 && (
                <button className="prevBtn" onClick={backStep}>Back</button>
              )}
              {step !== 3 && (
                <button className="nextBtn ml-auto" onClick={nextStep}>Continue</button>
              )}
            </div>        
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
