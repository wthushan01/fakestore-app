import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartItemTile } from '../../components';
import './style.css'

const Cart = (props) => {

    let items = props.cart.items;

    return items.map((element, index) => 
        <div className='cart-grid-item-container' key={index}>
            <CartItemTile 
                items={element}
            />
        </div>)
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);