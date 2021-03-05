import React, {useContext} from "react"
import {ProductsContext} from "../Global/ProductsContext"
import {CartContext} from "../Global/CartContext"
const Products = () => {
    const {products}= useContext(ProductsContext);
    const {dispatch} = useContext(CartContext);
    return(
        <div className="products">
            {products.map((product) =>(
                <div className="product" key={product.id}>
                <div className="cover">
                <div className="product-image">
                    <img src={product.image} alt="not found" />
                </div>
                <div className="product-details">
                    <div className="product-name">
                    {product.name}
                    </div>
                    <div className="product-price">
                    Rs.{product.price}
                    </div>
                </div>
                </div>
                <div className="add-to-cart" onClick={() => dispatch({type:'ADD_TO_CART',id: product.id,product})}>ADD TO CART</div>  
                </div>
            
            ))}
            </div>
    )
}
export default Products;