// src/components/Header.jsx
import React from 'react';
import './Header.css'; // Ensure this path is correct

const Header = () => {
    return (
        <header>
            <div className="logo">
                <a href="#">
                    <img src="/telephone.png" width="22px" height="22px" alt="telephone" />
                </a>
                +216 29 888 112
            </div>
            <div className="social-icons">
                <a href="#">
                    <img src="/instagram.png" width="22px" height="22px" alt="instagram" />
                </a>
                <a href="#">
                    <img src="/logo-facebook.png" width="22px" height="22px" alt="facebook" />
                </a>
            </div>
        </header>
    );
};

export default Header;