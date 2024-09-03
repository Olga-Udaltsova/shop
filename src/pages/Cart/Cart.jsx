import { useContext, useState } from "react";
import { FirstScreen } from "../../components/FirstScreen/FirstScreen";
import { Container } from "../../components/Container/Container";
import { YourCart } from "./YourCart/YourCart";
import { PromoCode } from "./PromoCode/PromoCode";
import { Product } from "./Product/Product";
import { Link } from "../../components/ui/Link/Link";
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
      <FirstScreen title="Cart">
        <Link to="/cart">Cart</Link>
      </FirstScreen>
      {productsInLSCart.length !== 0 ? (
        <Container>
          <SC.YourOrder>
            <SC.Purchases>
              {productsInLSCart.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </SC.Purchases>

            <YourCart discount={discount} />
          </SC.YourOrder>
          <Container>
            <PromoCode promo={promo} addPromo={addPromo} getPromo={getPromo} />
          </Container>
        </Container>
      ) : (
        <NoProducts>Нет товаров в корзине :(</NoProducts>
      )}
    </>
  );
};
