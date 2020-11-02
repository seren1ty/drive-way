import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/cart.context';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

const Cart = () => {
    const history = useHistory();

    const { cart, total, increaseAmount, decreaseAmount } = useContext(CartContext);

    const [tax, setTax] = useState(0);

    useEffect(() => {
        setTax(total * 0.1);
    }, [total]);

    /* if (!cart.length) {
        return <h3>Empty Cart</h3>
    } */

    return (
        <div className="cart-page">
            <table>
                <tr>
                    <th>Product</th>
                    <th className="cart-quantity">Quantity</th>
                    <th>Subtotal</th>
                </tr>
                <tr>
                    <td>
                        <div className="cart-info">
                            <img src="https://driveway67fcb2f8f0154c07921a50a5f48b68bc221807-production.s3.us-east-1.amazonaws.com/public/images/f4af98fb-59d8-4b0e-bdfa-d945d2714c91McLaren_P1_GTR.JPG" alt="cart item"/>
                            <div>
                                <p>McLaren P1 GTR</p>
                                <small>$65000</small>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="cart-quantity">
                            <button>^</button><p>1</p><button>v</button>
                        </div>
                    </td>
                    <td>$65000</td>
                </tr>
            {
                cart.map(item => (
                    <tr key={item.id}>
                        <td>
                            <div className="cart-info">
                                <img src={item.image} alt={item.make + ' ' + item.model} />
                                <div>
                                    <p>{item.make + ' ' + item.model}</p>
                                    <small>${item.price}</small>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="cart-quantity">
                                <button onClick={() => increaseAmount(item.id)}>
                                    <FiChevronUp />
                                </button>
                                <p>{item.amount}</p>
                                <button onClick={() => decreaseAmount(item.id, item.amount)}>
                                    <FiChevronDown />
                                </button>
                            </div>
                        </td>
                        <td>
                            ${item.price * item.amount}
                        </td>
                    </tr>
                ))
            }
            </table>

            <div className="total-price">
                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td>${total}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>${tax}</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>${total + tax}</strong></td>
                    </tr>
                </table>
            </div>
            <div className="cart-checkout">
                {/* eslint-disable-next-line */}
                <a className="btn" onClick={() => history.push('/checkout')} href="#">Checkout</a>
            </div>
        </div>
    );
};

export default Cart;