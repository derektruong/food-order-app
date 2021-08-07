import React from "react";

import {
    Image,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Tr,
    Td,
} from "@chakra-ui/react";

const CartItem = (props) => {
    return (
        <Tr>
            <Td>
                <Image
                    minH="150px"
                    maxH="150px"
                    // w="full"
                    fit="cover"
                    src={props.image}
                    fallbackSrc="https://via.placeholder.com/150"
                />
            </Td>
            <Td fontWeight="bold">{props.name}</Td>
            <Td fontWeight="bold">${props.price}</Td>
            <Td>
                <NumberInput
                    step={1}
                    defaultValue={props.amount}
                    min={1}
                    max={20}
					maxW={28}
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </Td>
        </Tr>
    );
};

export default CartItem;
