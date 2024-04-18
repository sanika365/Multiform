import React, { useState } from "react";
import '../index.css';
const LearningPath = () => {
  const [selectedPath, setSelectedPath] = useState(null);

  const handlePathSelect = (path) => {
    setSelectedPath(path);
  };

  return (
   
    <div className='flex justify-center items-center'>
      <div className='bg-white p-8 w-full'>
        <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-center mt-16'>
          Learning paths based on your answers
        </h2>
        <p className='text-gray-600 mb-8 font-semibold text-center'>
          Choose one to get started. You can switch anytime.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div
            className='bg-white rounded-lg p-4 border border-gray-400 cursor-pointer relative flex items-center'
            onClick={() => handlePathSelect("foundational")}
          >
            <div
              className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 px-2 py-2 rounded-full shadow text-black font-bold'
              style={{ zIndex: "10" }}
            >
              MOST POPULAR
            </div>
            <div className='flex flex-col md:flex-row items-center w-full'>
              <div className='px-6 py-6'>
                <div className='font-bold text-xl sm:text-2xl text-gray-900 mb-2'>
                  Foundational math
                </div>
                <p className='text-gray-900 font-semibold text-base sm:text-lg'>
                  Build your foundational skills in algebra, geometry, and
                  probability.
                </p>
              </div>
              <img
                src='copy3.jpg'
                alt='Fundamental math'
                className='w-24 h-24 sm:w-36 sm:h-36 md:ml-auto'
              />
            </div>
          </div>

          <div
            className='bg-white rounded-lg p-4 border border-gray-400 cursor-pointer relative flex items-center'
            onClick={() => handlePathSelect("mathematical thinking")}
          >
            <div className='flex flex-col md:flex-row items-center w-full'>
              <div className='px-6 py-6'>
                <div className='font-bold text-xl sm:text-2xl text-gray-900 mb-2'>
                  Mathematical Thinking
                </div>
                <p className='text-gray-900 font-semibold text-base sm:text-lg'>
                  Build your foundational skills in algebra, geometry, and
                  probability.
                </p>
              </div>
              <img
                src='copy3.jpg'
                alt='Mathematical Thinking'
                className='w-24 h-24 sm:w-36 sm:h-36 md:ml-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
