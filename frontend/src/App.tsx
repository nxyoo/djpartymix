// frontend/src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Host from './pages/Host';
import Join from './pages/Join';
import './styles/app.css'; // Importation du CSS

const App: React.FC = () => {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/host" element={<Host/>}/>
                    <Route path="/join" element={<Join/>}/>
                </Routes>
            </div>
            <div className='gradient_background'></div>
        </Router>

    );
};


export default App;