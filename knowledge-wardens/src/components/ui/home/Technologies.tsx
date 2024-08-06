'use client';

import { Carousel } from '@material-tailwind/react';
import { Slide } from './Slide';

export function Technologies() {
  return (
    <div className="slider-container">
      <Carousel 
        className="flex overflow-hidden" 
        autoplay={true}
        autoplayDelay={3000}
        loop={true} 
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Slide techName="vercel" />
        <Slide techName="next" /> 
        <Slide techName="react" />    
        <Slide techName="unity" />
        <Slide techName="mistral" />
      </Carousel>
    </div>
  );
}