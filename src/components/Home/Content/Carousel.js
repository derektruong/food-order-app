import React, { useState } from "react";
import {
    chakra,
    Link,
    Text,
    Box,
    Flex,
    useColorModeValue,
    Image,
} from "@chakra-ui/react";

const Carousel = () => {
    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "auto",
        mt: "-22px",
        p: "16px",
        color: "white",
        fontWeight: "bold",
        fontSize: "18px",
        transition: "0.6s ease",
        borderRadius: "0 3px 3px 0",
        userSelect: "none",
        _hover: {
            opacity: 0.8,
            bg: "black",
        },
    };

    const slides = [
        {
            img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            img: "https://images.pexels.com/photos/1502286/pexels-photo-1502286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            img: "https://images.pexels.com/photos/6248852/pexels-photo-6248852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            img: "https://images.pexels.com/photos/239581/pexels-photo-239581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            img: "https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const slidesCount = slides.length;

    const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };
    const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };
    const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
    };

    return (
        <Flex
            w="full"
            bg={useColorModeValue("white", "gray.800")}
            p={8}
            marginTop={16}
            alignItems="center"
            justifyContent="center"
			px={{ base: "2%", md: "20%" }}
        >
            <Flex alignItems="center" w="full" overflow="hidden" pos="relative">
                <Flex
                    h={{ base: "40vh", md: "60vh" }}
                    w="full"
                    {...carouselStyle}
                >
                    {slides.map((slide, sid) => (
                        <Box
                            key={`slide-${sid}`}
                            boxSize="full"
                            shadow="md"
                            flex="none"
                        >
                            <Text
                                color="white"
                                fontSize="xs"
                                p="8px 12px"
                                pos="absolute"
                                top="0"
                            >
                                {sid + 1} / {slidesCount}
                            </Text>
                            <Image
                                src={slide.img}
                                boxSize="full"
                                backgroundSize="cover"
                                borderRadius="xl"
                            />
                        </Box>
                    ))}
                </Flex>
                <Text {...arrowStyles} left="0" onClick={prevSlide}>
                    &#10094;
                </Text>
                <Text {...arrowStyles} right="0" onClick={nextSlide}>
                    &#10095;
                </Text>
            </Flex>
            {/* TODO */}
            <Box
                justifyContent="flex-end"
                pos="absolute"
                // left={{ base: "5%", md: "30%" }}
                top={{ base: "35vh", md: "50vh" }}
                w={{ base: "80vw", md: "500px" }}
                mx="auto"
                py={4}
                px={8}
                bg={useColorModeValue("white", "gray.800")}
                shadow="lg"
                rounded="lg"
                zIndex="docked"
            >
                <Flex justifyContent="center" mt={-16}>
                    <Image
                        w={20}
                        h={20}
                        fit="cover"
                        rounded="full"
                        borderStyle="solid"
                        borderWidth={2}
                        borderColor={useColorModeValue(
                            "brand.500",
                            "brand.400"
                        )}
                        alt="Testimonial avatar"
                        src="https://images.pexels.com/photos/3850213/pexels-photo-3850213.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    />
                </Flex>

                <chakra.h2
                    color={useColorModeValue("gray.800", "white")}
                    // fontSize={{ base: "2xl", md: "3xl" }}
                    fontSize={{ base: "18px", md: "28px" }}
                    mt={{ base: 2, md: 0 }}
                    fontWeight="bold"
                >
                    Delicious Food, Delivered you
                </chakra.h2>

                <Text
                    fontSize={{ base: "11px", md: "16px" }}
                    mt={2}
                    color={useColorModeValue("gray.600", "gray.200")}
                >
                    Choose your favorite meal from our broad selection of
                    available meals and enjoy a delicious lumchor dinner at
                    home.
                </Text>
                <Text
                    fontSize={{ base: "11px", md: "16px" }}
                    mt={2}
                    color={useColorModeValue("gray.600", "gray.200")}
                >
                    All our meals are cooked with high-quality ingredients,
                    just-in-time and of course by experienced chefs!
                </Text>

                <Flex justifyContent="end" mt={4}>
                    <Link
                        fontSize={{ base: "14px", md: "18px" }}
                        color={useColorModeValue("brand.500", "brand.300")}
                    >
                        Derek Truong
                    </Link>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Carousel;
