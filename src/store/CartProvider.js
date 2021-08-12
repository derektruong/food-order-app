import React, { useState } from "react";
import CartContext from "./cart-context";

const CartContextProvider = (props) => {
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItemToCartHandler = (newItem) => {
        setCartList((prevCartItem) => {
            let flag = false;

            for (let i = 0; i < prevCartItem.length; i++) {
                if (prevCartItem[i].id === newItem.id) {
                    prevCartItem[i].amount = newItem.amount;
                    prevCartItem[i].price = newItem.price;
                    flag = true;
                    break;
                }
            }
            if (flag) return prevCartItem;

            setTotalPrice((prevTotalPrice) => {
                return prevTotalPrice + +newItem.price * +newItem.amount;
            });

            return [...prevCartItem, newItem];
        });
    };

    const onChangeAmountHandler = (id, amount) => {
        for (let i = 0; i < cartList.length; i++) {
            if (cartList[i].id === id) {
                setTotalPrice(
                    totalPrice +
                        +cartList[i].price * (amount - +cartList[i].amount)
                );
                cartList[i].amount = amount;
                break;
            }
        }
    };

    const removeItemfromCartHandler = (id) => {
		let tempCart = [...cartList];
		for (let i = 0; i < tempCart.length; i++) {
			if (tempCart[i].id === id) {
				tempCart.splice(i, 1);
				break;
			}
		}
		setCartList(tempCart);
	};

    const cartContext = {
        cartList: cartList,
        totalPrice: totalPrice,
        addItem: addItemToCartHandler,
        changeAmountHandler: onChangeAmountHandler,
        removeItem: removeItemfromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
	
};

export default CartContextProvider;
