import React, { useState } from "react";
import CartContext from "./cart-context";

const CartContextProvider = (props) => {
    const [cartList, setCartList] = useState([]);
	const [isCartChange, setIsCartChange] = useState(false);
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
			setIsCartChange(true);

			setTimeout(() => {
				setIsCartChange(false);
			}, 7000);

            return [...prevCartItem, newItem];
        });
    };

	const onPopoverHandler = () => {
		setIsCartChange(false);
	}

    const onChangeAmountHandler = (id, amount) => {
        for (let i = 0; i < cartList.length; i++) {
			
            if (cartList[i].id === id) {
				if(+cartList[i].amount === amount) break;
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

	const removeAllItemsFromCartHandler = (id) => {
		let tempCart = [];
		setCartList(tempCart);
		setTotalPrice(0);
	};

    const cartContext = {
        cartList: cartList,
		isCartChange: isCartChange,
		popoverHandler: onPopoverHandler,
        totalPrice: totalPrice,
        addItem: addItemToCartHandler,
        changeAmountHandler: onChangeAmountHandler,
        removeItem: removeItemfromCartHandler,
		removeAllItems: removeAllItemsFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
	
};

export default CartContextProvider;
