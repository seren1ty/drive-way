import React from 'react';
import { AmplifyAuthenticator } from '@aws-amplified/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './common/CheckoutForm';

const Checkout = () => {
    // Stripe Public Key
    const stripePromise = loadStripe(env.process.REACT_APP_STRIPE_PUBLIC_KEY);

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