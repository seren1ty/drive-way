import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { CarContext } from '../context/cars.context';
import { CartContext } from '../context/cart.context';

const CarDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const { cars } = useContext(CarContext);
    const { addToCart } = useContext(CartContext);

    const car = cars.find((car) => {
        return car.id === id;
    });

    if (!car) {
        return <h3>Loading ...</h3>;
    }

    const { make, model, description, price, image: url } = car;

    return (
        <div className="row-detail">
                <div className="col-2-detail col-image">
                    <img src={url} alt={make + ' ' + model} />
                </div>
                <div className="col-2-detail col-detail">
                    <h2>{model}</h2>
                    <p>{description}</p>
                    <div className="row-finer-detail">
                        <div className="col-make-rating">
                            <h3>{make}</h3>
                            <div className="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-o"></i>
                            </div>
                        </div>
                        <div className="col-price">
                            <h4>${price}</h4>
                        </div>
                    </div>
                    <div className="checkout">
                        {/* eslint-disable-next-line */}
                        <a className="btn" href="#"
                            onClick={() => {
                                addToCart({ ...car, id });
                                history.push('/cart');
                            }}>
                            Add to Cart
                        </a>
                    </div>
                </div>
        </div>
    );
};

export default CarDetails;