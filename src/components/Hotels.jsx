// src/components/Hotels.jsx
import React from 'react';
import './Hotels.css'; // Ensure this path is correct

const Hotels = () => {
    const hotels = [
        { name: "Hotel Royal Victoria", price: "175 TND/night", image: "/Image Placeholder (11).png" },
        { name: "Taksim Gonen Hotel", price: "215 TND/night", image: "/Image Placeholder (4).png" },
        { name: "Hotel Darcet", price: "310 TND/night", image: "/Image Placeholder (5).png" },
        { name: "Hotel Royal Victoria", price: "175 TND/night", image: "/Image Placeholder (11).png" },
        { name: "Taksim Gonen Hotel", price: "215 TND/night", image: "/Image Placeholder (4).png" },
        { name: "Hotel Darcet", price: "310 TND/night", image: "/Image Placeholder (5).png" },
    ];

    return (
        <section className="section" id="hotels">
            <h2>Nos hôtels</h2>
            <div className="card-container">
                {hotels.map((hotel, index) => (
                    <div className="card" key={index}>
                        <h3>{hotel.name}</h3>
                        <img src={hotel.image} alt={hotel.name} />
                        <p>{hotel.price} <button>Voir la disponibilité</button></p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hotels;