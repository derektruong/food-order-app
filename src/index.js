import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

// This is the default breakpoint
const breakpoints = createBreakpoints({
    sm: "320px",
    md: "960px",
    lg: "1500px",
});

const colors = {
    brand: {
        50: "#ecefff",
        100: "#cbceeb",
        200: "#a9aed6",
        300: "#888ec5",
        400: "#666db3",
        500: "#4d5499",
        600: "#3c4178",
        700: "#2a2f57",
        800: "#181c37",
        900: "#080819",
    },
};
const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const theme = extendTheme({ breakpoints, colors, config });

const rootElement = document.getElementById("root");
ReactDOM.render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>,
    rootElement
);
