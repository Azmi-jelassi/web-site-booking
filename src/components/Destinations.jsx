// src/components/Destinations.jsx
import React from 'react';
import './Destinations.css'; // Ensure this path is correct

const Destinations = () => {
    return (
        <section className="section-1" id="destinations">
            <h2>Nos suggestions pour vous</h2>
            <div className="card-container-1">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div className="card-1" key={index}>
                        <img src={`/Image (${index}).png`} alt={`Destination ${index}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Destinations;