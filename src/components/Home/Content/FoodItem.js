import React, {useState} from "react";
import {
    chakra,
    Text,
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
import { StarIcon } from "@chakra-ui/icons";

const FoodItem = (props) => {

	const [amountState, setAmountState] = useState(1);


	const changeAmountHandler = (amount) => {
		setAmountState(amount);
	}

	const clickAddHandler = () => {
		const cartItem = {
			id: props.id,
			name: props.name,
			image: props.image,
			amount: amountState,
			price: +props.price * amountState,
		}

		props.onAddToCard(cartItem);
	}

    return (
        <Flex
            flexDirection="column"
            maxW="xs"
            mx="auto"
			mb={6}
            bg={useColorModeValue("gray.50", "gray.700")}
			boxShadow="dark-lg"
            rounded="lg"
        >
			{/* Part: name of food and description of food */}
            <Flex px={4} py={2} flexDirection="column">
                <chakra.h1
                    color={useColorModeValue("gray.800", "white")}
                    fontWeight="bold"
                    fontSize={{ base: "14px", md: "20px" }}
                    textTransform="uppercase"
                    minH={{ base: "42px", md: "60px" }}
                >
                    {props.name}
                </chakra.h1>
                <Text
                    // mt={1}
                    fontSize={{ base: "12px", md: "15px" }}
                    color={useColorModeValue("gray.600", "gray.400")}
                    noOfLines={[1, 2]}
                    minH={{ base: "36px", md: "50px" }}
                    flexGrow="1"
                >
                    {props.description}
                </Text>
            </Flex>

			{/* Part: Image of food */}
            <Image
                minH="200px"
                maxH="200px"
                w="full"
                fit="cover"
                mt={2}
                src={props.image}
                alt="NaN"
            />

			{/* Part: review and change number of foods */}
            <Flex>
                <HStack
                    spacing={1}
                    justify="flex-start"
                    display="flex"
                    alignItems="center"
                    ml="15px"
                >
                    <StarIcon
                        color={useColorModeValue("gray.700", "gray.300")}
                    />
                    <StarIcon
                        color={useColorModeValue("gray.700", "gray.300")}
                    />
                    <StarIcon
                        color={useColorModeValue("gray.700", "gray.300")}
                    />
                    <StarIcon color="gray.500" />
                    <StarIcon color="gray.500" />
                </HStack>

                <HStack justify="flex-end" w="full" my="10px">
                    <NumberInput
                        minW="50px"
                        maxW="80px"
                        mr="15px"
                        defaultValue={1}
                        min={1}
                        max={20}
						onChange={changeAmountHandler}
                    >
                        <NumberInputField
                            bg={useColorModeValue("gray.50", "gray.700")}
                        />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </HStack>
            </Flex>

			{/* Part: price and button add to cart */}
            <Flex
                alignItems="center"
                justifyContent="space-between"
                px={4}
                py={2}
                bg="gray.900"
                roundedBottom="lg"
            >
                <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                    ${props.price}
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

					onClick={clickAddHandler}
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
