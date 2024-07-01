import { useContext } from "react";
import { ProductUpdateContext } from "../../../context/ProductUpdateContext";
import * as SC from "./styles";

export const Quantity = () => {
  const { total } = useContext(ProductUpdateContext);
  return (
    <SC.Quantity>
      There are <span>{total}</span> products in this category
    </SC.Quantity>
  );
};
