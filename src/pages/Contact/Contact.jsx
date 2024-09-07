import { Container } from "../../components/Container/Container";
import { FirstScreen } from "../../components/FirstScreen/FirstScreen";
import { Link } from "../../components/ui/Link/Link";
import { GetItTouch } from "./GetItTouch/GetItTouch";
import background from "../../images/background.svg";
import banner from "../../images/background_img.png";
import { Contacts } from "./Contacts/Contacts";
import * as SC from "./styles";

export default function Contact() {
  return (
    <SC.Contact>
      <FirstScreen title="Contact">
        <Link to="/contact" className="btnLink">
          Contact
        </Link>
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
}
