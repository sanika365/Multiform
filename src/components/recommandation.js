import React from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
 const Recommendation = () => {
    const navigate = useNavigate();

    const navigateToNextPage = () => {
      navigate("/learning"); 
    };
  return (
    <div
      className='flex justify-center items-center min-h-screen px-4' 
      onClick={navigateToNextPage}
    >
      <div className='bg-white p-4 sm:p-8 w-11/12 sm:w-9/12 md:w-3/4 lg:w-1/2 max-w-lg mx-auto text-center'>
        <div className='flex justify-center items-center mb-4'>
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            size='3x'
            className='text-yellow-500'
          />
        </div>

        <h2 className='text-xl sm:text-2xl font-bold mb-1 whitespace-normal'>
          {" "}
         
          Finding learning path recommendations for you based on
        </h2>
        <span className='block text-xl sm:text-2xl font-bold mt-0'>
          {" "}
          
          your responses
        </span>
      </div>
    </div>
  );
};

export default Recommendation;
