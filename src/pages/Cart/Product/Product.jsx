import { useContext } from "react";
import { CART_KEY } from "../../../constants/constants";
import { ProductsContext } from "../../../context/ProductsContext";
import * as SC from "./styles";

export const Product = ({ product }) => {
  const { id, image, name, oldPrice, price, count } = product;
  const { productsInLSCart, setProductsInLSCart } = useContext(ProductsContext);

  const changeCount = (productId, count) => {
    const updatedProducts = productsInLSCart.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          count: +count,
        };
      }
      return product;
    });

    localStorage.setItem(CART_KEY, JSON.stringify(updatedProducts));
    setProductsInLSCart(updatedProducts);
  };

  const deleteProduct = (productId) => {
    const newProducts = productsInLSCart.filter(
      (product) => product.id !== productId
    );

    localStorage.setItem(CART_KEY, JSON.stringify(newProducts));
    setProductsInLSCart(newProducts);
  };

  return (
    <SC.Order key={id}>
      <img src={image} alt="productImage" />
      <SC.OrderText>
        <p>{name}</p>
        <SC.PricesAndPosition>
          <SC.Prices>
            <SC.OldPrice>{oldPrice && <p>$ {oldPrice}</p>}</SC.OldPrice>
            <p>$ {price}</p>
          </SC.Prices>

          <SC.Position>
            <button
              onClick={() => {
                changeCount(id, count - 1);
                if (count <= 1) {
                  deleteProduct(id);
                }
              }}
            >
              -
            </button>
            <p>{count}</p>
            <button onClick={() => changeCount(id, count + 1)}>+</button>
          </SC.Position>
        </SC.PricesAndPosition>
      </SC.OrderText>

      <SC.Summa>
        <SC.ButtonDelete onClick={() => deleteProduct(id)}>X</SC.ButtonDelete>
        <p>$ {(count * price).toFixed(2)}</p>
      </SC.Summa>
    </SC.Order>
  );
};
