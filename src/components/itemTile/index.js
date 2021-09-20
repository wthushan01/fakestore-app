import React from 'react';
import { styles } from './styles';
import * as cartActions from '../../redux/actions/cartActions';
import { connect } from 'react-redux';
import _ from 'lodash';

const ItemTile = ({ imageUrl, name, price, item, editCart, cart }) => {

    const addItem = () => {
        let items = cart.items;
        let itemIndex = _.findIndex(items, ['id', item.id]);
        if (itemIndex < 0) items.push({ ...item, qty: 1 });
        else items[itemIndex].qty = items[itemIndex].qty + 1;
        editCart(items);
    }

    return(
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <img style={styles.image} src={imageUrl} />
            </div>
            <div style={styles.textContainer}>
                <div>{name}</div>
                <div>{`Rs. ${price}`}</div>
            </div>
            <button style={styles.button} onClick={addItem}>Add to cart</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemTile);