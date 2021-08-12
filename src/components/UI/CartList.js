import React, { useContext } from "react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
} from "@chakra-ui/react";

import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const CartList = (props) => {
    const ctx = useContext(CartContext);
    const totalPrice = ctx.cartList.reduce((totalPrice, item) => {
        return totalPrice + +item.price * +item.amount;
    }, 0);

    return (
        <Modal
            isOpen={props.isOpen}
            onClose={props.onClose}
            size="4xl"
            isCentered="true"
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader fontWeight="bold">YOUR CART</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Figure</Th>
                                <Th>Name</Th>
                                <Th>Price</Th>
                                <Th>Amount</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {ctx.cartList.map((item) => {
                                return (
                                    <CartItem
                                        key={item.id}
                                        id={item.id}
                                        image={item.image}
                                        name={item.name}
                                        price={item.price}
                                        amount={item.amount}
                                    />
                                );
                            })}
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th></Th>
                                <Th></Th>
                                <Th>Total</Th>
                                <Th></Th>
                                <Th></Th>
                            </Tr>
                            <Tr>
                                <Td></Td>
                                <Td></Td>
                                <Td fontWeight="bold" fontSize="22px">
                                    ${totalPrice}
                                </Td>
                                <Td></Td>
                                <Td></Td>
                            </Tr>
                        </Tfoot>
                    </Table>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3}>
                        Order Now
                    </Button>
                    <Button onClick={props.onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CartList;
