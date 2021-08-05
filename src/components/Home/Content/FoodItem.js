import React from "react";
import {
    chakra,
    Text,
    Box,
    Image,
    Flex,
    useColorModeValue,
    HStack,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react";

const FoodItem = (props) => {
    return (
        <Flex
            flexDirection="column"
            maxW="xs"
            mx="auto"
            bg={useColorModeValue("gray.200", "gray.700")}
            shadow="lg"
            rounded="lg"
        >
            <Box px={4} py={2}>
                <chakra.h1
                    color={useColorModeValue("gray.800", "white")}
                    fontWeight="bold"
                    fontSize={{ base: "18px", md: "28px" }}
                    textTransform="uppercase"
                >
                    NIKE AIR
                </chakra.h1>
                <Text
                    mt={1}
                    fontSize={{ base: "10px", md: "15px" }}
                    color={useColorModeValue("gray.600", "gray.400")}
                    noOfLines={[1, 2, 3]}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi quos quidem sequi illum facere recusandae voluptatibus
                </Text>
            </Box>

            <Image
                h={48}
                w="full"
                fit="cover"
                mt={2}
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                alt="NIKE AIR"
            />
            <HStack justify="flex-end" w="full" my="10px">
                <NumberInput
                    minW="50px"
                    maxW="80px"
                    mr="15px"
                    defaultValue={1}
                    min={1}
                    max={20}
					
                >
                    <NumberInputField bg={useColorModeValue("gray.400", "gray.700")}/>
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </HStack>
            <Flex
                alignItems="center"
                justifyContent="space-between"
                px={4}
                py={2}
                bg="gray.900"
                roundedBottom="lg"
            >
                <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                    $129
                </chakra.h1>

                <chakra.button
                    px={2}
                    py={1}
                    bg="white"
                    fontSize="xs"
                    color="gray.900"
                    fontWeight="bold"
                    rounded="lg"
                    textTransform="uppercase"
                    _hover={{
                        bg: "gray.200",
                    }}
                    _focus={{
                        bg: "gray.400",
                    }}
                >
                    <Text fontSize={{ base: "7px", md: "11px" }}>
                        Add to cart
                    </Text>
                </chakra.button>
            </Flex>
        </Flex>
    );
};

export default FoodItem;
