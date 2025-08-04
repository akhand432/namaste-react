import { useState } from 'react';
import { FOOD_LOGO_URL } from '../utils/constant';
import { Link } from 'react-router';

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const handleLogin = () => {
        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
    };

    return (
        <div className="header">
            <div className="logo">
                <img src={FOOD_LOGO_URL} alt="Food_Logo" />
            </div>
            <div className='navbar'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                </ul>
                <button onClick={() => handleLogin()}>{btnName}</button>
            </div>

        </div>
    )
}

export default Header;