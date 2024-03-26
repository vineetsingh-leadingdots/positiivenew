import React, { useState } from 'react';
import { Row, Slider, ConfigProvider } from 'antd';

const PriceSlider = () => {
  const [sliderValue, setSliderValue] = useState([20, 50]);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            handleColor: '#000', 
            railColor: 'red', 
            dotActiveBorderColor: '#264653',
            trackBg:'#264653',
            dotSize:'20px',          
            dotBorderColor:'#264653',
            handleSize:"20px",
            railSize:"10px",
            //dotBorderColor:"#264653",
            controlSize:"80px",
            handleSizeHover:"20px",
            trackHoverBg:"#264653",
            handleStyle: { 
              boxShadow: '0px 0px 0px rgba(0, 0, 0, 60)',
            },
          },
        },
      }}
    >
      <div>
        <Row className='flex justify-between ' justify="space-between">
          <p>${sliderValue[0]}</p>
          <p>${sliderValue[1]}</p>
        </Row>
        <Slider
          range={{ draggableTrack: true }}
          defaultValue={[20, 50]}
          onChange={handleSliderChange}
        />
      </div>
    </ConfigProvider>
  );
};

export default PriceSlider;
