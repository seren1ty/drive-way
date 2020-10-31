import React, { useContext } from 'react';
import { CartContext } from '../context/cart.context';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

const Cart = () => {
    const history = useHistory();
    const { cart, total, increaseAmount, decreaseAmount } = useContext(CartContext);

    if (!cart.length) {
        return <h3>Empty Cart</h3>
    }

    return (
        <section>
            <header>
                <h2>My Cart</h2>
            </header>
            <div>
            {
                cart.map(item => (
                    <article key={item.id}>
                        <div>
                            <img src={item.image} alt='cart item' />
                        </div>
                        <div>
                            <p>{item.make + ' ' + item.model}</p>
                            <p>${item.price}</p>
                        </div>
                        <div>
                            <button onClick={() => increaseAmount(item.id)}>
                                <FiChevronUp />
                            </button>
                            <p>{item.amount}</p>
                            <button onClick={() => decreaseAmount(item.id, item.amount)}>
                                <FiChevronDown />
                            </button>
                        </div>
                    </article>
                ))
            }
            </div>
            <div>
                <h3>Total ${total}</h3>
            </div>
            <div>
                <button className="btn" onClick={() => history.push('/checkout')}>Checkout</button>
            </div>
        </section>
    );
};

export default Cart;