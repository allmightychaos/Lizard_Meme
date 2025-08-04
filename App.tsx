import React, { useCallback } from "react";
import { PlayButton } from "./components/PlayButton";

const App: React.FC = () => {
    const playFromStart = useCallback(() => {
        const audio = new Audio("./lizard.mp3");
        audio.play().catch((error) => {
            console.error("Error playing audio:", error);
        });
    }, []);

    return (
        <main className="bg-slate-900 text-white min-h-screen flex items-center justify-center antialiased">
            <PlayButton onClick={playFromStart} />
        </main>
    );
};

export default App;
