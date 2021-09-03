import React, { useContext, useState } from "react";

import {
    Text,
    Modal,
    Button,
    Spinner,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    useToast,
    useColorModeValue,
} from "@chakra-ui/react";

import CartList from "./CartList";
import OrderForm from "./OrderForm";
import CartContext from "../../store/cart-context";
import useHttp from "../../hooks/use-http";

const Cart = (props) => {
    const ctx = useContext(CartContext);
    const toast = useToast();
    const [isValid, setIsValid] = useState(false);

    const formValues = {
        fullName: "",
        email: "",
        city: "",
        address: "",
    };

    // check if cart is empty or not
    const isCartEmpty = ctx.cartList.length === 0;

    // undisabled submit button whenever form is valid
    const toggleDisableHandler = (
        isFormValid,
        enteredFulName,
        enteredEmail,
        cityValue,
        enteredAddress
    ) => {
        if (isFormValid) {
            setIsValid(true);
            formValues.fullName = enteredFulName;
            formValues.email = enteredEmail;
            formValues.city = cityValue;
            formValues.address = enteredAddress;
        } else {
            setIsValid(false);
        }
    };

    // handler submit form
    const { isLoading, error, sendRequest: pushBill } = useHttp();

    const afterSubmitSuccessHandler = (data) => {
        if (error) {
            return;
        }
        props.onClose();
        setTimeout(
            () =>
                toast({
                    title: "Order success.",
                    description: "Congratulation, your food is coming 🚚",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                }),
            1000
        );
        ctx.removeAllItems();
    };

    const submitFormHandler = () => {
        pushBill(
            {
                url: process.env.REACT_APP_FIREBASE_URL + "/bills.json",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: {
                    fullName: formValues.fullName,
                    email: formValues.email,
                    city: formValues.city,
                    address: formValues.address,
                    foodList: ctx.cartList,
                    totalPrice: ctx.totalPrice,
                },
            },
            afterSubmitSuccessHandler
        );
    };

    return (
        <Modal
            color={useColorModeValue("white", "gray.800")}
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
                {isCartEmpty && !isLoading && !error && (
                    <Text fontSize="20px" textAlign="center" mb="40px">
                        Cart is empty, lets go around and get some foods 😊
                    </Text>
                )}
                {error &&
                    (() =>
                        toast({
                            title: "Cannot order.",
                            description:
                                "We are so sorry, cannot order now, please try again later.",
                            status: "error",
                            duration: 5000,
                            isClosable: true,
                        }))()}
                {!error && isLoading && (
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
						my="10px"
                    />
                )}

                {!isCartEmpty && !isLoading && !error && (
                    <>
                        <ModalBody>
                            <CartList
                                minW="600px"
                                cartList={ctx.cartList}
                                onClose={props.onClose}
                            />
                            <OrderForm toggleValidForm={toggleDisableHandler} />
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                colorScheme="blue"
                                mr={3}
                                isDisabled={!isValid}
                                onClick={submitFormHandler}
                            >
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
