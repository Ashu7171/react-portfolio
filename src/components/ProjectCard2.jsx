import React from 'react';
import recipe from '../assets/Images/recipe.png';

const Card = () => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg">
        <img src={recipe} alt="Recipe Finder" className="object-cover w-full h-full" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
          Recipe Finder Website
        </h5>
        <p className="font-sans text-base font-light leading-relaxed text-gray-700 mb-4">
          A frontend React application that helps users find recipes by ingredients or nutrients using the Spoonacular API.
          Built with React and styled using Tailwind CSS, it features a clean UI and real-time search functionality.
        </p>
        <div className="flex gap-3">
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            onClick={() => window.open('https://recipe-finder-six-eta.vercel.app', '_blank')}
          >
            Live Demo
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
