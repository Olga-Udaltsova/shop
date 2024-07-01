import { useContext, useState } from "react";
import { FirstScreen } from "../../components/FirstScreen/FirstScreen";
import { YourCart } from "./YourCart/YourCart";
import { PromoCode } from "./PromoCode/PromoCode";
import { Product } from "./Product/Product";
import { NavLink } from "react-router-dom";
import * as SC from "./styles";
import { NoProducts } from "../../components/NoProducts/NoProducts";
import { ProductsContext } from "../../context/ProductsContext";

export const Cart = () => {
  const { productsInLSCart } = useContext(ProductsContext);
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);

  const addPromo = (event) => setPromo(event.target.value);

  const getPromo = () => {
    if (promo === "ilovereact") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  return (
    <>
      <FirstScreen>
        <NavLink to="/" className="btnShop">
          Shop
        </NavLink>
      </FirstScreen>
      {productsInLSCart.length !== 0 ? (
        <SC.Container>
          <SC.YourOrder>
            <SC.Purchases>
              {productsInLSCart.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </SC.Purchases>

            <YourCart discount={discount} />
          </SC.YourOrder>
          <SC.Container>
            <PromoCode promo={promo} addPromo={addPromo} getPromo={getPromo} />
          </SC.Container>
        </SC.Container>
      ) : (
        <NoProducts>Нет товаров в корзине :(</NoProducts>
      )}
    </>
  );
};
