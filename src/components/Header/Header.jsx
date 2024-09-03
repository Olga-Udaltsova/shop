import { useContext } from "react";
import burger_menu from "../../images/burger_menu.svg";
import logo from "../../images/logo.svg";
import search from "../../icons/search.svg";
import user from "../../icons/user.svg";
import heart from "../../icons/heart.svg";
import bag from "../../icons/shopping-bag.svg";
import { Container } from "../Container/Container";
import { ProductsContext } from "../../context/ProductsContext";
import { Link } from "../ui/Link/Link";
import * as SC from "./styles";

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
            <Link to="/">Home</Link>
            <SC.DropDownMenu>
              <Link to="/pages">Pages</Link>
            </SC.DropDownMenu>
            <SC.DropDownMenu>
              <Link to="/shop">Shop</Link>
            </SC.DropDownMenu>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </SC.NavMenu>
        </SC.Menu>

        <SC.Icons>
          <div>
            <img src={search} alt="search" />
          </div>
          <Link to="/">
            <img src={user} alt="user" />
          </Link>

          <Link to="/">
            <SC.FavoriteAndCart>
              <img src={heart} alt="heart" />
              <div>{productsInLSFavorites.length}</div>
            </SC.FavoriteAndCart>
          </Link>
          <Link to="/cart">
            <SC.FavoriteAndCart>
              <img src={bag} alt="bag" />
              <div>{productsInLSCart.length}</div>
            </SC.FavoriteAndCart>
          </Link>
        </SC.Icons>
      </SC.Header>
    </Container>
  );
};
