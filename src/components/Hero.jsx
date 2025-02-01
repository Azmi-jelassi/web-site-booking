// src/components/Hero.jsx
import React from 'react';
import './Hero.css'; // Import the CSS file

const Hero = () => {
    return (
        <section className="hero">
            <div className="search-filters">
                <select>
                    <option>Destination</option>
                    <option>Hotels</option>
                </select>
                <select>
                    <option>Date</option>
                    <option>25 Jan 2025</option>
                    <option>26 Jan 2025</option>
                </select>
                <select>
                    <option>Personnes</option>
                    <option>1 Personne</option>
                    <option>2 Personnes</option>
                </select>
                <button>Explorez maintenant</button>
            </div>
        </section>
    );
};

export default Hero;