import * as SC from "./styles";

export const RandomProduct = ({ randomProduct }) => {
  const { id, image, name, price, oldPrice } = randomProduct;
  return (
    <SC.ReviewedProduct key={id}>
      <img src={image} alt="productImage" />
      <div>
        <p>{name}</p>
        <SC.ReviewedPrice>
          <p>$ {price} </p>
          <div>{oldPrice && <p>$ {oldPrice}</p>}</div>
        </SC.ReviewedPrice>
      </div>
    </SC.ReviewedProduct>
  );
};
