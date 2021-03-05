import React, {createContext, useState} from "react"
import onepiece from "../assets/onepiece.jpg"
import short from "../assets/shorts.jpg"
import crop from "../assets/crop.jpg"
import skirt from "../assets/skirt.jpg"
import hoodie from "../assets/hoodie.jpg"
import jeanss from "../assets/jeanss.jpg"
import floral from "../assets/floral.jpg"
import fullsleeve from "../assets/fullsleeve.jpg"
export const ProductsContext= createContext();
const ProductsContextProvider = (props) => {
        const [products]= useState([
        {id:1, name:'onepiece', price:600, image:onepiece},
        {id:2, name:'shorts', price:450, image:short},
        {id:3, name:'crop', price:800, image: crop},
        {id:4, name:'skirt', price:650, image:skirt},
        {id:5, name:'hoodie', price:500, image:hoodie},
        {id:6, name:'jeanss', price:700,image:jeanss},
        {id:7, name:'floral', price:350,image:floral},
        {id:8, name:'fullsleeve', price:480, image:fullsleeve},
        
        ]);
        return(
            <ProductsContext.Provider value={{products: [...products]}}>
                {props.children}
            </ProductsContext.Provider>
        )
}
export default ProductsContextProvider;