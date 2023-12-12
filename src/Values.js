import React, { useState, useEffect } from 'react';
import './Values.css'; 
import { useNavigate } from 'react-router-dom';

const Values = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('123456');
  const [inputValue, setInputValue] = useState('');

  const handleNumberClick = (number) => {
    if (inputValue.length < otp.length) {
      setInputValue((prevInputValue) => prevInputValue + number);
    }
  };

  const handleDefaultClick = () => {
    setInputValue(otp);
  };
  const handleDefaultClic = () => {
    navigate('/link');
  };

  useEffect(() => {
    if (inputValue.length === otp.length) {
      setTimeout(() => {
        navigate('/link');
      }, 3000);
    }
  }, [inputValue, otp]);

  return (
    <div className="number-pad-dialog">
      <h2 style={{ marginRight: "140px" }}>Link Accounts</h2>
      <p>You will receive a 6-digit code on your phone number +91 9876543210 from HDFC Bank</p>

      <input type="text" value={inputValue} placeholder="Enter OTP"  className="otp-input" />

      <p>Didn't receive it? Resend in 15</p>
      
      <button type="button" disabled={inputValue.length !== 6} onClick={handleDefaultClic}>Confirm</button><br />
      <button type="button" placeholder='from messages' onClick={handleDefaultClick}>From messages<br />{otp}</button>

      <div className="number-pad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <button key={number} onClick={() => handleNumberClick(number)}>
            {number}
          </button>
        ))}
        <button >&lt;</button>
        <button onClick={()=>handleNumberClick(0)}>0</button>
        <button onClick={()=>setInputValue("")}>Reset</button>
      </div>
    </div>
  );
};

export default Values;
