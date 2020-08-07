import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "react-icons-kit";
import { x } from "react-icons-kit/feather/x";

const CartItem = () => {
  return <Icon icon={x} />;
};

export default CartItem;
