'use client';
  
import { Slide } from './Slide';

export function Technologies() {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center items-center">
        <Slide techName="vercel" />
        <Slide techName="next" />
        <Slide techName="react" />
        <Slide techName="unity" />
        <Slide techName="mistral" />
      </div>

    </div>
  );
}
