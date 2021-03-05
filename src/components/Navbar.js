import React, { useContext } from "react"
import {Link} from "react-router-dom"
import {CartContext} from "../Global/CartContext"
const Navbar=()=>{
    const{qty} = useContext(CartContext);
    return(
        <nav>
            <ul className="left">
                <li><Link to="/">Company Products</Link></li>
            </ul>
        <ul className="right">
            <li><Link to="/Cart">
        <span className="ShoppingCart">MyCart
        <span className="CartCount"> {qty}</span>
            </span></Link>
            </li>
        </ul>
        </nav>
    )
}

export default Navbar;