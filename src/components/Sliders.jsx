import React from 'react';

const Sliders = ({ colour, sliderChange }) => {
  const { red, green, blue } = colour;

  return (
    <div>
      <label id='red'>Red</label>
      <input
        onChange={sliderChange}
        type='range'
        min='0'
        max='255'
        name='red'
        value={red}
      />
      <label id='green'>Green</label>
      <input
        onChange={sliderChange}
        type='range'
        min='0'
        max='255'
        name='green'
        value={green}
      />
      <label id='blue'>Blue</label>
      <input
        onChange={sliderChange}
        type='range'
        min='0'
        max='255'
        name='blue'
        value={blue}
      />
    </div>
  );
};

export default Sliders;
