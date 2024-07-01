import { useContext } from "react";
import burger_menu from "../../images/burger_menu.svg";
import logo from "../../images/logo.svg";
import search from "../../icons/search.svg";
import user from "../../icons/user.svg";
import heart from "../../icons/heart.svg";
import bag from "../../icons/shopping-bag.svg";
import { Container } from "../Container/Container";
import { ProductsContext } from "../../context/ProductsContext";
import * as SC from "./styles";
import "../../css/Header.css";

export const Header = () => {
  const { productsInLSFavorites, productsInLSCart } =
    useContext(ProductsContext);
  return (
    <Container>
      <SC.Header>
        <SC.Menu>
          <img src={burger_menu} alt="menu" />
          <img src={logo} alt="logo" />
          <SC.NavMenu>
            <SC.Link to="/">Home</SC.Link>
            <div className="DropDownMenu">
              <SC.Link to="/">Pages </SC.Link>
            </div>
            <div className="DropDownMenu">
              <SC.Link to="/">Shop</SC.Link>
            </div>
            <SC.Link to="/">Blog</SC.Link>
            <SC.Link to="/">Contact</SC.Link>
          </SC.NavMenu>
        </SC.Menu>
        <SC.Icons>
          <SC.Link to="/">
            <img src={search} alt="search" />
          </SC.Link>
          <SC.Link to="/">
            <img src={user} alt="user" />
          </SC.Link>

          <SC.Link to="/">
            <SC.FavoriteAndCart>
              <img src={heart} alt="heart" />
              <div>{productsInLSFavorites.length}</div>
            </SC.FavoriteAndCart>
          </SC.Link>
          <SC.Link to="/cart">
            <SC.FavoriteAndCart>
              <img src={bag} alt="bag" />
              <div>{productsInLSCart.length}</div>
            </SC.FavoriteAndCart>
          </SC.Link>
        </SC.Icons>
      </SC.Header>
    </Container>
  );
};
