import React from 'react';

import { createContext, useState } from 'react';
import Pen from "../images/Pen.jpeg"; // add in image section


export const ProductContext = createContext();

function ProductProvider(props) {
    const initialState = [
        {
            name: 'Pen',
            price: '1000',
            rating: 3,
            img:Pen,
            id: 1
        },

        {
            name: "Dress",
            price: '1000',
            rating: 4,
            img: Pen,
            id: 2
        }
    ]
    const [state, setState] = useState(initialState);
    const [checkoutData, setCheckoutData] = useState([]);
    const [price, setPrice] = useState(0)

  
    return (
        <ProductContext.Provider value = {{data : [state, setState], cardData: [checkoutData, setCheckoutData], totalPrice: [price, setPrice]}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider



