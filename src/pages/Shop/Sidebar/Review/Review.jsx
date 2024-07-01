import { useEffect, useState } from "react";
import { RandomProduct } from "./RandomProduct/RandomProduct";
import data from "../../../../products.json";
import * as SC from "./styles";

export const Review = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const random = (array) => {
      let filteredArray = [];
      const arr = [];
      while (filteredArray.length < 3) {
        for (let i = 0; i < 3; i++) {
          const rand = Math.floor(Math.random() * array.length);
          arr[i] = array[rand];
        }
        filteredArray = arr.filter((item, index) => {
          return arr.indexOf(item) === index;
        });
      }
      return filteredArray;
    };
    setRandomProducts(random(data.products));
  }, []);

  return (
    <div>
      <SC.NameCategoty>Reviewed by you</SC.NameCategoty>
      <SC.Review>
        {randomProducts.map((randomProduct) => (
          <RandomProduct key={randomProduct.id} randomProduct={randomProduct} />
        ))}
      </SC.Review>
    </div>
  );
};
