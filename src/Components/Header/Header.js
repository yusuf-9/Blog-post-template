import React from "react";
import "./Header.css";
import Logo from "./logo1.png";
import { NavLink } from 'react-router-dom'


function Header() {

    // Adding functionality to navbar toggle button


    function toggle() {
    const links = document.querySelector(".nav-links")
        if (links.className == "nav-links") {
            var active = "0%"
            links.style.setProperty("--position", active);
            links.classList.add("active-2");
        } else {
            links.className = "nav-links";
            var notActive = "-102%";
            links.style.setProperty("--position", notActive);
        }
    }
    return (
        <header className="navbar">
            <NavLink to='/home' className="Page-name">
                The Skeptic Hawk
            </NavLink>
            <img src={Logo} className="logo" />
            <ul className="nav-links">
                <NavLink to='/home' className="nav-link" onClick={toggle}>
                    <li>Home</li>
                </NavLink>
                <NavLink to='/articles' className="nav-link"  onClick={toggle}>
                    <li>Articles</li>
                </NavLink>
                <NavLink to='/contact' className="nav-link"  onClick={toggle}>
                    <li>Contact me</li>
                </NavLink>
            </ul>
            <div className="toggleBtn" title="Show navigation bar" onClick={toggle}>
                <div className="burger"></div>
                <div className="burger"></div>
                <div className="burger"></div>
            </div>
        </header>
    )
}

export default Header;