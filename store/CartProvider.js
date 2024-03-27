import { useReducer } from 'react';
import CartContext from "./cartContext";
//Initial State and reducer defined outsde because itshould not be rendered on data change
const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        console.log("Inside ctx add:", action.item.price);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.qty;
        //check if item is already in the cart
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItem;
        let updatedItems;
        //Check if itemis already is in the cart if found update that item with data from action
        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                qty: existingCartItem.qty + action.item.qty
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            //For new item that is not in the cart
            updatedItems = state.items.concat(action.item);
        }
        console.log("updatedItems", updatedItems);
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === "REMOVE") {
        const existingItemsIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingItemsIndex];
        console.log("remove-item", existingItemsIndex)
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        console.log("index", existingItemsIndex)

        let updatedItems;
        if (existingItem.qty === 1) {
            //For Qty 1 item should be removed from cart
            updatedItems = state.items.filter(item => item.id !== action.id);
        }
        else {
            const updatedItem = {
                ...existingItem,
                qty: existingItem.qty - 1
            }
            updatedItems = [...state.items];
            updatedItems[existingItemsIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === "CLEAR") {
        return defaultCartState;
    }
    return defaultCartState;
}

function CartProvider(props) {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCart = (item) => {
        dispatchCartAction({ type: 'ADD', item: item })
    }

    const removeItemFromCart = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    }

    const clearCartHandler = () => {
        dispatchCartAction({ type: 'CLEAR' });
    }

    //Update the ctx value with handlers
    const cartItem = {
        items: cartState?.items,
        totalAmount: cartState?.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
        clearCart: clearCartHandler
    };


    return (
        <CartContext.Provider value={cartItem}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider