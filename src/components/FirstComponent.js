import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

 const DemoComponent = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = [
    { id: "student", label: "Student or soon to be enrolled", img: "copy9.jpg" },
    { id: "professional", label: "Professional pursuing a career", img: "copy10.jpg" },
    { id: "parent", label: "Parent of a school-age child", img: "copy11.jpg" },
    { id: "lifelong", label: "Lifelong learner", img: "copy12.jpg" },
    { id: "teacher", label: "Teacher", img: "copy13.jpg" },
    { id: "other", label: "Other", img: "copy14.jpg" },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleNavigation = () => {
    if (selectedCategory) {
      navigate("/interest-selector", { state: { category: selectedCategory } });
    }
  };

  return (
    <div className='flex flex-col items-center justify-center p-4'>
     
      <div className='w-full max-w-screen-md h-1 mt-0 mb-8'>
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
          <div style={{ width: "10.33%", backgroundColor: "teal" }}></div>
          <div style={{ width: "97.33%", backgroundColor: "gray" }}></div>
        </div>
      </div>

      <h1 className='text-2xl mt-4 font-bold mb-4 text-center'>
        Which describes you best?
      </h1>
      <p className='mb-8 mt-0.5 text-gray-500 text-center'>
        This will help us personalize your experience.
      </p>

      <div className='space-y-4 w-full max-w-md'>
        {categories.map((category) => {
          const { id, label, img } = category;
          const words = label.split(" ");
          const firstWord = words.shift();
          const restOfSentence = words.join(" ");

          return (
            <button
              key={id}
              className={`border border-gray-300 rounded-md py-3 px-4 flex items-center justify-between w-full ${
                selectedCategory === id ? "bg-gray-300" : ""
              }`}
              onClick={() => handleCategorySelect(id)}
              aria-pressed={selectedCategory === id}
            >
              <div className='flex items-center space-x-4'>
                <img src={img} alt={label} className='w-8 h-8 rounded-full' />
                <span>
                  <strong>{firstWord}</strong>{" "}
                  <span style={{ color: "gray" }}>{restOfSentence}</span>
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <button
        className={`mt-6 mb-2 text-xl font-semibold px-8 py-3 rounded-md ${
          selectedCategory
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-100"
        }`}
        onClick={handleNavigation}
        disabled={!selectedCategory}
      >
        Continue
      </button>
    </div>
    
  );
};

export default DemoComponent;