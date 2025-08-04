
import React, { useState, useEffect, useCallback } from 'react';
import { PlayButton } from './components/PlayButton';
import { PlayState } from './types';

const App: React.FC = () => {
  const [audio] = useState(new Audio('lizard.mp3'));
  const [playState, setPlayState] = useState<PlayState>(PlayState.PAUSED);

  useEffect(() => {
    const handleSongEnd = () => {
      setPlayState(PlayState.PAUSED);
      audio.currentTime = 0; // Reset audio to the beginning
    };

    audio.addEventListener('ended', handleSongEnd);

    // Cleanup listener on component unmount
    return () => {
      audio.removeEventListener('ended', handleSongEnd);
    };
  }, [audio]);

  const togglePlayPause = useCallback(() => {
    if (playState === PlayState.PLAYING) {
      audio.pause();
      setPlayState(PlayState.PAUSED);
    } else {
      audio.play().catch(error => {
        console.error("Error playing audio:", error);
        // Handle autoplay policy restrictions if necessary
        setPlayState(PlayState.PAUSED);
      });
      setPlayState(PlayState.PLAYING);
    }
  }, [audio, playState]);

  return (
    <main className="bg-slate-900 text-white min-h-screen flex items-center justify-center antialiased">
      <div className="relative flex items-center justify-center">
        <div 
          className={`absolute rounded-full bg-pink-500/30 blur-3xl transition-transform duration-1000 ${playState === PlayState.PLAYING ? 'animate-pulse scale-125' : 'scale-100'}`}
          style={{ width: '150px', height: '150px' }}
        />
        <PlayButton 
          playState={playState} 
          onClick={togglePlayPause} 
        />
      </div>
    </main>
  );
};

export default App;
