import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CarProvider } from "./context/cars.context";
import { CartProvider } from "./context/cart.context";

ReactDOM.render(
    <CarProvider>
        <CartProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </CartProvider>
    </CarProvider>,
    document.getElementById('root')
);
