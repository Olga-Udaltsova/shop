import { CART_KEY } from "../constants/constants";

export const buyProduct = (product, setProductsInLSCart) => {
  const productsFromLS = localStorage.getItem(CART_KEY);

  if (!productsFromLS) {
    setProductsInLSCart([product]);
    localStorage.setItem(CART_KEY, JSON.stringify([{ ...product, count: 1 }]));
    return;
  }

  const products = JSON.parse(productsFromLS);
  const inLs = products.some((productInLs) => productInLs.id === product.id);

  if (inLs) {
    const newProducts = products.map((productInLs) => {
      if (productInLs.id === product.id) {
        return {
          ...productInLs,
          count: productInLs.count + 1,
        };
      }
      return productInLs;
    });
    setProductsInLSCart(newProducts);
    localStorage.setItem(CART_KEY, JSON.stringify(newProducts));

    return;
  }

  products.push({ ...product, count: 1 });
  setProductsInLSCart(products);
  localStorage.setItem(CART_KEY, JSON.stringify(products));
};
