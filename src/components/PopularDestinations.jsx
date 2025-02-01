// src/components/PopularDestinations.jsx
import React from 'react';
import './PopularDestinations.css'; // Import the corresponding CSS file

const PopularDestinations = () => {
    return (
        <section className="section-4" id="hotels">
            <h2>Destinations en vogue</h2>
            <div className="social-icons-1">
                <a href="#">&#xf09a;</a> 
                <a href="#">&#xf16d;</a> 
                <a href="#">&#xf09a;</a> 
                <a href="#">&#xf16d;</a> 
                <a href="#">&#xf09a;</a> 
            </div>
            <div className="card-container-4">
                <div className="card-4">
                {[1, 2, 3, 4,5].map((index) => (
                    <div className="card-4" key={index}>
                        <img src={`/Image (${index}).png`} alt={`Destination ${index}`} />
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default PopularDestinations;