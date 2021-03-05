import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import ProductsContextProvider from "./Global/ProductsContext"
import CartContextProvider from "./Global/CartContext"
import Products from "./components/Products"
import Cart from "./components/Cart"
function App() {
  return (
      <div>
         <ProductsContextProvider>
          <CartContextProvider>
         <Router>
         <Navbar />
         <Banner />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/Cart" exact component={Cart} />
        </Switch>
      </Router>
      </CartContextProvider>
      </ProductsContextProvider>
      </div>
  );
}

export default App;
