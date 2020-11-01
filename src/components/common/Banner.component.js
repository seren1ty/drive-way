import React from 'react';
import { Link } from 'react-router-dom';

import image from '../../assets/Driveway_Header.jpg';

const Banner = () => {
    return (
        <div className="row-flex banner">
            <div className="col-2 col-2-a">
                <h1>The next stop<br/>is your place!</h1>
                <Link to="/cars" className="btn">Explore Cars &#8594;</Link>
            </div>
            <div className="col-2">
                <img src={image} alt="exciting_road" />
            </div>
        </div>
    )
};

export default Banner;