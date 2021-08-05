import React from "react";

import {
	Stack,
    Button,
} from "@chakra-ui/react";

const LogoutBar = (props) => {
    return (
        <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
        >
            <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                href={"#"}
            >
                Sign In
            </Button>
            <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
				h='37.5'
                fontWeight={600}
                color={"white"}
                bg={"teal.400"}
                href={"#"}
                _hover={{
                    bg: "pink.300",
                }}
            >
                Sign Up
            </Button>
        </Stack>
    );
};

export default LogoutBar;
