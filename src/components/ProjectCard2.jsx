import React from 'react';

const Card = () => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <span className='text-center text-2xl flex'></span>
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Portfolio Website
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        A clean and modern portfolio website to showcase my skills, projects, and achievements. Built with a focus on responsiveness and user experience. 
        Explore my journey as a developer and discover the projects I've crafted with passion. 
        </p>
      </div>
    </div>
  );
}

export default Card;
