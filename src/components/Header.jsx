import React from 'react';
import Sliders from './Sliders';

const Header = ({ colour, sliderChange }) => {
  const { red, green, blue } = colour;

  return (
    <header>
      <p>{`rgb(${red}, ${green}, ${blue})`}</p>
      <div
        style={{ backgroundColor: `rgb(${red},${green},${blue})` }}
        className='block'></div>
      <Sliders colour={colour} sliderChange={sliderChange} />
    </header>
  );
};

export default Header;
