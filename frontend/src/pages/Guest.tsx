// frontend/src/pages/Guest.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

interface Props {
    // Ajoutez d'autres props nécessaires ici
}

const Guest: React.FC<Props> = () => {
    const { partyCode } = useParams<{ partyCode: string }>();

    // Utilisez partyCode dans votre composant Guest
    return (
        <div>
            <h1>Guest Page</h1>
            <p>Party Code: {partyCode}</p>
            {/* Autres éléments de votre composant Guest */}
        </div>
    );
};

export default Guest;
