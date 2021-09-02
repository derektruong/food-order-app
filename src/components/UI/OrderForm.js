import React from "react";
import {
    Collapse,
    Button,
    Flex,
    Input,
    FormControl,
    FormLabel,
    Select,
    FormHelperText,
	useDisclosure
} from "@chakra-ui/react";
import { AiOutlineForm } from "react-icons/ai";

const OrderForm = (props) => {
	const { isOpen, onToggle } = useDisclosure();
    return (
        <>
            <Button
                onClick={onToggle}
                rightIcon={<AiOutlineForm />}
                colorScheme="teal"
                variant="outline"
				mt="25px"
            >
                Checkout
            </Button>
            <Collapse in={isOpen} animateOpacity>
                <Flex
                    direction="column"
                    mx={{ base: "5px", lg: "20%" }}
                    mb="50px"
                    mt="25px"
                >
                    <FormControl id="full-name" mb="20px" isRequired>
                        <FormLabel>Full name</FormLabel>
                        <Input type="text" placeholder="full name" />
                    </FormControl>

                    <FormControl id="email" mb="20px" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" />
                        <FormHelperText>
                            We'll never share your email.
                        </FormHelperText>
                    </FormControl>

                    <FormControl id="country" mb="20px">
                        <FormLabel>City/Province</FormLabel>
                        <Select placeholder="Da Nang">
                            <option>Ha Noi</option>
                            <option>Ho Chi Minh</option>
                        </Select>
                    </FormControl>
                    <FormControl id="address" mb="25px" isRequired>
                        <FormLabel>Address</FormLabel>
                        <Input
                            type="text"
                            placeholder="apartment number - district"
                        />
                    </FormControl>
                </Flex>
            </Collapse>
        </>
    );
};

export default OrderForm;
