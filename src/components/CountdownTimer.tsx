import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-red-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 mr-3 animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold">Flash Sale Ends Soon!</h2>
          </div>
          <p className="text-lg mb-8 opacity-90">
            Don't miss out on up to 50% off selected items
          </p>
          
          <div className="flex justify-center space-x-4 md:space-x-8 mb-8">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px]">
                  <div className="text-2xl md:text-4xl font-bold">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                </div>
                <div className="text-sm md:text-base mt-2 opacity-90">{item.label}</div>
              </div>
            ))}
          </div>
          
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
            Shop Flash Sale
          </button>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;