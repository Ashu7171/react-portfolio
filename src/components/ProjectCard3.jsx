import gta from '../assets/Images/gta.png';

const Card = () => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg">
        <img src={gta} alt="GTA 6 - Landing Page" className="object-cover w-full h-full" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
          GTA 6 - Landing Page Website
        </h5>
        <p className="font-sans text-base font-light leading-relaxed text-gray-700 mb-4">
          A visually rich and interactive concept project inspired by GTA 6. 
          Designed to capture the game's vibe with cinematic UI, dynamic elements, and immersive visuals. 
          
        </p>
        <div className="flex gap-3">
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            onClick={() => window.open('https://gta-6-cyan.vercel.app/', '_blank')}
          >
            Live Demo (Desktop Only)
          </button>         
        </div>
      </div>
    </div>
  );
};

export default Card;
