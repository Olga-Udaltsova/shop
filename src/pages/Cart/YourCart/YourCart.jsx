import { useContext } from "react";
import * as SC from "./styles";
import { ProductsContext } from "../../../context/ProductsContext";

export const YourCart = ({ discount }) => {
  const { productsInLSCart } = useContext(ProductsContext);
  const delivery = 15;
  let orderPrice = productsInLSCart
    .reduce((acc, product) => acc + product.price * product.count, 0)
    .toFixed(2);

  const getOrderPrice = () => {
    if (!discount) {
      return (orderPrice = (+orderPrice + delivery).toFixed(2));
    }
    return (orderPrice = (+orderPrice - orderPrice * (discount / 100) + delivery).toFixed(2));
  };

  return (
    <SC.YourCart>
      <h2>Your Order</h2>
      <SC.Cart>
        <SC.Cost>
          Order price <span>$ {orderPrice}</span>
        </SC.Cost>
        <SC.Cost>
          Discount for promo code
          <span>% {discount}</span>
        </SC.Cost>
        <SC.Cost>
          <p>
            Delivery <span>(Aug 02 at 16:00)</span>
          </p>
          $ {delivery}
        </SC.Cost>
      </SC.Cart>

      <SC.Total>
        <p>Total</p> <span>$ {getOrderPrice()}</span>
      </SC.Total>
      <SC.ButtonCheck onClick={() => console.log(productsInLSCart)}>
        Checkout
      </SC.ButtonCheck>
    </SC.YourCart>
  );
};
