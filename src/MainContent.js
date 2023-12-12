
import React from 'react';
import './MainContent.css'; 
import { useNavigate } from 'react-router-dom';
import SliderDisable from './SliderDisable';

const MainContent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/effect');
  };

  return (
    <>
      <div className="container">
        <h2>We found your accounts</h2>
        <p>Select and confirm the account you want to select.</p>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-section">
            <img className="card-image" src="bank.jpg"/>
            <p>HDFC Bank <br/>Found two accounts to link</p>
            <button className="button" onClick={ handleButtonClick}>
              Button
            </button>
          </div>

          <div className="card-section">
            <p style={{ marginRight: '125px' }}>Savings..2791</p>
            <input type="checkbox" id="checkbox" checked />
          </div>

          <div className="card-section">
            <p style={{ marginRight: '125px' }}>Current..3715</p>
            <input type="checkbox" id="checkbox" checked />
          </div>
        </div>
      </div>

      <SliderDisable />
    </>
  );
};

export default MainContent;
