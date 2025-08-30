import { useState } from 'react';
import { FOOD_LOGO_URL } from '../utils/constant';
import { Link } from 'react-router';

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const handleLogin = () => {
        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
    };

    return (
        <div className="flex justify-between items-center bg-pink-50 shadow-lg">
            <div className="w-44">
                <img src={FOOD_LOGO_URL} alt="Food_Logo" className='rounded-lg'/>
            </div>
            <div className='navbar'>
                <ul className='flex space-x-4'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button onClick={() => handleLogin()}>{btnName}</button>

                </ul>
            </div>

        </div>
    )
}

export default Header;