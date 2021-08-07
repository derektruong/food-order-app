import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import Carousel from "./Content/Carousel";
import FoodList from "./Content/FoodList";

const HomeContainer = (props) => {
    const [cartList, setCardList] = useState([]);

    const addToCardHandler = (cartItem) => {
        setCardList((prevCardItem) => {
            let flag = false;

            for (let i = 0; i < prevCardItem.length; i++) {
                if (prevCardItem[i].id === cartItem.id) {
                    prevCardItem[i].amount = cartItem.amount;
                    prevCardItem[i].price = cartItem.price;
                    flag = true;
                    break;
                }
            }
            if (flag) return prevCardItem;

            return [...prevCardItem, cartItem];
        });
    };

    return (
        <>
            <NavBar cart={cartList} />
            <Carousel />
            <FoodList onAddToCard={addToCardHandler} />
        </>
    );
};

export default HomeContainer;
