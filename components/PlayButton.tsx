
import React from 'react';
import { PlayState } from '../types';
import { PlayIcon, PauseIcon } from '../constants/icons';

interface PlayButtonProps {
  playState: PlayState;
  onClick: () => void;
}

export const PlayButton: React.FC<PlayButtonProps> = ({ playState, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label={playState === PlayState.PLAYING ? 'Pause song' : 'Play song'}
      className="relative z-10 flex items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-pink-500 rounded-full shadow-lg shadow-pink-500/30 hover:bg-pink-600 active:bg-pink-700 transform hover:scale-105 active:scale-100 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-opacity-75"
    >
      {playState === PlayState.PLAYING ? (
        <PauseIcon className="w-16 h-16 text-white" />
      ) : (
        <PlayIcon className="w-16 h-16 text-white" />
      )}
    </button>
  );
};
