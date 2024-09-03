import { useState } from "react";
import { FirstScreen } from "../../components/FirstScreen/FirstScreen";
import { Container } from "../../components/Container/Container";
import { Sidebar } from "./Sidebar/Sidebar";
import { Quantity } from "./QuantityProducts/QuantityProducts";
import { Sort } from "./Sort/Sort";
import { Product } from "./Product/Product";
import { Pagination } from "./Pagination/Pagination";
import { News } from "../../components/News/News";
import { getProducts } from "../../helpers/modifyData";
import { Link } from "../../components/ui/Link/Link";
import { NoProducts } from "../../components/NoProducts/NoProducts";
import { ProductUpdateContext } from "../../context/ProductUpdateContext";
import * as SC from "./styles";

export const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("");
  const [search, setSearch] = useState("");
  const [productsFilters, setProductsFilters] = useState({
    category: "",
    prices: {},
    colors: [],
  });
  const [{ products, total, pages }, setState] = useState(
    getProducts(currentPage, search, productsFilters, sortType)
  );

  const value = {
    currentPage,
    setCurrentPage,
    sortType,
    setSortType,
    search,
    setSearch,
    productsFilters,
    setProductsFilters,
    products,
    total,
    pages,
    setState,
  };

  return (
    <ProductUpdateContext.Provider value={value}>
      <FirstScreen title={"Shop"}>
        <Link to="/shop">Shop</Link>
      </FirstScreen>
      <Container>
        <SC.Main>
          <Sidebar />
          <SC.MainContent>
            <SC.QuantityAndSort>
              <Quantity />
              <Sort />
            </SC.QuantityAndSort>
            <SC.Clothes>
              {products.length ? (
                products.map((product) => (
                  <Product key={product.id} product={product} />
                ))
              ) : (
                <NoProducts>Нет товаров по выбранным категориям :(</NoProducts>
              )}
            </SC.Clothes>
            {total === 0 ? null : <Pagination />}
          </SC.MainContent>
        </SC.Main>
      </Container>
      <News />
    </ProductUpdateContext.Provider>
  );
};
