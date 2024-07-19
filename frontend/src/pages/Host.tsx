import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/app.css'; // Assurez-vous d'importer le fichier CSS

const Host: React.FC = () => {
    const [partyName, setPartyName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/parties', { name: partyName });
            navigate(`/party/${response.data.id}`);
        } catch (error) {
            console.error('Error creating party', error);
        }
    };

    return (
        <div className="host-container">
            <h1 className="host-title">Host a Party</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="partyName">Party Name</label>
                <input
                    type="text"
                    id="partyName"
                    value={partyName}
                    onChange={(e) => setPartyName(e.target.value)}
                    required
                />
                <button type="submit" className="button">Create Party</button>
            </form>
            <p>Made with ❤️ by Armand.</p>
        </div>
    );
};

export default Host;
