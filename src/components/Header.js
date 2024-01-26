import React from 'react';
import '../styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import {useHistory} from 'react-router-dom';

// import {useState, useContext} from 'react';
// import { ProductContext } from './ProductProvider';

function Header() {

    let history = useHistory();

    function handleClick() {
        history.push("/checkout");
    }

    function homeClick() {
        history.push("/");
    }

    // const [state, setState] = useContext(ProductContext);

    return (
        <div className = "header">
            <img
             className = "header__logo"
             src = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
             onClick = {homeClick}
                // logo
             />

             <div className = "header__search">
                <input className="header__searchInput" type = "text" />
                <SearchIcon className="header__searchIcon"/>
                {/* input form */}
             </div>

             <div className = "header__nav">
                {/* 3 options here */}
                <div className= "header__option">
                    <span className ="header__optionLineOne">
                        Hello guest
                    </span>

                    <span className = "header__optionLineTwo">
                        Sign in
                    </span>
                </div>

                <div className= "header__option">
                    <span className ="header__optionLineOne">
                        Returns
                    </span>

                    <span className = "header__optionLineTwo">
                        & Orders
                    </span>
                </div>

                <div className= "header__option">
                    <span className ="header__optionLineOne">
                        Your
                    </span>

                    <span className = "header__optionLineTwo">
                        Prime
                    </span>
                </div>

                <div className ="header__optionBasket">
                    <ShoppingBasketIcon onClick = {handleClick}/>

                    <span className="header__optionLineTwo header__basketCount">
                     {/* {state.length}
                       */}
                       0
                    </span>
                </div>

             </div>
        </div>
    )
}

export default Header
