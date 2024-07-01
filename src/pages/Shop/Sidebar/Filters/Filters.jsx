import { useContext, useState } from "react";
import {
  getCategories,
  getColors,
  getPrices,
} from "../../../../helpers/parseData";
import { ProductUpdateContext } from "../../../../context/ProductUpdateContext";
import { getProducts } from "../../../../helpers/modifyData";
import * as SC from "./styles";

export const Filters = () => {
  const { setProductsFilters, currentPage, search, sortType, setState } =
    useContext(ProductUpdateContext);

  const categories = getCategories();
  const colors = getColors();
  const prices = getPrices();

  const [minPrice, setMinPrice] = useState(prices.minPrice);
  const [maxPrice, setMaxPrice] = useState(prices.maxPrice);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);

  const onChangeCategory = (category) => {
    setSelectedCategory(category);
    if (selectedCategory.includes(category)) {
      setSelectedCategory("");
    }
  };

  const onColorSelect = (e) => {
    const color = e.target.value;

    if (selectedColors.includes(color)) {
      const filteredColors = selectedColors.filter(
        (selectedColor) => selectedColor !== color
      );
      setSelectedColors(filteredColors);
      return;
    }
    setSelectedColors([...selectedColors, color]);
  };

  const changeMinPrice = (e) => {
    const min = e.target.value;
    setMinPrice(min);
  };

  const changeMaxPrice = (e) => {
    const max = e.target.value;
    setMaxPrice(max);
  };

  const applyFilters = () => {
    const modify = getProducts(
      currentPage,
      search,
      {
        category: selectedCategory,
        prices: { minPrice, maxPrice },
        colors: selectedColors,
      },
      sortType
    );

    setState(modify);
    setProductsFilters({
      category: selectedCategory,
      prices: { minPrice, maxPrice },
      colors: selectedColors,
    });
  };

  return (
    <>
      <div className="categories">
        <SC.NameCategoty>Categories</SC.NameCategoty>
        <SC.Category>
          <SC.List
            onClick={() => onChangeCategory("All")}
            $isSelected={selectedCategory === "All"}
          >
            All
          </SC.List>
          {categories.map((category) => (
            <SC.List
              key={category}
              onClick={() => onChangeCategory(category)}
              $isSelected={selectedCategory === category}
            >
              {category}
            </SC.List>
          ))}
        </SC.Category>
      </div>

      <div className="prices">
        <SC.NameCategoty>Price</SC.NameCategoty>
        <SC.LabelInput>
          <div>
            Min:
            <input
              type="text"
              id="minPrice"
              placeholder="20"
              value={minPrice}
              onChange={(e) => changeMinPrice(e)}
            />
          </div>
          <div>
            Max:
            <input
              type="text"
              id="maxPrice"
              placeholder="150"
              value={maxPrice}
              onChange={(e) => changeMaxPrice(e)}
            />
          </div>
        </SC.LabelInput>
      </div>

      <div className="colors">
        <SC.NameCategoty>Colors</SC.NameCategoty>
        <SC.Checkboxs>
          {colors.map((color) => (
            <label htmlFor={color} key={color}>
              <input
                key={color}
                type="checkbox"
                id={color}
                value={color}
                onChange={onColorSelect}
              />
              <span>{color}</span>
            </label>
          ))}
        </SC.Checkboxs>

        <SC.ButtonFilter onClick={applyFilters}>Apply Filter</SC.ButtonFilter>
      </div>
    </>
  );
};
