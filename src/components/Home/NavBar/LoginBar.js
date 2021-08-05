import React from "react";

import {
    chakra,
    useColorModeValue,
    VisuallyHidden,
    Button,
    Avatar,
    Menu,
    MenuItem,
    MenuButton,
    MenuList,
    Icon,
} from "@chakra-ui/react";
import {
    AiFillBell,
} from "react-icons/ai";

import { RiShoppingCartLine } from "react-icons/ri";

const LoginBar = (props) => {
    return (
        <>
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
                    onClick={() => alert("cart is clicked")}
                >
                    <Icon
						as={RiShoppingCartLine}
                        boxSize={5}
                    />

                    <chakra.span
                        pos="absolute"
                        top="-1px"
                        right="-1px"
                        px={1}
                        py={1}
                        fontSize="xs"
                        fontWeight="bold"
                        lineHeight="none"
                        color="red.100"
                        transform="translate(50%,-50%)"
                        bg="red.600"
                        rounded="full"
                    >
                        99
                    </chakra.span>
                </chakra.span>
            </chakra.a>

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