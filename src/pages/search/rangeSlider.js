import * as React from 'react';
import { Range, getTrackBackground } from 'react-range';

const STEP = 1;
const MIN = 10;
const MAX = 99;

const LabeledTwoThumbs = () => {
  const [values, setValues] = React.useState([20, 40]);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
    
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%'
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '30px',
                border:'1px solid #C0C0C0',
                // background: getTrackBackground({
                //   values,
                //   colors: ['#ccc', '#548BF4', '#ccc'],
                //   min: MIN,
                //   max: MAX,
                 
                // }),
                alignSelf: 'center'
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '20px',
              width: '20px',
              borderRadius: '50%',
              backgroundColor: '#5F8797',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              
            }}
          >
            <div className='dropIcon'
              style={{
                position: 'absolute',
                top: '-28px',
                color: '#fff',               
                backgroundColor: '#5F8797'
              }}
            >
              <span>${values[index].toFixed()}</span>
            </div>
            <div
              style={{
                // height: '16px',
                // width: '5px',
                backgroundColor: isDragged ? '#548BF4' : '#CCC'
              }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default LabeledTwoThumbs;