import React from 'react';
import { Link } from 'react-router-dom';

import image from '../../assets/Driveway_Header.jpg';

const Banner = () => {
    return (
        <div className="row banner">
            <div className="col-2">
                <h1>The next stop<br/>is your place!</h1>
                <Link to="/cars" className="btn">Explore Cars &#8594;</Link>
            </div>
            <div className="col-2">
                <img src={image} />
            </div>
        </div>
    )
};

export default Banner;