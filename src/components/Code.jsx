import React from 'react';

const Card = () => {
  return (
    <aside className="bg-black text-white p-6 rounded-lg border-w w-full max-w-lg font-mono">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 text-red-500">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <p className="text-sm">bash</p>
      </div>
      <div className="mt-4">
      <p className="text-green-400">$ echo "Hello, World!"</p>
        <p className="text-white">Welcome to my portfolio.</p>
        <p className="text-white">Here, I build ideas with passion and code.</p>
        <p className="text-green-400">$ echo "Let's create something amazing!"</p>
      <p className="text-green-400">$</p>
      </div>
    </aside>
  );
}

export default Card;
