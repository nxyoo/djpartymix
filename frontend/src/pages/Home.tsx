// frontend/src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <h1 className='host-title'>Welcome to DJ Party Mix!</h1>
            <div className='button-container'>
                <Link to="/host">
                    <button className="button">Host a Party</button>
                </Link>
                <Link to="/join">
                    <button className="button">Join a Party</button>
                </Link>
            </div>
            <p>Made with ❤️ by Armand.</p>
        </div>
    );
};

export default Home;
