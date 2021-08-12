import React from "react";
import NavBar from "./NavBar/NavBar";
import Carousel from "./Content/Carousel";
import FoodList from "./Content/FoodList";

const HomeContainer = (props) => {
    return (
        <>
            <NavBar />
            <Carousel />
            <FoodList />
        </>
    );
};

export default HomeContainer;
