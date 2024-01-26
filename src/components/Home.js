import React from 'react';
import "../styles/Home.css";
import amazonBackground from "../images/amazonBackground.jpg";

import Product from './Product';

import {useContext, useEffect, useState} from 'react';
import { ProductContext } from './ProductProvider';

function Home() {

    const {data, cardData, totalPrice} = useContext(ProductContext);
    const[state, setState] = data;
    const[checkoutData, setCheckoutData] = cardData;
    const[price, setPrice] = totalPrice; 

    useEffect(() => {
        console.log("Use effect called")
    });

    const addToCart = (id) => {
        const temp = state.filter(filterMethod)

        function filterMethod(currentObject) {
            if(currentObject.id == id) {
                return currentObject;
            }
        }
        
        console.log(price)
        setPrice(price + parseInt(temp[0].price))
        console.log(price)
        setCheckoutData([...checkoutData, temp[0]])
    }

    return (
        <div className = "home">
            <div className = "home__container">
               <img 
                    className="home__image"
                    src = {amazonBackground}
                    alt = ""
                />

                {/* <div className="home__row">
                    <Product/>
                    <Product/>
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                </div> */}

                <div className="home__row">
                    {/* {state.length} */}

                    {
                        state.map(currentState => (
                            <Product call = {addToCart} id = {currentState.id} name = {currentState.name} price = {currentState.price} img = {currentState.img} rating = {currentState.rating} type = {"add"}/>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Home
