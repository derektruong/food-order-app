import React from "react";
import { Box, Flex, Spacer} from "@chakra-ui/react";

import FoodItem from "./FoodItem";

const FoodList = (props) => {
    return (
        <Box mt={48} w="full" px={{ base: "2%", md: "15%" }}>
            <Flex flexWrap="wrap">
                <Box w="30%" mb="60px">
					<FoodItem />
				</Box>
                <Spacer />
                <Box w="30%" mb="60px">
					<FoodItem />
				</Box>
                <Spacer />
                <Box w="30%" mb="60px">
					<FoodItem />
				</Box>
				{/*  */}

				<Box w="30%" mb="60px">
					<FoodItem />
				</Box>
                <Spacer />
                <Box w="30%" mb="60px">
					<FoodItem />
				</Box>
                <Spacer />
                <Box w="30%" mb="60px">
					<FoodItem />
				</Box>
				{/*  */}
				
				<Box w="30%" mb="60px">
					<FoodItem />
				</Box>
                <Spacer />
                <Box w="30%" mb="60px">
					<FoodItem />
				</Box>
                <Spacer />
                <Box w="30%" mb="60px">
					<FoodItem />
				</Box>
				{/*  */}
				
				<Box w="30%" mb="60px">
					<FoodItem />
				</Box>
                <Spacer />
                <Box w="30%" mb="60px">
					<FoodItem />
				</Box>
                <Spacer />
                <Box w="30%" mb="60px">
					<FoodItem />
				</Box>
            </Flex>

        </Box>
    );
};

export default FoodList;
