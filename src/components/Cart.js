import React, { useContext } from "react"
import StripeCheckout from "react-stripe-checkout"
import {CartContext} from "../Global/CartContext"
const Cart= () =>{
    const {shoppingCart, totalPrice, qty, dispatch}= useContext(CartContext);
    const handleToken= async(token) =>{
    }
    console.log(shoppingCart);
    return ( 
        <div className="cart-container">
            <div className="cart-details" style={{marginTop:'10px'}}>
            {shoppingCart.length>0? 
            shoppingCart.map(cart =>(
                <div className="cart"key={cart.id}>
                <span className="cart-image"><img src={cart.image} alt="notfound"/></span>
                <span className="cart-product-name">{cart.name}</span>
                <span className="cart-product-price">Rs.{cart.price}</span>
                <span className="inc" onClick={() =>dispatch({type: 'INC',id:cart.id,cart})}>
                    <h1>+</h1></span>
                <span className="product-quantity">{cart.qty}</span>
                <span className="dec" onClick={() => dispatch({type: 'DEC',id:cart.id,cart})}><h1>-</h1></span>
                <span className="product-total-price">Rs.{cart.price*cart.qty}</span>
                <span className="delete" onClick={() =>dispatch({type:'DELETE',id:cart.id,cart})}>remove</span>
                </div>
            ))
            :'cart is empty'}
            </div>
            {shoppingCart.length>0 ? <div className="cart-summary">
                <div className="summary">
                    <h3>Cart Summary</h3>
                    <div className="total-items">Total items</div>
                    <div className="items">{qty}</div>    
                </div>
                <div className="total-price-section">
                    <div className="just-title">Total Price</div>
                    <div className="items-price">Rs{totalPrice}</div>
                </div>
                <div className="stripe-out">
                        <StripeCheckout
                        stripeKey="pk_test_51ILZfUA5NpbmfzEm35R6BSfhH4NtCEHskq8pxO8nMofj4E2QrCCMJzWoIMFgO2uiksoSBOUTZa8A7DmM151sFh8v00Mh08pUmb"
                        token={handleToken}
                        billingAddress
                        shippingAddress
                        amount={totalPrice*100}
                        >
                        </StripeCheckout>
                </div>
                </div>:' '}
        </div>
    )
}
export default Cart;