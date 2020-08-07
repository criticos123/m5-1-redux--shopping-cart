import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Button from "./Button";
import { getStoreItemArray } from "../reducers/index";
const Cart = () => {
  const state = useSelector((state) => state);
  const storeItems = useSelector(getStoreItemArray);
  console.log(storeItems);
  return (
    <Cartdiv>
      <h3>Your Cart</h3>
      <Quantity>
        Helloworld <CartItem />
      </Quantity>
      <Button style={{ width: 200 }}>Purchase</Button>
    </Cartdiv>
  );
};

const Cartdiv = styled.div`
  height: 100%;
  min-height: 100vh;
  min-width: 20vw;
  background-color: purple;
  color: white;
`;

const Quantity = styled.div`
  margin-bottom: 200px;
`;
export default Cart;
