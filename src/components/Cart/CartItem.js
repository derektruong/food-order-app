import React, { useReducer, useContext } from "react";

import {
    Image,
    IconButton,
    Tooltip,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Tr,
    Td,
} from "@chakra-ui/react";
import { TiDeleteOutline } from "react-icons/ti";
import CartContext from "../../store/cart-context";

const cartReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_AMOUNT": {
            return {
                ...state,
                idChangeAmountItem: action.id,
                amountChangeAmountItem: action.amount,
            };
        }
        case "REMOVE_ITEM": {
            return {
                ...state,
                idRemoveItem: action.id,
            };
        }

        default: {
            return state;
        }
    }
};
const CartItem = (props) => {
    const ctx = useContext(CartContext);
    const [cartState, dispatchCart] = useReducer(cartReducer, {
        idChangeAmountItem: props.id,
        amountChangeAmountItem: props.amount,
        idRemoveItem: props.id,
    });

    const changeAmountHandler = (amount) => {
        dispatchCart({ type: "CHANGE_AMOUNT", id: props.id, amount: amount });
        // console.log(cartState.idChangeAmountItem, amount);
        if (amount.toString().trim() === "") amount = 1;
        ctx.changeAmountHandler(cartState.idChangeAmountItem, amount);
    };

    const removeItemHandler = () => {
        dispatchCart({ type: "REMOVE_ITEM", id: props.id });
        ctx.removeItem(props.id);
    };

    return (
        <Tr>
            <Td px={{ base: "5px" }}>
                <Image
                    minH="100px"
                    maxH="100px"
                    w="100px"
                    fit="cover"
                    src={props.image}
                    fallbackSrc="https://via.placeholder.com/150"
                />
            </Td>
            <Td
                fontWeight="bold"
                fontSize={{ base: "11px", md: "16px" }}
                px={{ base: "5px" }}
            >
                {props.name}
            </Td>
            <Td fontWeight="bold" px={{ base: "5px" }} isNumeric>
                ${props.price} x
            </Td>
            <Td px={{ base: "5px" }}>
                <NumberInput
                    step={1}
                    defaultValue={props.amount}
                    min={1}
                    max={20}
                    maxW={28}
                    onChange={changeAmountHandler}
                >
                    <NumberInputField px={{ base: "7px" }} />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </Td>
            <Td px={{ base: "5px" }}>
                <Tooltip
                    hasArrow
                    label="Delete this item"
                    bg="red.600"
                    color="white"
                >
                    <IconButton
                        fontSize="25px"
                        aria-label="Delete this item"
                        icon={<TiDeleteOutline />}
                        onClick={removeItemHandler}
                    />
                </Tooltip>
            </Td>
        </Tr>
    );
};

export default CartItem;
