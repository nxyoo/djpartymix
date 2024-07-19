// frontend/src/components/QueueItem.tsx
import React from 'react';

interface QueueItemProps {
    song: {
        id: string;
        title: string;
    };
    onUpvote: () => void;
    onDownvote: () => void;
}

const QueueItem: React.FC<QueueItemProps> = ({ song, onUpvote, onDownvote }) => {
    return (
        <div>
            <span>{song.title}</span>
            <button onClick={onUpvote}>Upvote</button>
            <button onClick={onDownvote}>Downvote</button>
        </div>
    );
};

export default QueueItem;
