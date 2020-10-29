import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section>
            <h2>Drive Way</h2>
            <h3>Next stop is yours!</h3>
            <Link to="/cars" className="btn">View All Cars</Link>
        </section>
    )
};

export default Banner;