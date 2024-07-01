import { useContext } from "react";
import searchPicture from "../../../../icons/search.svg";
import { debounce } from "../../../../helpers/debounce";
import { ProductUpdateContext } from "../../../../context/ProductUpdateContext";
import { getProducts } from "../../../../helpers/modifyData";
import * as SC from "./styles";

export const Search = () => {
  const { setSearch, currentPage, productsFilters, sortType, setState } =
    useContext(ProductUpdateContext);

  const onSearch = (e) => {
    setSearch(e.target.value);
    const modify = getProducts(
      currentPage,
      e.target.value,
      productsFilters,
      sortType
    );
    setState(modify);
  };

  const debouncedSearch = debounce(onSearch, 1000);
  return (
    <SC.Search>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => debouncedSearch(e)}
      />
      <img src={searchPicture} alt="search" />
    </SC.Search>
  );
};
