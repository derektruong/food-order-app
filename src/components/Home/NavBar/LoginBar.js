import React, { useContext } from "react";

import {
    chakra,
    useColorModeValue,
    useDisclosure,
    VisuallyHidden,
    Button,
    Avatar,
    Menu,
    MenuItem,
    MenuButton,
    MenuList,
    Icon,
    Popover,
    PopoverTrigger,
    Portal,
    PopoverContent,
    PopoverArrow,
    PopoverHeader,
    PopoverCloseButton,
    PopoverBody,
} from "@chakra-ui/react";
import { AiFillBell } from "react-icons/ai";

import { RiShoppingCartLine } from "react-icons/ri";

import CartList from "../../UI/CartList";
import CartContext from "../../../store/cart-context";

const LoginBar = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const ctx = useContext(CartContext);

    const closePopover = () => ctx.popoverHandler();
    return (
        <>
            <CartList
                minW="600px"
                isOpen={isOpen}
                onClose={onClose}
                cartList={props.cart}
            />
            <Popover
                isOpen={ctx.isCartChange}
                onClose={closePopover}
                closeOnBlur={true}
                
            >
                <PopoverTrigger>
                    <chakra.a
                        p={2}
                        color={useColorModeValue("gray.800", "inherit")}
                        rounded="sm"
                        _hover={{
                            color: useColorModeValue("gray.800", "gray.600"),
                        }}
                    >
                        <chakra.span
                            pos="relative"
                            display="inline-block"
                            onClick={onOpen}
                        >
                            <Icon as={RiShoppingCartLine} boxSize={5} />

                            <chakra.span
                                pos="absolute"
                                top="-1px"
                                right="-1px"
                                px={1}
                                py={1}
                                fontSize="xs"
                                fontWeight="bold"
                                lineHeight="none"
                                color="black"
                                transform="translate(50%,-50%)"
                                bg="yellow.300"
                                rounded="full"
                            >
                                {ctx.cartList.length}
                            </chakra.span>
                        </chakra.span>
                    </chakra.a>
                </PopoverTrigger>
                {ctx.isCartChange && (
                    <Portal>
                        <PopoverContent mt="10px" zIndex="popover">
                            <PopoverArrow />
                            <PopoverHeader>
                                You have new food in your meal !!!
                            </PopoverHeader>
                            <PopoverBody>
                                <Button
                                    onClick={onOpen}
                                    fontSize="13px"
                                    colorScheme="red"
                                >
                                    Check it out!
                                </Button>
                            </PopoverBody>
                            <PopoverCloseButton onClick={closePopover} />
                        </PopoverContent>
                    </Portal>
                )}
            </Popover>

            <chakra.a
                p={2}
                color={useColorModeValue("gray.800", "inherit")}
                rounded="sm"
                _hover={{
                    color: useColorModeValue("gray.800", "gray.600"),
                }}
            >
                <Icon as={AiFillBell} boxSize={5} />
                <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>

            <Menu>
                <MenuButton
                    as={Button}
                    boxShadow="lg"
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW="30px"
                >
                    <Avatar
                        size="sm"
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                    />
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};

export default LoginBar;
