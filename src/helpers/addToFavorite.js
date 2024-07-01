import { FAVORITE_KEY } from "../constants/constants";

export const addToFavorite = (favoriteProduct, setProductsInLSFavorites) => {
  const productsFromLS = localStorage.getItem(FAVORITE_KEY);

  if (!productsFromLS) {
    setProductsInLSFavorites([favoriteProduct]);
    localStorage.setItem(FAVORITE_KEY, JSON.stringify([favoriteProduct]));
    return;
  }

  const products = JSON.parse(productsFromLS);
  const inLS = products.some((product) => product.id === favoriteProduct.id);

  if (inLS) {
    const filteredProducts = products.filter(
      (product) => product.id !== favoriteProduct.id
    );
    setProductsInLSFavorites(filteredProducts);
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(filteredProducts));
    return;
  }
  products.push(favoriteProduct);
  setProductsInLSFavorites(products);
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(products));
};
