// frontend/src/components/PlayerControls.tsx
import React from 'react';

interface PlayerControlsProps {
    isPlaying: boolean;
    onPlayPause: () => void;
    onSkip: () => void;
}

const PlayerControls: React.FC<PlayerControlsProps> = ({ isPlaying, onPlayPause, onSkip }) => {
    return (
        <div>
            <button onClick={onPlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
            <button onClick={onSkip}>Skip</button>
        </div>
    );
};

export default PlayerControls;
