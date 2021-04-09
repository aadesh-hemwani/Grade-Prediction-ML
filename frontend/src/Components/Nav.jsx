import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="navbar">
            <ul className="nav">
                <div className="menu">
                <div className="hamburger">
                    <div className="menu_icon1"></div>
                    <div className="menu_icon2"></div>
                    <div className="menu_icon3"></div>
                </div>
                </div>
                <li className="link link1">
                <div className="logoIcon"
                    ><svg
                    className="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 21"
                    >
                    <path d="M 0 0 L 14 0 L 14 7 L 7 7 Z" fill="currentColor"></path>
                    <path d="M 0 7 L 7 7 L 14 14 L 0 14 Z" fill="currentColor"></path>
                    <path d="M 0 14 L 7 14 L 7 21 Z" fill="currentColor"></path>
                    </svg>
                    <span className="wordmark">Future</span>
                </div>
                </li>
                <Link to="/" className="links">Home</Link>
                <Link to="/faq" className="links">FAQ</Link>
            </ul>
        </div>
    )
}
