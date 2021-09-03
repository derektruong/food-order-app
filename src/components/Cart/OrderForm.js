import React, { useState, useEffect } from "react";
import {
    Collapse,
    Button,
    Flex,
    Input,
    Alert,
    AlertIcon,
    FormControl,
    FormLabel,
    Select,
    FormHelperText,
    useDisclosure,
} from "@chakra-ui/react";
import { IoAdd, IoArrowUp } from "react-icons/io5";

import useForm from "../../hooks/use-form";

const validFullName = (name) => {
    const re = /^[a-zA-Z]+( [a-zA-Z]+)+$/;
    return re.test(String(name).toLowerCase());
};

const validEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validAddress = (address) => {
    const re = /^[0-9]+( [a-zA-Z]+)+$/;
    return re.test(String(address).toLowerCase());
};

const OrderForm = (props) => {
    const { isOpen, onToggle } = useDisclosure();
    const [cityValue, setCityValue] = useState("Select city/province");

    // hook for valid full name
    const {
        value: enteredFullName,
        isValid: isEnteredFullNameValid,
        hasError: fullNameHasError,
        valueBlurHandler: fullNameBlurHandler,
        valueChangeHandler: fullNameChangeHandler,
    } = useForm(validFullName);

    // hook for valid email
    const {
        value: enteredEmail,
        isValid: isEnteredEmailValid,
        hasError: emailHasError,
        valueBlurHandler: emailBlurHandler,
        valueChangeHandler: emailChangeHandler,
    } = useForm(validEmail);

    // hook for valid address
    const {
        value: enteredAddress,
        isValid: isEnteredAddressValid,
        hasError: addressHasError,
        valueBlurHandler: addressBlurHandler,
        valueChangeHandler: addressChangeHandler,
    } = useForm(validAddress);

    let isFormValid = false;
    if (
        isEnteredFullNameValid &&
        isEnteredEmailValid &&
        isEnteredAddressValid &&
        cityValue !== "Select city/province"
    ) {
        isFormValid = true;
    } else {
        isFormValid = false;
    }
    useEffect(() => {
        props.toggleValidForm(
            isFormValid,
            enteredFullName,
            enteredEmail,
            cityValue,
            enteredAddress
        );
    }, [
        isFormValid,
        enteredFullName,
        enteredEmail,
        cityValue,
        enteredAddress,
        props,
    ]);

    // methods
    const selectCityChangeHandler = (event) => {
        setCityValue(event.target.value);
    };

    return (
        <>
            <Flex direction="row" alignItems="center" mt="25px">
                <Button
                    onClick={onToggle}
                    rightIcon={isOpen ? <IoArrowUp /> : <IoAdd />}
                    colorScheme="teal"
                    variant="outline"
                    mr="15px"
                    fontSize={{ base: "11px", md: "12px", lg: "18px" }}
                >
                    Checkout
                </Button>

                <Alert
                    status={!isFormValid ? "error" : "success"}
                    height="40px"
                    width="400px"
                    borderRadius="5px"
                    fontSize={{ base: "11px", md: "12px", lg: "15px" }}
                >
                    <AlertIcon />
                    {!isFormValid
                        ? "Your information is invalid, please checkout!"
                        : "Information valid, order now 🐱‍🏍"}
                </Alert>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <Flex
                    direction="column"
                    mx={{ base: "5px", lg: "18%" }}
                    mb="50px"
                    mt="25px"
                >
                    <FormControl
                        id="full-name"
                        mb="20px"
                        isInvalid={fullNameHasError}
                        isRequired
                    >
                        <FormLabel>Full name</FormLabel>
                        <Input
                            type="text"
                            placeholder="full name"
                            value={enteredFullName}
                            onBlur={fullNameBlurHandler}
                            onChange={fullNameChangeHandler}
                        />
                        {fullNameHasError && (
                            <FormHelperText color="tomato">
                                Full name is invalid, check again!
                            </FormHelperText>
                        )}
                    </FormControl>

                    <FormControl
                        id="email"
                        mb="20px"
                        isInvalid={emailHasError}
                        isRequired
                    >
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            value={enteredEmail}
                            onBlur={emailBlurHandler}
                            onChange={emailChangeHandler}
                        />
                        {emailHasError && (
                            <FormHelperText color="tomato">
                                Email is invalid, check again!
                            </FormHelperText>
                        )}
                        <FormHelperText>
                            We'll never share your email.
                        </FormHelperText>
                    </FormControl>

                    <FormControl id="country" mb="20px">
                        <FormLabel>City/Province</FormLabel>
                        <Select
                            placeholder="Select city/province"
                            onChange={selectCityChangeHandler}
                        >
                            <option>Da Nang</option>
                            <option>Ha Noi</option>
                            <option>Ho Chi Minh</option>
                        </Select>
                    </FormControl>
                    <FormControl
                        id="address"
                        mb="25px"
                        isInvalid={addressHasError}
                        isRequired
                    >
                        <FormLabel>Address</FormLabel>
                        <Input
                            type="text"
                            placeholder="apartment number - district"
                            value={enteredAddress}
                            onBlur={addressBlurHandler}
                            onChange={addressChangeHandler}
                        />
                        {addressHasError && (
                            <FormHelperText color="tomato">
                                Address is invalid, check again!
                            </FormHelperText>
                        )}
                    </FormControl>
                </Flex>
            </Collapse>
        </>
    );
};

export default OrderForm;
