// Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            {/* 1st box */}
            <ul>
                <li>
                    <Link to='/'>FoodWay</Link>
                </li>
            </ul>
            {/* 2nd box */}
            <ul>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header;
