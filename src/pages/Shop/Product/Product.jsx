import { useContext } from "react";
import wishlist from "../../../icons/Wishlist.svg";
import noWishlist from "../../../icons/NoWishlist.svg";
import { Label } from "../../../components/Label/Label";
import { ProductsContext } from "../../../context/ProductsContext";
import { buyProduct } from "../../../helpers/buyProduct";
import { addToFavorite } from "../../../helpers/addToFavorite";
import * as SC from "./styles";

export const Product = ({ product }) => {
  const { id, name, isSale, isNew, image, oldPrice, price } = product;
  const {
    productsInLSFavorites,
    productsInLSCart,
    setProductsInLSCart,
    setProductsInLSFavorites,
  } = useContext(ProductsContext);

  const inFavorite = productsInLSFavorites.some(
    (item) => item.id === product.id
  );
  const inCart = productsInLSCart.some((item) => item.id === product.id);

  return (
    <div key={id}>
      {isSale ? <Label $sale>SALE</Label> : null}
      {isNew ? <Label>NEW</Label> : null}
      <div onClick={() => addToFavorite(product, setProductsInLSFavorites)}>
        {inFavorite ? (
          <SC.Image src={wishlist} alt="wishlist" />
        ) : (
          <SC.Image src={noWishlist} alt="noWishlist" />
        )}
      </div>

      <SC.Picture src={image} alt="productImage" />
      <p>{name}</p>
      <SC.Price>
        <p>$ {price} </p>
        <div>{oldPrice && <p>$ {oldPrice}</p>}</div>
      </SC.Price>
      <SC.ButtonBuy
        onClick={() => buyProduct(product, setProductsInLSCart)}
        $inCart={inCart}
      >
        Buy
      </SC.ButtonBuy>
    </div>
  );
};
