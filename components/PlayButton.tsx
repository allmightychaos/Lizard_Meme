
import React from 'react';

interface PlayButtonProps {
  onClick: () => void;
}

export const PlayButton: React.FC<PlayButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Play lizard song"
      className="relative z-10 flex items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-green-500 rounded-full shadow-lg shadow-green-500/30 hover:bg-green-600 active:bg-green-700 transform hover:scale-105 active:scale-100 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-75 text-6xl"
    >
      🦎
    </button>
  );
};
