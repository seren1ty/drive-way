import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import { listCars } from '../api/queries';
import { drivewayProcessOrder } from '../api/mutations';

const CarContext = React.createContext();

const CarProvider = ({children}) => {
    const [cars, setCars] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        fetchCars();
    }, []);

    const checkout = async (orderDetails) => {
        const payload = {
            id: uuidv4(),
            ...orderDetails
        };

        try {
            await API.graphql(graphqlOperation(drivewayProcessOrder, { input: payload }));
            console.log('Order is successful');
        } catch (err) {
            console.log(err);
        }
    };

    const fetchCars = async () => {
        try {
            setLoading(true);

            //Switch authMode to API_KEY for public access
            const { data } = await API.graphql({
                query: listCars,
                authMode: 'API_KEY'
            });

            const cars = data.listCars.items;
            const featured = cars.filter((car) => {
                return !!car.featured;
            });

            setCars(cars);
            setFeatured(featured);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <CarContext.Provider value={{ cars, featured, loading, checkout }}>
            {children}
        </CarContext.Provider>
    );
};

export { CarContext, CarProvider };