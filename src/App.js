import React, { useState } from 'react';

import './App.css';
import Slider from './slider/Slider';

const App = () => {
  const [rangeValue, setRangeValue] = useState(10);

  const onChangeSlider = e => {
    setRangeValue(parseInt(e.target.value, 10));
  }

  return (
    <div className="App">
      <div className="App-header">
        <p>React Slider Component</p>
        <Slider 
          min={0}
          max={100}
          step={1}
          defaultLength={rangeValue}
          value={rangeValue}
          onChangeValue={onChangeSlider}
          linearGradientColor="#4aa1f3"
          rangeBackgroundColor="#d7dcdf"
          sliderThumbColor="#4aa1f3"
        />
      </div>
    </div>
  );
}

export default App;
