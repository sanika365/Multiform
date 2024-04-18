import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function ProgressBar() {
  return (
    <div className='w-full flex justify-center items-center mb-2 px-4'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5 text-gray-500'
        style={{ marginTop: "4px", width: "30px", height: "30px" }}
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M12.707 14.707a1 1 0 010-1.414L9.414 10l3.293-3.293a1 1 0 00-1.414-1.414l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414 0z'
          clipRule='evenodd'
        />
      </svg>
      <div className='w-full max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-3xl'>
        <div
          style={{
            width: "100%",
            maxWidth: "800px",
            height: "4px",
            marginTop: "32px",
            marginBottom: "32px",
          }}
          className='relative bg-gray-500'
        >
          <div
            className='absolute inset-0'
            style={{ width: "73.33%", backgroundColor: "teal" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function SquareBox({ children, className, onClick }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const width = ref.current.offsetWidth;
      ref.current.style.height = `${width}px`; 
    }
  }, []);

  return (
    <div ref={ref} className={`${className} overflow-hidden`} onClick={onClick}>
      {children}
    </div>
  );
}

function LevelBox({
  level,
  selectedLevel,
  handleLevelChange,
  equation,
  title,
  description,
}) {
  return (
    <SquareBox
      className={`aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg p-4 cursor-pointer ${
        selectedLevel === level ? "border-2 border-blue-500" : ""
      }`}
      onClick={() => handleLevelChange(level)}
    >
      <div className='text-gray-900 mt-4 mb-4 text-2xl text-center'>
        {equation}
      </div>
      <h3 className='text-md mt-6 mb-1 text-center text-black'>{title}</h3>
      <p className='text-gray-400 text-center text-xl font-normal'>
        {description}
      </p>
    </SquareBox>
  );
}

const MathComfortLevel = () => {
  const [selectedLevel, setSelectedLevel] = useState("introductory");
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Testimonial");
  };

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='w-full flex justify-center items-center mb-2 px-4'>
        <ProgressBar />
      </div>

      <h2 className='text-2xl font-bold mb-6 flex justify-center px-4'>
        What is your math comfort level?
      </h2>
      <p className='text-gray-700 mb-6 flex justify-center px-4'>
        Choose the highest level you feel confident in — you can always adjust
        later.
      </p>

      <div className='flex flex-1 justify-center items-center'>
        <div className='w-full max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-3xl px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <LevelBox
              level='introductory'
              selectedLevel={selectedLevel}
              handleLevelChange={handleLevelChange}
              equation='5 × 1/2 = ?'
              title='Arithmetic'
              description='Introductory'
            />
            <LevelBox
              level='foundational'
              selectedLevel={selectedLevel}
              handleLevelChange={handleLevelChange}
              equation='3x + 5 = 4'
              title='Basic Algebra'
              description='Foundational'
            />
            <LevelBox
              level='intermediate'
              selectedLevel={selectedLevel}
              handleLevelChange={handleLevelChange}
              equation='x = (-b ± √(b² - 4ac)) / 2a'
              title='Intermediate Algebra'
              description='Intermediate'
            />
            <LevelBox
              level='advanced'
              selectedLevel={selectedLevel}
              handleLevelChange={handleLevelChange}
              equation='∫x²dx = ?'
              title='Calculus'
              description='Advanced'
            />
          </div>
        </div>
      </div>

      <div className='flex justify-center mb-6'>
        <button
          className='bg-black rounded-md text-white text-bold mt-4 py-3 px-4 mb-2 w-40'
          onClick={handleNavigation}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default MathComfortLevel;
