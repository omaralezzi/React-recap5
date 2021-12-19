import { useState } from 'react';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [colour, setColour] = useState({ red: '00', green: '00', blue: '00' });

  const sliderChange = (e) => {
    setColour({ ...colour, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header colour={colour} sliderChange={sliderChange} />
      <main
        style={{
          backgroundColor: `rgb(${colour.red}, ${colour.green}, ${colour.blue})`,
        }}></main>
    </>
  );
};

export default App;
