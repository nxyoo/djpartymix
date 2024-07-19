// frontend/src/services/api.js
export const createParty = async (partyName, djName) => {
    try {
        const response = await fetch('/api/party', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ partyName, djName }),
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la création de la fête');
        }

        return await response.json();
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
};
