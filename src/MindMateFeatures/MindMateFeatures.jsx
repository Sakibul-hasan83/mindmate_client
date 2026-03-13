import React from 'react';
import SlideComponets from './SlideComponets';

const MindMateFeatures = () => {
  return (
    /* Added transition-colors for smooth theme switching 
       and ensured the background adapts to the dark theme.
    */
    <div className="bg-white dark:bg-[#0f172a] transition-colors duration-300">
      
      {/* The SlideComponets (Slider) will inherit the dark background 
         from here or its own internal settings.
      */}
      <SlideComponets />
      
    </div>
  );
}

export default MindMateFeatures;