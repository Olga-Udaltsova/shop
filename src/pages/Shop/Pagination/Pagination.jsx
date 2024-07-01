import { useState, useEffect, useContext } from "react";
import { ProductUpdateContext } from "../../../context/ProductUpdateContext";
import { getProducts } from "../../../helpers/modifyData";
import * as SC from "./styles";

export const Pagination = () => {
  const {
    currentPage,
    setCurrentPage,
    pages,
    search,
    productsFilters,
    sortType,
    setState,
  } = useContext(ProductUpdateContext);

  const [pagination, setPagination] = useState([]);

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
    const modify = getProducts(page, search, productsFilters, sortType);
    setState(modify);
  };

  useEffect(() => {
    const tempPagination = [];
    for (let i = 0; i < pages; i++) {
      tempPagination.push(i + 1);
    }
    setPagination(tempPagination);
  }, [pages]);

  const increasePage = (currentPage) => {
    if (currentPage === pagination[pagination.length - 1]) {
      return;
    }
    changeCurrentPage(currentPage + 1);
  };

  const reducePage = (currentPage) => {
    if (currentPage === 1) {
      return;
    }
    changeCurrentPage(currentPage - 1);
  };

  return (
    <SC.Pages>
      <SC.Pointer onClick={() => reducePage(currentPage)}>&larr;</SC.Pointer>
      {pagination.map((page) => (
        <SC.Page
          key={page}
          className={currentPage === page ? "currentPage" : "page"}
          onClick={() => changeCurrentPage(page)}
        >
          {page}
        </SC.Page>
      ))}
      <SC.Pointer onClick={() => increasePage(currentPage)}>&rarr;</SC.Pointer>
    </SC.Pages>
  );
};
