// frontend/src/pages/Join.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Join: React.FC = () => {
    const navigate = useNavigate();
    const [partyCode, setPartyCode] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`Joining party with code: ${partyCode}`);
        // Redirection vers la page de la partie avec le code spécifié
        navigate(`/party/${partyCode}`); // Redirection vers la page de la partie
    };

    return (
        <div>
            <h2>Join a Party</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Party Code:
                    <input type="text" value={partyCode} onChange={(e) => setPartyCode(e.target.value)} required />
                </label>
                <br />
                <button type="submit">Join Party</button>
            </form>
        </div>
    );
};

export default Join;
