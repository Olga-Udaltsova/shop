import data from "../products.json";
import { DATA_PER_PAGE } from "../constants/constants";

export const getProducts = (currentPage, search, productsFilters, sortType) => {
  const { products } = data;

  let filteredProducts = onFilter(productsFilters, products);

  filteredProducts = onSearch(filteredProducts, search);

  onSort(filteredProducts, sortType);

  const productsForModify = filteredProducts;
  const page = productsForModify.length <= 12 ? 1 : currentPage;
  const firstIndex = (page - 1) * DATA_PER_PAGE;
  const lastIndex = firstIndex + DATA_PER_PAGE;
  const slicedData = productsForModify.slice(firstIndex, lastIndex);

  return {
    products: slicedData,
    total: productsForModify.length,
    pages: productsForModify.length / DATA_PER_PAGE,
  };
};

const onSearch = (products, search) => {
  return (products = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  ));
};

const onSort = (products, type) => {
  switch (type) {
    case "NAME_ASC":
      products.sort((a, b) => (a.name > b.name ? 1 : -1));
      break;
    case "NAME_DESC":
      products.sort((a, b) => (a.name < b.name ? 1 : -1));
      break;
    case "PRICE_ASC":
      products.sort((a, b) => (a.price > b.price ? 1 : -1));
      break;
    case "PRICE_DESC":
      products.sort((a, b) => (a.price < b.price ? 1 : -1));
      break;
  }
};

const onFilter = (productsFilters, products) => {
  let productsForModify = [...products];

  if (productsFilters.category) {
    if (productsFilters.category === "All") {
      productsForModify = productsForModify.map((product) => product);
    } else {
      productsForModify = productsForModify.filter((product) =>
        product.categories.includes(productsFilters.category)
      );
    }
  }

  if (productsFilters.prices) {
    if (productsFilters.prices.minPrice && productsFilters.prices.maxPrice) {
      productsForModify = productsForModify.filter((product) => {
        return (
          product.price >= productsFilters.prices.minPrice &&
          product.price <= productsFilters.prices.maxPrice
        );
      });
    } else if (productsFilters.prices.minPrice) {
      productsForModify = productsForModify.filter(
        (product) => product.price >= productsFilters.prices.minPrice
      );
    } else if (productsFilters.prices.maxPrice) {
      productsForModify = productsForModify.filter(
        (product) => product.price <= productsFilters.prices.maxPrice
      );
    }
  }

  if (productsFilters.colors) {
    if (productsFilters.colors.length > 0) {
      productsForModify = productsForModify.filter((product) =>
        productsFilters.colors.includes(product.color)
      );
    }
  }
  return productsForModify;
};
