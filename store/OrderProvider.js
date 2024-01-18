import { useReducer } from 'react';
import OrderContext from './orderContext';

//Initial State and reducer defined outsde because itshould not be rendered on data change
const initialState = {
    orders: [],
};

const orderReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            const newOrder = {
                id: Math.random().toString(),
                name: action.orderData.name,
                price: action.orderData.price,
                paymentMethod: action.orderData.paymentMethod,
                status: action.orderData.status,
            };
            return {
                ...state,
                orders: state.orders.concat(newOrder),
            };
        default:
            return state;
    }
};

const OrderProvider = props => {
    const [orderState, dispatchOrderAction] = useReducer(orderReducer, initialState);

    const addOrderHandler = orderData => {
        dispatchOrderAction({ type: 'ADD_ORDER', orderData });
    };

    const orderContext = {
        orders: orderState.orders,
        addOrder: addOrderHandler,
    };

    return (
        <OrderContext.Provider value={orderContext}>
            {props.children}
        </OrderContext.Provider>
    );
};

export default OrderProvider;