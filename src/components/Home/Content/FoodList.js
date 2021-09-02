import React, { useState, useEffect } from "react";
import { Box, SimpleGrid, Progress, Text } from "@chakra-ui/react";
import FoodItem from "./FoodItem";
import useHttp from "../../../hooks/use-http";

const FoodList = (props) => {
    const { isLoading, error, sendRequest: fetchFoods } = useHttp();
    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        const transformData = (data) => {
            let loadedFoods = [];

            for (const foodKey in data) {
                loadedFoods.push({
                    id: foodKey,
                    name: data[foodKey].name,
                    description: data[foodKey].description,
                    image: data[foodKey].image,
                    price: data[foodKey].price,
                });
            }

			
            setFoodList(loadedFoods);
        };

        fetchFoods(
            {
                url: "https://react-http-63d69-default-rtdb.asia-southeast1.firebasedatabase.app/food.json",
            },
            transformData
        );
    }, [fetchFoods]);

    return (
        <Box my={48} w="full" px={{ base: "2%", md: "10%", lg: "20%" }}>
            {error && (
                <Text fontSize="20px" color="tomato" textAlign="center">
                    Something went wrong, cannot fetch data! We are so sorry for
                    the inconvenience!
                </Text>
            )}
            {!error && isLoading ? (
                <Progress size="lg" isIndeterminate />
            ) : (
                <SimpleGrid
                    minChildWidth={{ base: "225px", md: "250px", lg: "300px" }}
                    spacing={{ base: "15px", md: "25px", lg: "35px" }}
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
