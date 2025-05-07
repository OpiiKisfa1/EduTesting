import React, { useEffect, useState } from 'react';
import { Review } from '../types';
import { REVIEWS } from '../utils/constants';

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        // When reaching the end, continue from the first review
        return nextIndex >= REVIEWS.length ? 0 : nextIndex;
      });
    }, 8000); // 8 seconds transition

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Atsauksmes
        </h2>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {REVIEWS.map((review, index) => (
              <div 
                key={`${review.id}-${index}`}
                className="min-w-full px-4"
              >
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{review.name}</h3>
                      <p className="text-sm text-gray-600">{review.course}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{review.text}</p>
                  <div className="mt-4 flex items-center">
                    <div className="flex text-yellow-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;