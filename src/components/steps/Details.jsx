import React, { useState } from "react";
import { usePaymentInputs } from "react-payment-inputs";

const Details = ({ handleNext }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCVC] = useState("");
  
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } =
    usePaymentInputs();

  const handleChangeCardNumber = (e) => {
    setCardNumber(e.target.value);
  };

  const handleChangeExpiryDate = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleChangeCVC = (e) => {
    setCVC(e.target.value);
  };


  return (
    <div>
      <div className="flex justify-center mb-10 items-center  bg-white-100">
      <h1 className="text-3xl text-green-500 text-center">Please Enter your card details</h1>
    </div>
      <input
        {...getCardNumberProps({ onChange: handleChangeCardNumber })}
        value={cardNumber}
        required
        maxLength={19}
      />
      <input
        {...getExpiryDateProps({ onChange: handleChangeExpiryDate })}
        value={expiryDate}
        required
      />
      <input
        {...getCVCProps({ onChange: handleChangeCVC })}
        value={cvc}
        maxLength="3"
        required
      />
      {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
    </div>
  );
};

export default Details;