import React from "react";
import { useNavigate } from "react-router-dom";
const WebPage = () => {
   const navigate = useNavigate();
  const handleNavigation = () => {
   
    navigate("/Mathpage");
  };
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex justify-center items-center mb-2 px-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 text-gray-500 ' 
          style={{ marginTop: "4px !important", width: "30px", height: "30px" }}
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
            maxWidth: "900px",
            height: "4px",
            marginTop: "32px",
            marginBottom: "32px",
          }}
          className='flex w-full'
        >
          <div style={{ width: "53.33%", backgroundColor: "teal" }}></div>
          <div style={{ width: "66.67%", backgroundColor: "gray" }}></div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row flex-grow'>
        <div className='flex flex-1 justify-center items-center p-4'>
          <img
            src='copy1.jpg'
            alt='Descriptive Alt Text'
            style={{ width: "100%", maxWidth: "250px", height: "auto" }}
            className='rounded-lg mx-auto '
          />
        </div>

        <div className='flex-1 p-4'>
          <div className='font-bold text-xl md:text-3xl mt-4 md:mt-16 ml-4 md:ml-10'>
            You're in the right place
          </div>
          <p className='mt-4 text-sm md:text-lg ml-4 md:ml-10 font-normal text-gray-900'>
            Brilliant gets you hands to help improve your professional skills
            and knowledge. You'll interact with concepts and solve fun problems
            in math, science, and computer science.
          </p>
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

}
export default WebPage;