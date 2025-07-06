import React, { useState } from 'react';

const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">See the Difference</h2>
          <p className="text-slate-600 text-lg">Drag the slider to see our product transformation</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div
            className="relative overflow-hidden rounded-lg shadow-lg cursor-ew-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Before Image */}
            <img
              src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Before"
              className="w-full h-96 md:h-[500px] object-cover"
              draggable={false}
            />
            
            {/* After Image */}
            <div
              className="absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="After"
                className="w-full h-96 md:h-[500px] object-cover"
                style={{ width: `${100 * (100 / sliderPosition)}%` }}
                draggable={false}
              />
            </div>
            
            {/* Slider Handle */}
            <div
              className="absolute top-0 h-full w-1 bg-white shadow-lg cursor-ew-resize"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              onMouseDown={handleMouseDown}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-blue-600 flex items-center justify-center">
                <div className="w-1 h-4 bg-blue-600 rounded"></div>
              </div>
            </div>
            
            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md text-sm font-medium">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md text-sm font-medium">
              After
            </div>
          </div>
          
          <div className="text-center mt-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Premium Quality Makes a Difference</h3>
            <p className="text-slate-600">Experience the transformation with our carefully curated products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;