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