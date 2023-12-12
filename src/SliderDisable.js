
import React, { useState } from 'react';
import './SwipeToSubmit.css'; 

const SliderDisable = () => {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <div className="container">
      <div className="container">
        <form style={{ marginTop: '100px' }}>
          <button type="button" style={{ padding: '10px', backgroundColor: 'LightGray', color: 'white' }}>
            Swipe to Submit
            <input type="range" min="0" max="100" value={sliderValue}  disabled
            style={{ width: '100%', cursor: 'pointer' }} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SliderDisable;
