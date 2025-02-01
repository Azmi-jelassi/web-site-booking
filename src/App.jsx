// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TopSection from './components/TopSection';
import Destinations from './components/Destinations';
import Hotels from './components/Hotels';
import PopularDestinations from './components/PopularDestinations';
import VideoSection from './components/VideoSection'; // Import the VideoSection component
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css'; // Import global styles

function App() {
    return (
        <div className="App">
            <Header />
            <TopSection />
            <Hero />
            <Destinations />
            <Hotels />
            <PopularDestinations /> {/* Add the PopularDestinations component */}
            <VideoSection /> 
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;