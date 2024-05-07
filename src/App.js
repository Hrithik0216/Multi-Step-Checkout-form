import React, { useState } from "react";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import Account from "./components/steps/Account";
import Details from "./components/steps/Details";
import Final from "./components/steps/Final";
import { stepperContext } from "./contexts/stepperContext";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    address: ""
  });
  const [finalData, setFinalData] = useState([]);
  const steps = ["Account Information", "Personal Details", "Complete"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account userData={userData} setUserData={setUserData} />;
      case 2:
        return <Details />;
      case 3:
        return <Final />;
      default:
    }
  };

  const isFormValid = () => {
    return userData.username && userData.email && userData.address;
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? (newStep += 1) : (newStep -= 1);
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      <div className="horizontal container mt-5">
        <Stepper steps={steps} currentStep={currentStep} />
        <div className="my-10 p-10">
          <stepperContext.Provider
            value={{ userData, setUserData, finalData, setFinalData }}
          >
            {displayStep(currentStep)}
          </stepperContext.Provider>
        </div>
      </div>

      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
        isFormValid={isFormValid}
      />
    </div>
  );
}

export default App;
