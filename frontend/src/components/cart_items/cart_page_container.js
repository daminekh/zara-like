import { connect } from 'react-redux';
import { fetchCartItems, deleteCartItem } from '../../actions/cart_item_actions';
import CartPage from './cart_page';

const mapStateToProps = state => {
    let userId;
    let cartItems;
    if (state.session.isAuthenticated) {
        userId = state.session.user.id;
        cartItems = Object.values(state.cart_items);
    } else {
        userId = "5e767c7f3e2ba776279b1af0";
        cartItems = Object.values(state.cart_items);
    }

    return {
        userId,
        cartItems
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCartItems: (userId) => dispatch(fetchCartItems(userId)),
        deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartPage);