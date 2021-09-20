import React from 'react';
import { styles } from './styles';
import * as cartActions from '../../redux/actions/cartActions';
import { connect } from 'react-redux';
import _ from 'lodash';
import 'material-icons/iconfont/material-icons.css';

const CartItemTile = ({ items, cart, editCart }) => {

    const removeFromCart = () => {
        let cartItems = cart.items;
        let itemIndex = _.findIndex(cartItems, ['id', items.id]);
        if (itemIndex > -1) {
            if (cartItems[itemIndex].qty === 1) cartItems.splice(itemIndex, 1);
            else if (cartItems[itemIndex].qty > 1) cartItems[itemIndex].qty = cartItems[itemIndex].qty - 1;
        }
        editCart(cartItems);
    }

    return(
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <img style={styles.image} src={items.image} />
            </div>
            <div style={styles.textContainer}>
                <div>{`Title : - ${items.title}`}</div>
                <div>{`Price : - ${items.price}`}</div>
                <div>{`Quantity : - ${items.qty}`}</div>
                <div>{items.description}</div>
            </div>
            <button style={styles.button} onClick={removeFromCart}>
                <span className="material-icons">remove_shopping_cart</span>
            </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editCart: (item) => dispatch(cartActions.editCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItemTile);