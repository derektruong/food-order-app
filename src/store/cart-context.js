import React from "react";

const CartContext = React.createContext({
    cartList: [],
	isCartChange: false,
	popoverHandler: () => {},
	
	totalPrice: 0,
	addItem: (item) => {},
	changeAmountHandler: (id, amount) => {},
	removeItem: (id) => {},
	removeAllItems: () => {},
});

export default CartContext;
