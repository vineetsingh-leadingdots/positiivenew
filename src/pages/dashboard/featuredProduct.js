import React, { useState } from 'react';
import { Carousel } from 'antd';

const FeaturedProduct = () => {
  return (
    <>
    
      <Carousel  arrows={true} dots={false} >
      <div className='producSlide '>
          <img src="/images/product.webp" />
       <div className="pl-[4px]">
       <h3>Diageo Select Package</h3>
          <span>10 premium bottles</span>
          <p>Nunc in magna sollicitudin, sodales ex in, blandit tortor. Nunc sit amet dolor venenatis nulla pharetra commodo. Pellentesque at metus eget mauris aliquam consectetur.
          </p>
       </div>

        </div>
        <div className='producSlide '>
          <img src="/images/product.webp" />
       <div className="pl-[4px]">
       <h3>Diageo Select Package</h3>
          <span>10 premium bottles</span>
          <p>Nunc in magna sollicitudin, sodales ex in, blandit tortor. Nunc sit amet dolor venenatis nulla pharetra commodo. Pellentesque at metus eget mauris aliquam consectetur.
          </p>
       </div>
        </div>
        <div className='producSlide '>
          <img src="/images/product.webp" />
       <div className="pl-[4px]">
       <h3>Diageo Select Package</h3>
          <span>10 premium bottles</span>
          <p>Nunc in magna sollicitudin, sodales ex in, blandit tortor. Nunc sit amet dolor venenatis nulla pharetra commodo. Pellentesque at metus eget mauris aliquam consectetur.
          </p>
       </div>
        </div>
      </Carousel>
    </>
  );
};
export default FeaturedProduct;