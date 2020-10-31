import React, { useState, useEffect } from 'react';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState([]);

    useEffect(() => {
        const newTotal = [...cart].reduce((currTotal, { amount, price }) => {
            return (currTotal += amount * price);
        }, 0);

        setTotal(parseFloat(newTotal.toFixed(2)));
    }, [cart]);

    const increaseAmount = (id) => {
        const updatedCart = [...cart].map((item) => {
            return item.id === id ? { ...item, amount: item.amount + 1 } : item;
        });

        setCart(updatedCart);
    };

    const decreaseAmount = (id, amount) => {
        let updatedCart = [];

        if (amount === 1) {
            updatedCart = [...cart].filter((item) => item.id !== id);
        } else {
            updatedCart = [...cart].map((item) => {
                return item.id === id ? { ...item, amount: item.amount - 1 } : item;
            });
        }

        setCart(updatedCart);
    };

    const addToCart = (car) => {
        const { id, make, model, price, image } = car;
        const cartItem = [...cart].find((item) => item.id === id);

        if (cartItem) {
            increaseAmount(id);
        } else {
            const cartItems = [...cart, { id, make, model, price, image, amount: 1 }];
            setCart(cartItems);
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, total, addToCart, increaseAmount, decreaseAmount, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };