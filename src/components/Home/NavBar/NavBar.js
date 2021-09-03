import React from "react";

import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    useColorMode,
    VisuallyHidden,
    HStack,
    Button,
    useDisclosure,
    useMediaQuery,
    VStack,
    IconButton,
    CloseButton,
    InputGroup,
    InputLeftElement,
    Input,
    Icon,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiFillHome, AiOutlineSearch } from "react-icons/ai";

import { IoPricetagsOutline, IoFastFoodSharp } from "react-icons/io5";
import { FaMoon, FaSun } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

import LoginBar from "./LoginBar";
// import LogoutBar from "./LogoutBar";

const NavBar = (props) => {
    const { toggleColorMode } = useColorMode();

    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
    const bg = useColorModeValue("#ecefff", "gray.800");
    const mobileNav = useDisclosure();
    const [isMobileView] = useMediaQuery("(min-width: 500px)");

    return (
        <React.Fragment>
            <chakra.header
                pos="fixed"
                top={0}
                bg={bg}
                w="full"
                px={{ base: 2, sm: 4 }}
                py={2}
                shadow="md"
                zIndex="modal"
            >
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mx="auto"
                >
                    <HStack display="flex" spacing={3} alignItems="center">
                        <Box display={{ base: "inline-flex", md: "none" }}>
                            <IconButton
                                display={{ base: "flex", md: "none" }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color={useColorModeValue("gray.800", "inherit")}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />
                            <VStack
                                pos="absolute"
                                w="full"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={1}
                                bg={bg}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                                zIndex="modal"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    justifySelf="self-start"
                                    onClick={mobileNav.onClose}
                                />
                                <Button
                                    w="full"
                                    variant="ghost"
                                    leftIcon={<AiFillHome />}
                                >
                                    Explore
                                </Button>
                                <Button
                                    colorScheme="facebook"
                                    leftIcon={<IoPricetagsOutline />}
                                >
                                    Pricing
                                </Button>
                                <Button
                                    w="full"
                                    variant="ghost"
                                    leftIcon={<RiContactsFill />}
                                >
                                    Contact
                                </Button>
                            </VStack>
                        </Box>
                        <chakra.a
                            href="/"
                            title="Food Order Page"
                            display="flex"
                            alignItems={{ base: "flex-start", md: "center" }}
                            ml="-12px"
                        >
                            <Icon
                                as={IoFastFoodSharp}
                                boxSize={{ base: 5, md: 8 }}
                                color="red.400"
                                marginBottom={1}
                                marginRight={2}
                            />

                            <VisuallyHidden>Food</VisuallyHidden>
                        </chakra.a>

                        <HStack
                            spacing={3}
                            display={{ base: "none", md: "inline-flex" }}
                        >
                            <Button
                                variant="ghost"
                                leftIcon={<AiFillHome />}
                                size="md"
                            >
                                Explore
                            </Button>
                            <Button
                                variant="solid"
                                colorScheme="blue"
                                leftIcon={<IoPricetagsOutline />}
                                size="md"
                            >
                                Pricing
                            </Button>
                            <Button
                                variant="ghost"
                                leftIcon={<RiContactsFill />}
                                size="md"
                            >
                                Contact
                            </Button>
                        </HStack>
                    </HStack>
                    <HStack
                        spacing={3}
                        display={mobileNav.isOpen ? "none" : "flex"}
                        alignItems="center"
                    >
                        <InputGroup>
                            {isMobileView && (
                                <InputLeftElement
                                    // display={{ base: "none", md: "flex" }}
                                    pointerEvents="none"
                                    children={<AiOutlineSearch />}
                                />
                            )}

                            <Input
                                 px={isMobileView ? 0 : 2}
                                fontSize={{ base: "12px", md: "15px" }}
                                type="tel"
                                placeholder="Search"
                            />
                        </InputGroup>

                        {/* Authenticated */}

                        <LoginBar cart={props.cart} />
                        {/* <LogoutBar /> */}

                        {/* done */}
                        <IconButton
                            size="md"
                            fontSize="lg"
                            aria-label={`Switch to ${bg} mode`}
                            variant="ghost"
                            color="current"
                            ml={{ base: "0", md: "3" }}
                            onClick={toggleColorMode}
                            icon={<SwitchIcon />}
                        />
                    </HStack>
                </Flex>
            </chakra.header>
        </React.Fragment>
    );
};

export default NavBar;
