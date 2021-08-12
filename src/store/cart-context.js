import React from "react";

const CartContext = React.createContext({
    cartList: [],
	totalPrice: 0,
	addItem: (item) => {},
	changeAmountHandler: (id, amount) => {},
	removeItem: (id) => {},
});

export default CartContext;
