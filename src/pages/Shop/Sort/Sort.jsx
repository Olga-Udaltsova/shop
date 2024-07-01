import { useContext } from "react";
import { ProductUpdateContext } from "../../../context/ProductUpdateContext";
import { getProducts } from "../../../helpers/modifyData";

export const Sort = () => {
  const {
    sortType,
    setSortType,
    currentPage,
    search,
    productsFilters,
    setState,
  } = useContext(ProductUpdateContext);

  const changeSortType = (type) => {
    setSortType(type);
    const modify = getProducts(currentPage, search, productsFilters, type);
    setState(modify);
  };

  return (
    <select
      id="select"
      onChange={(e) => {
        changeSortType(e.target.value);
      }}
      value={sortType}
    >
      <option value="">By relevance</option>
      <option value="NAME_ASC">from A to Z</option>
      <option value="NAME_DESC">from Z to A</option>
      <option value="PRICE_ASC">from low to high</option>
      <option value="PRICE_DESC">from high to low</option>
    </select>
  );
};
