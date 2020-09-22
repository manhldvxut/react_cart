import React, { Component }from "react";
import { Switch, Router, Route} from 'react-router-dom'
import "./App.css";

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component {
    render() {
        return (
                <React.Fragment>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={ProductList} />
                        <Route path="/details" component={Details} />
                        <Route path="/cart" component= {Cart} />
                        <Route component ={Default} />
                    </Switch>
                    <Modal />
                </React.Fragment>
            );
    }
}

export default App;
