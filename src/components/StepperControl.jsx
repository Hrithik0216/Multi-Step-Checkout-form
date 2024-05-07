import React from "react";

const StepperControl = ({ steps, currentStep, handleClick, isFormValid }) => {
  const isFinalStep = currentStep === steps.length;

  return (
    <div className="container mt-4 mb-8 flex justify-around">
      {currentStep > 1 && !isFinalStep && (
        <button
          onClick={() => handleClick("back")}
          disabled={currentStep === 1}
          className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
            currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
          }`}
        >
          Back
        </button>
      )}

      {!isFinalStep && (
        <button
          onClick={() => {
            if (isFinalStep || isFormValid()) {
              handleClick("next");
            } else {
              alert("Please fill in all the details");
            }
          }}
          disabled={isFinalStep || !isFormValid()}
          className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
        >
          {isFinalStep ? "Confirm" : "Next"}
        </button>
      )}
    </div>
  );
};

export default StepperControl;
