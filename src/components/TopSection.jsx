// src/components/TopSection.jsx
import React from 'react';
import './TopSection.css'; // Import the corresponding CSS file

const TopSection = () => {
    return (
        <section className="Top">
            <div className="logo1">
                <a href="/">
                    <img src="/hotel.png" width="100px" height="100px" alt="Hotel Logo" />
                </a>
            </div>
            <div className="compte">
                <a href="#">
                    <img src="/compte.png" width="50px" height="50px" alt="Account Icon" />
                </a>
                <button>Mon compte</button>
            </div>
            <h1>Explorez le monde à votre façon</h1>
            <br />
            <p>Trouvez et réservez des hôtels et voyages personnalisés en quelques clics.</p>
        </section>
    );
};

export default TopSection;