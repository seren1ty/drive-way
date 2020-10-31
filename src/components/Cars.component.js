import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarContext } from '../context/cars.context';

const Cars = () => {
    const { cars } = useContext(CarContext);

    if (!cars.length) {
        return <h3>No Cars Available</h3>
    }

    return (
        <section>
        {
            cars.map(({ image, id, make, model }) => (
                <article key={id}>
                    <div>
                        <img src={image} alt={make + ' ' + model} />
                    </div>
                    <Link to={`/cars/${id}`} className="btn">Details</Link>
                </article>
            ))
        }
        </section>
    );
};

export default Cars;