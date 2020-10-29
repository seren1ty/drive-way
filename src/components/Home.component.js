import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './common/Banner';

import { CarContext } from '../context/cars';

const Home = () => {
    const { featured } = useContext(CarContext);

    if (!featured.length) {
        return <h3>No Featured Cars</h3>
    }

    return (
        <>
            <Banner></Banner>
            <section>
                <header>
                    <h3>Featured Vehicles</h3>
                </header>
                <div>
                {
                    featured.map((car) => (
                        <article key={car.id}>
                            <div>
                                <img src={car.image} alt={car.make + ' ' + car.model} />
                            </div>
                            <Link to={`cars/${car.id}`} className="btn">Details</Link>
                        </article>
                    ))
                }
                </div>
            </section>
        </>
    );
};

export default Home;