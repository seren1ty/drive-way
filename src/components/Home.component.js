import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Banner from './common/Banner.component';

import { CarContext } from '../context/cars.context';

const Home = () => {
    const { featured } = useContext(CarContext);

    const history = useHistory();

    if (!featured.length) {
        return <h3>No Featured Cars</h3>
    }

    return (
        <>
            <Banner />

            <div className="featured">
                <div className="small-container">
                    <h2 className="title">Featured Vehicles</h2>
                    <div className="row-flex">
                    {
                        featured.map((car) => (
                            <div className="col-3" key={car.id}
                                onClick={() => history.push(`/cars/${car.id}`)}>
                                <img src={car.image} alt={car.make + ' ' + car.model} />
                                <h4>{car.make + ' ' + car.model}</h4>
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                                <p>${car.price}</p>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>

            <div className="testimonial">
                <div className="small-container">
                    <h2 className="title">Testomonials</h2>
                    <div className="row-flex">
                        <div className="col-4">
                            <i className="fa fa-quote-left"></i>
                            <p>
                                What an amazing experience from first contact till
                                the last service. These guys offer the most advanced
                                online car buying scheme. Highly Recommended!
                            </p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <h3 className="name">Frank Williams</h3>
                        </div>
                        <div className="col-4">
                            <i className="fa fa-quote-left"></i>
                            <p>
                                These guys do an incredible job keeping the
                                customer happy! From the great service to
                                the personal drop off experience, awesome!
                            </p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h3 className="name">Jim Matthews</h3>
                        </div>
                        <div className="col-4">
                            <i className="fa fa-quote-left"></i>
                            <p>
                                Can't fault this service. Was initially unsure
                                how the whole process would go, but to their credit
                                they were a picture of perfection. Great stuff.
                            </p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                            </div>
                            <h3 className="name">Francis Gibbins</h3>
                        </div>
                        <div className="col-4">
                            <i className="fa fa-quote-left"></i>
                            <p>
                                Where else can you browse such amazing metal
                                and with a few clicks have it added to your
                                personal collection. Wonderful service!
                            </p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <h3 className="name">John Styles</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;