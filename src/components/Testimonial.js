import React from "react";
import { useNavigate } from "react-router-dom";

const Testimonial = () => {
    const navigate = useNavigate();
    const handleNavigation = () => {
     
      navigate("/recommendations");
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
            maxWidth: "800px",
            height: "4px",
            marginTop: "32px",
            marginBottom: "32px",
          }}
          className='flex w-full'
        >
          <div style={{ width: "100%", backgroundColor: "teal" }}></div>
         
        </div>
      </div>

      <div className='flex flex-col sm:flex-row flex-grow'>
        <div className='flex flex-1 justify-center items-center p-4 ml-0 sm:ml-32'>
          <img
            src='copy2.jpg'
            alt='Descriptive Alt Text'
            style={{ width: "250px", height: "250px" }}
            className='rounded-lg mt-1'
          />
        </div>

        <div className='flex-1 p-4 mt-8 mb-4 text-center sm:mt-16 sm:text-left'>
          <h2 className='text-3xl font-bold mb-4'>You're on your way!</h2>

          <div className='flex items-center justify-center sm:justify-start mt-8 mb-4'>
            {[1, 2, 3, 4, 5].map((star, index) => (
              <svg
                key={index}
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-yellow-500'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
            ))}
          </div>
          <p className='text-gray-700 mb-6 font-montserrat   font-semibold'>
            "Through its engaging and well-structured courses, Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real world problem solving situations."
          </p>
          <p className='text-gray-600 font-semibold'>— Jacob S.</p>
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

export default Testimonial;
