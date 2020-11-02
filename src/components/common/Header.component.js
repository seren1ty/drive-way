import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar">
            <div>
                <Link to="/" className="logo-text">DRIVE WAY</Link>
            </div>
            <nav>
                <ul className="">
                    <li className="">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="">
                        <Link to="/cars">Cars</Link>
                    </li>
                    <li className="">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className="">
                        <Link to="/checkout">Checkout</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;