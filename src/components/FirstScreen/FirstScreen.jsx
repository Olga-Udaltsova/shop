import background from "../../images/background.svg";
import line from "../../images/line.svg";
import image from "../../images/img.svg";
import { NavLink } from "react-router-dom";
import { Container } from "../Container/Container";
import "../../css/FirstScreen.css";
import * as SC from "./styles";

export const FirstScreen = ({ children }) => (
  <Container>
    <SC.FirstScreen>
      <img src={background} alt="background" />
      <SC.FirstScreenHead>
        {children.props.children === "Cart" ? "Shop" : "Cart"}
      </SC.FirstScreenHead>
      <SC.ButtonsAndLine>
        <SC.Buttons>
          <NavLink to="/" className="btnHome">
            Home
          </NavLink>
          {children}
        </SC.Buttons>
        <img src={line} alt="line" />
      </SC.ButtonsAndLine>
      <img src={image} alt="banner" />
    </SC.FirstScreen>
  </Container>
);
