import { NavLink } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { FirstScreen } from "../../components/FirstScreen/FirstScreen";
import { GetItTouch } from "./GetItTouch/GetItTouch";
import background from "../../images/background.svg";
import banner from "../../images/background_img.png";
import { Contacts } from "./Contacts/Contacts";
import "../../css/FirstScreen.css";
import * as SC from "./styles";

export const Contact = () => (
  <SC.Contact>
    <FirstScreen title="Contact">
      <NavLink to="/contact" className="btnLink">
        Contact
      </NavLink>
    </FirstScreen>
    <Container>
      <SC.Content>
        <img src={background} alt="background" />
        <GetItTouch />
        <Contacts />
      </SC.Content>
      <SC.Image>
        <img src={banner} alt="banner" />
      </SC.Image>
    </Container>
  </SC.Contact>
);
