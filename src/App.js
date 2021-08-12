import React from "react";
import HomeContainer from "./components/Home/HomeContainer";
import CartContextProvider from "./store/CartProvider";

function App() {
    return (
        <CartContextProvider>
            <HomeContainer />
        </CartContextProvider>
    );
}

export default App;
