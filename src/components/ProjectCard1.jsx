import React from 'react';
import esports from '../assets/Images/esports.png';

const Card = () => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <img src={esports} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          eSports Website
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          A dynamic and engaging esports website built using ASP.NET. Showcases live tournament updates, upcoming tournaments, and event highlights.
          Designed to deliver a seamless and immersive experience for gamers and esports enthusiasts.
        </p>
      </div>
    </div>
  );
}

export default Card;
