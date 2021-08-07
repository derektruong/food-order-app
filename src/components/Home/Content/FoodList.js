import React, { useState, useEffect } from "react";
import { Box, SimpleGrid, Progress } from "@chakra-ui/react";

import FoodItem from "./FoodItem";

const FoodList = (props) => {
    const [foodList, setFoodList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        try {
            (async () => {
                const requestUrl = "./assets/data-home/food.json";

                await fetch(requestUrl, {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                })
                    .then(function (response) {
                        return response.json();
                    })
                    .then((data) => {
                        setFoodList(data.food);
                    });
                // setTimeout(() => {
                //     setIsLoading(false);
                // }, 2000);
                setIsLoading(false);
            })();
        } catch (err) {
            console.error(err);
        }
    }, []);

    return (
        <Box my={48} w="full" px={{ base: "1%", md: "20%" }}>
            {isLoading ? (
                <Progress size="lg" isIndeterminate />
            ) : (
                <SimpleGrid
                    minChildWidth={{ base: "200px", md: "300px" }}
                    spacing="35px"
                >
                    {foodList.map((item) => {
                        return (
                            <Box key={item.id}>
                                <FoodItem
                                    id={item.id}
                                    name={item.name}
                                    description={item.description}
                                    image={item.image}
                                    price={item.price}
                                    onAddToCard={props.onAddToCard}
                                />
                            </Box>
                        );
                    })}
                </SimpleGrid>
            )}
        </Box>
    );
};

export default FoodList;
