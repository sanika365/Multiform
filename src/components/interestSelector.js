
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const InterestSelector = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { category } = location.state || {};
    if (!category) {
      navigate('/');  // Redirects to the homepage if no category is provided
    }
    console.log('Selected category:', category);
  }, [navigate, location.state]);

  const handleNavigation = () => {
    navigate('/WelcomePage');
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen mt-[-16px] md:mt-0'>
      <div className='w-full max-w-5xl px-4 md:px-6 lg:px-8'>
        {" "}
        
        <div className='flex justify-center items-center mb-2'>
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

          <div
            style={{
              width: "100%", 
              maxWidth: "800px", 
              height: "4px",
              marginTop: "32px",
              marginBottom: "32px",
            }}
            className='flex w-full bg-gray-200' 
          >
            <div style={{ width: "23.33%", backgroundColor: "teal" }}></div>
            <div style={{ width: "76.67%", backgroundColor: "gray" }}></div>
          </div>
        </div>
      </div>

      <h1 className='text-xl md:text-2xl font-bold  mb-4 text-center'>
        Which are you most interested in?
      </h1>

      <p className='mb-6 text-center text-gray-500'>
        Choose just one. This will help us get you started (but won't limit your
        experience).
      </p>

      <div className='space-y-4 w-full max-w-md px-4 md:px-0'>
    
        <button className='bg-white rounded-md py-2 md:py-3 border border-yellow-200 px-4 flex items-center justify-between w-full hover:bg-gray-100 transition-colors'>
          <div className='flex items-center space-x-3'>
            <img src='cpoy4.jpg' alt='Exploring' className='w-8 h-8' />
            <span className='font-semibold'>
              Learning specific skills to advance my career
            </span>
          </div>
        </button>
        <button className='bg-white rounded-md py-2 md:py-3 border border-gray-200 px-4 flex items-center justify-between w-full hover:bg-gray-100 transition-colors'>
          <div className='flex items-center space-x-3'>
            <img src='copy5.jpg' alt='Exploring' className='w-8 h-8' />
            <span className='font-semibold'>
              Exploring new topics I'm interested in
            </span>
          </div>
        </button>
        <button className='bg-white rounded-md py-2 md:py-3 border border-gray-200 px-4 flex items-center justify-between w-full hover:bg-gray-100 transition-colors'>
          <div className='flex items-center space-x-3'>
            <img src='copy6.jpg' alt='Exploring' className='w-8 h-8' />
            <span className='font-semibold'>
              Refreshing my math foundations
            </span>
          </div>
        </button>
        <button className='bg-white rounded-md py-2 md:py-3 border border-gray-200 px-4 flex items-center justify-between w-full hover:bg-gray-100 transition-colors'>
          <div className='flex items-center space-x-3'>
            <img src='copy7.jpg' alt='Exploring' className='w-8 h-8' />
            <span className='font-semibold'>
              Exercising my brain to stay sharp
            </span>
          </div>
        </button>
        <button className='bg-white rounded-md py-2 md:py-3 border border-gray-200 px-4 flex items-center justify-between w-full hover:bg-gray-100 transition-colors'>
          <div className='flex items-center space-x-3'>
            <img src='copy8.jpg' alt='Exploring' className='w-8 h-8' />
            <span className='font-semibold'>Something else</span>
          </div>
        </button>
      </div>

      <div className='flex justify-center mt-6'>
        <button
          className='bg-black rounded-md text-white font-bold py-3 mb-2 px-6 w-full max-w-xs md:w-40 transition-colors hover:bg-gray-900'
          onClick={handleNavigation}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default InterestSelector;

