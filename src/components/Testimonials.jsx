// src/components/Testimonials.jsx
import React from 'react';
import './Testimonials.css'; // Ensure this path is correct

const Testimonials = () => {
    const testimonials = [
        {
            image: "/téléchargement.jpg",title: "Tout était incroyable !",
            title: "Tout était incroyable !",
            text: "Notre séjour à l hôtel a été parfait grâce aux services de [Nom de l agence]. Tout était bien organisé, de la réservation à l accueil sur place. L’équipe a veillé à ce que notre expérience soit agréable et sans stress. Un service de qualité que nous recommandons vivement !",
        },
        {
            image: "/téléchargement (1).jpg",
            title: "Expérience géniale !",
            text: "Istanbul est une ville fascinante, pleine d histoire et de culture. Les visites des musées et les balades dans la ville m ont permis de découvrir ses trésors. Ce séjour incroyable a été rendu possible grâce à une organisation parfaite",
        },
    ];

    return (
        <section className="section-3" id="testimonials">
            <h2>Témoignages de nos clients</h2>
            <div className="card-container-3">
                {testimonials.map((testimonial, index) => (
                    <div className="card-3" key={index}>
                        <img src={testimonial.image} alt={`Testimonial ${index}`} />
                        <p>{testimonial.text}</p>
                        <div>
                        <h3>{testimonial.title}</h3>
                    </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;