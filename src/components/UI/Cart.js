import React, { useContext } from "react";

import {
    Text,
    Modal,
    Button,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
} from "@chakra-ui/react";

import CartList from "./CartList";
import OrderForm from "./OrderForm";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
    const ctx = useContext(CartContext);

    const isCartEmpty = ctx.cartList.length === 0;
    return (
        <Modal
            isOpen={props.isOpen}
            onClose={props.onClose}
            size="4xl"
            isCentered="true"
            scrollBehavior="inside"
			closeOnOverlayClick={false}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader fontWeight="bold">YOUR CART</ModalHeader>
                <ModalCloseButton />
                {isCartEmpty && (
                    <Text
                        fontSize="20px"
                        color="white"
                        textAlign="center"
                        mb="40px"
                    >
                        Cart is empty, lets go around and get some foods 😊
                    </Text>
                )}
                {!isCartEmpty && (
                    <>
                        <ModalBody>
                            <CartList
                                minW="600px"
                                cartList={ctx.cartList}
                                onClose={props.onClose}
                            />
                            <OrderForm />
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3}>
                                Order Now
                            </Button>
                            <Button onClick={props.onClose}>Cancel</Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default Cart;
