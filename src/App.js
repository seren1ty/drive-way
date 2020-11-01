import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Amplify from 'aws-amplify';

import Home from './components/Home.component';
import Error from './components/Error.component';
import Cars from './components/Cars.component';
import Cart from './components/Cart.component';
import Checkout from './components/Checkout.component';
import CarDetails from './components/CarDetails.component';
import Admin from './components/Admin.component';

import Header from './components/common/Header.component';
import Footer from './components/common/Footer.component';

import awsExports from './aws-exports';

Amplify.configure(awsExports);

const App = () => {
    return (
        <Router>
            <div className="container">
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/cart'>
                        <Cart />
                    </Route>
                    <Route path='/checkout'>
                        <Checkout />
                    </Route>
                    <Route exact path='/cars'>
                        <Cars />
                    </Route>
                    <Route path="/cars/:id" children={<CarDetails></CarDetails>}>
                    </Route>
                    <Route path='/admin'>
                        <Admin />
                    </Route>
                    <Route path='*'>
                        <Error />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
