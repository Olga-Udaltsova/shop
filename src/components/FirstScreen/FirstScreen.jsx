import background from "../../images/background.svg";
import line from "../../images/line.svg";
import image from "../../images/img.svg";
import { NavLink } from "react-router-dom";
import { Container } from "../Container/Container";
import "../../css/FirstScreen.css";
import * as SC from "./styles";

export const FirstScreen = ({ title,children }) => (
  <Container>
    <SC.FirstScreen>
      <img src={background} alt="background" />
      <SC.FirstScreenHead>{title}</SC.FirstScreenHead>
      <SC.ButtonsAndLine>
        <SC.Buttons>
          <NavLink to="/" className="btnHome">
            Home
          </NavLink>
          {title === "Cart" && (
            <NavLink to="/shop" className="btnLink">
              Shop
            </NavLink>
          )}
          {children}
        </SC.Buttons>
        <img src={line} alt="line" />
      </SC.ButtonsAndLine>
      <img src={image} alt="banner" />
    </SC.FirstScreen>
  </Container>
);
