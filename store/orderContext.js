import { createContext } from "react";

const OrderContext = createContext({
    items: [],
    addItem: (item) => { },
});

export default OrderContext