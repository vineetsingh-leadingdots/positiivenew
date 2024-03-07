import React, {useState} from "react";
import StepOne from "./step1";
import StepTwo from "./step2";
import StepThree from "./step3";
import StepFour from "./step4";


const CustomerOnboarding = () => {
    const [step, setStep] = useState(1);
    const backStep = () => {
        setStep(step - 1)
    }
    const nextStep = () => {
        setStep(step + 1)
    }

   

    return (
        <>
        <div className="header ">
        {
                    step === 1 && <h3>Select Customers</h3>
        }
         {
                    step === 2 && <h3>Choose Products</h3>
        }
         {
                    step === 3 && <h3>Filter Products</h3>
        }
         {
                    step === 4 && <h3>Present Products</h3>
        }
    </div>
        <div className=" w-full calendarStep  ">
            <div className="stepper-wrapper">
                <div className={step === 1 ? "stepper-item active" : "stepper-item active"}>
                    <div className="step-counter">1</div>
                    <div className="step-name">Customers</div>
                </div>
                <div className={step >= 2 ? "stepper-item active" : "stepper-item "}>
                    <div className="step-counter">2</div>
                    <div className="step-name">Products</div>
                </div>
                <div className={step >= 3 ? "stepper-item active" : "stepper-item "}>
                    <div className="step-counter">3</div>
                    <div className="step-name">Filter</div>
                </div>
                <div className={step === 4 ? "stepper-item active" : "stepper-item "}>
                    <div className="step-counter">4</div>
                    <div className="step-name">Present</div>
                </div>
            </div>
            <div className="w-full mt-6">
                {
                    step === 1 && <StepOne
                        
                    />
                }
                {
                    step === 2 && <StepTwo/>
                }
                {
                    step === 3 && <StepThree
                        
                    />
                }
                {
                    step === 4 && <StepFour
                      
                    />
                }
            </div>
            <div
                className="actionBtn ">

                {step !== 1 && (
                    <button onClick={() => setStep(step - 1)}>
                        <button className="prevBtn" onClick={() => backStep()}>Back</button>
                    </button>
                )}

                {step === 4 ?
                    <button type={'button'} className="nextBtn md:ml-auto"
                            onClick={() => nextStep()}>Save</button>
                    :
                    <button className="nextBtn ml-auto" onClick={() => nextStep()}>Continue</button>
                }
            </div>
        </div>
        </>
    );
};

export default CustomerOnboarding;
