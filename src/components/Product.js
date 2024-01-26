import React from 'react';
import "../styles/Product.css";

function Product({call, id, name, price, img, rating, type}) {

    const upLift = () => {
        console.log("Uplift called!")
        call(id);
    }

    return (
        <div className="product">
            <div className="product__info">
                <p> {name} </p>
                <p className="product__price"> 
                    <small> $ </small>
                    <strong> {price} </strong>
                </p>

                <p className="product__rating">
                     {rating}🌟 stars
                </p>
            </div>
            
            <img src = {img} alt= "" />
            {
                type == "add"? <button onClick = {upLift} className="product__button"> Add to basket </button> : <button onClick = {upLift} className="product__button">
                Remove from basket </button>
            }
        </div>
    )
}

export default Product
