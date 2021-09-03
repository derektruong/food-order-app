import React from "react";

import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from "@chakra-ui/react";

import CartItem from "./CartItem";

const CartList = (props) => {
    const totalPrice = props.cartList.reduce((totalPrice, item) => {
        return totalPrice + +item.price * +item.amount;
    }, 0);

    return (
        <>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th px={{ base: "5px" }}>Figure</Th>
                        <Th px={{ base: "5px" }}>Name</Th>
                        <Th px={{ base: "5px" }} isNumeric>
                            Price
                        </Th>
                        <Th px={{ base: "5px" }}>Amount</Th>
                        <Th px={{ base: "5px" }}></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {props.cartList.map((item) => {
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
                        <Th px={{ base: "5px" }} isNumeric>
                            Total
                        </Th>
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
        </>
    );
};

export default CartList;
