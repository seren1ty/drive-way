import React from 'react';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './common/CheckoutForm.component';

const Checkout = () => {
    // Stripe Public Key
    const stripePromise = loadStripe('pk_test_51Hh1OZCqhHYeCLdmQho333zJlY4HrMZU0RoGL6htvzYqdTE0BISpvxc4y6Q7NpwziOtIb9KD55lbGd0RlGKhVdWX00aQBYOPJ0');

    return (
        <section>
            <AmplifyAuthenticator>
                <Elements stripe={stripePromise}>
                    <section>
                        <h2>Time to Checkout?</h2>
                        <CheckoutForm />
                    </section>
                </Elements>
            </AmplifyAuthenticator>
        </section>
    );
};

export default Checkout;