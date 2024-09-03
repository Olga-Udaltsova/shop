import background from "../../images/background.svg";
import line from "../../images/line.svg";
import banner from "../../images/img.svg";
import { Container } from "../Container/Container";
import { Link } from "../ui/Link/Link";
import * as SC from "./styles";

export const FirstScreen = ({ title, children }) => (
  <Container>
    <SC.FirstScreen>
      <img src={background} alt="background" />
      <SC.FirstScreenHead>{title}</SC.FirstScreenHead>
      <SC.ButtonsAndLine>
        <SC.Buttons>
          <Link to="/" className="btnHome">
            Home
          </Link>
          {title === "Cart" && <Link to="/shop">Shop</Link>}
          {children}
        </SC.Buttons>
        <img src={line} alt="line" />
      </SC.ButtonsAndLine>
      <img src={banner} alt="banner" />
    </SC.FirstScreen>
  </Container>
);
