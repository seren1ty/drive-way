import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CarContext } from '../context/cars.context';
import Masonry from 'react-masonry-component';
import masonryConfig from '../masonryConfig';

const Cars = () => {
    const { cars } = useContext(CarContext);

    const history = useHistory();

    if (!cars.length) {
        return <h3>No Cars Available</h3>
    }

    return (
        <div className="container">
            <Masonry className={"grid"}
            elementType={"div"}
            updateOnEachImageLoad={false}
            disableImagesLoaded={false}
            options={masonryConfig}
            >
            {
                cars.map(({ id, image, make, model, price }) => (
                    <div className="car-item" key={id} onClick={() => history.push(`/cars/${id}`)}>
                        <img src={image} alt={make + ' ' + model} />
                        <h4>{make + ' ' + model}</h4>
                        <div className="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                        </div>
                        <p>${price}</p>
                    </div>
                ))
            }
            </Masonry>
        </div>
    );
};

export default Cars;