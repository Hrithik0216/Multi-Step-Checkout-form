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
      <input
        {...getCardNumberProps({ onChange: handleChangeCardNumber })}
        value={cardNumber}
        required
      />
      <input
        {...getExpiryDateProps({ onChange: handleChangeExpiryDate })}
        value={expiryDate}
        required
      />
      <input
        {...getCVCProps({ onChange: handleChangeCVC })}
        value={cvc}
        required
      />
      {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
    </div>
  );
};

export default Details;
