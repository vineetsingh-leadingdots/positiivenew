import React, { useState } from 'react';
import Slider from 'react-slider';


const PriceSlider = () => {
  const [values, setValues] = useState([0, 6000]);
  const handleChange = (newValues) => setValues(newValues);

  return (
    <>
    <p className='text-center pb-4 flex justify-between'><span className='mr-1'>${values[0]}</span> <span>${values[1]}</span></p>
     <Slider
        className="slider "
        value={values}
        onChange={handleChange}
        min={0}
        max={6000}
      />
    </>
     
  
  );
};

export default PriceSlider;