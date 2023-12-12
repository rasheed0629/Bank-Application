
import React from 'react';
import './Linked.css';
import SwipeToSubmit from './SwipeToSubmit';

const Linked = () => {

    return (
        <>
            <div className="container">
                <h2>We found your accounts</h2>
                <p>Select and confirm the account you want to select.</p>
            </div>
            <div className="card-container">
                <div className="card">
                    <div className="card-section">
                        <img className="card-image" src="bank.jpg" alt="Bank Image" />
                        <p>HDFC Bank<br />Found two accounts to link</p>
                    </div>

                    <div className="card-section">
                        <p style={{ marginRight: '5px' }}>Savings..2791</p>
                        <h3 style={{ marginRight: "75px", color: "green" }}>Linked</h3>
                        <input type="checkbox" className="custom-checkbox" checked />
                    </div>

                    <div className="card-section">
                        <p style={{ marginRight: '5px' }}>Current..3715</p>
                        <h3 style={{ marginRight: "75px", color: "green" }}>Linked</h3>
                        <input type="checkbox" className="custom-checkbox" checked />
                    </div>
                </div>
            </div>
            <SwipeToSubmit />
        </>
    );
};
export default Linked;
