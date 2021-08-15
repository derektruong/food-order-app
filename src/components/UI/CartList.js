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
                                <Th px={{ base: "5px" }}>Figure</Th>
                                <Th px={{ base: "5px" }}>Name</Th>
                                <Th px={{ base: "5px" }} isNumeric>Price</Th>
                                <Th px={{ base: "5px" }}>Amount</Th>
                                <Th px={{ base: "5px" }}></Th>
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
                                <Th px={{ base: "5px" }}></Th>
                                <Th px={{ base: "5px" }}></Th>
                                <Th px={{ base: "5px" }} isNumeric>Total</Th>
                                <Th px={{ base: "5px" }}></Th>
                                <Th px={{ base: "5px" }}></Th>
                            </Tr>
                            <Tr>
                                <Td px={{ base: "5px" }}></Td>
                                <Td px={{ base: "5px" }}></Td>
                                <Td
                                    fontWeight="bold"
                                    fontSize="22px"
                                    px={{ base: "5px" }}
									isNumeric
                                >
                                    ${totalPrice}
                                </Td>
                                <Td px={{ base: "5px" }}></Td>
                                <Td px={{ base: "5px" }}></Td>
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
