import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    //console.log(props);
    const { img, name, price, seller, stock } = props.product;

    return (
        <dir className="product">
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>only {stock} left in stock. Order Soon.</small></p>
                <button 
                className="main-button"
                onClick = {() => props.handleAddProduct(props.product)}
                
                > 
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                    </button>
            </div>
        </dir>
    );
};

export default Product;