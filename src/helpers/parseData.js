import data from "../products.json";

export const getCategories = () => {
  const { products } = data;
  const categories = [];

  products.forEach((product) => {
    product.categories.forEach((category) => {
      if (!categories.includes(category)) {
        categories.push(category);
      }
    });
  });
  return categories;
};

export const getColors = () => {
  const { products } = data;
  const colors = [];

  products.forEach((product) => {
    if (!colors.includes(product.color)) {
      colors.push(product.color);
    }
  });

  return colors;
};

export const getPrices = () => {
  const { products } = data;
  const prices = {
    minPrice: 0,
    maxPrice: 0,
  };
  const price = [];
  products.forEach((product) => {
    if (!price.includes(product.price)) {
      price.push(product.price);
    }
  });
  prices.minPrice = Math.min.apply(null, price);
  prices.maxPrice = Math.max.apply(null, price);
  return prices;
};

