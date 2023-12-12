
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SwipeToSubmit.css'; // Import your CSS file

const SwipeToSubmit = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const navigate = useNavigate();

  const handleSliderChange = (e) => {
    const value = e.target.value;
    //const value = parseInt(event.target.value, 10);
    setSliderValue(value);
    if (value > 95) {
        navigate('/success'); 
    }
  };

  return (
    <div className="container">
      <form style={{ marginTop: '100px' }}>
        <button type="button" style={{padding: '10px',backgroundColor:'#ADD8E6',color: 'white'}}>                                      
          Swipe to Submit
          <input type="range" id="swipeSlider" min="0" max="100"  value={sliderValue} onChange={handleSliderChange}                                                            
            style={{ width: '100%', cursor: 'pointer' }}/>   
        </button>
      </form>
    </div>
  );
};

export default SwipeToSubmit;
