import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CarContext } from '../context/cars.context';

const Cars = () => {
    const { cars } = useContext(CarContext);

    const history = useHistory();

    if (!cars.length) {
        return <h3>No Cars Available</h3>
    }

    return (
        <section>
        {
            cars.map(({ image, id, make, model }) => (
                <article key={id}>
                    <div>
                        <img src={image} alt={make + ' ' + model}
                          onClick={() => history.push(`/cars/${id}`)} />
                    </div>
                    <Link to={`/cars/${id}`} className="btn">Details</Link>
                </article>
            ))
        }
        </section>
    );
};

export default Cars;