import background_img from "../../../images/background_img.png";
import background from "../../../images/background.svg";
import { Container } from "../../../components/Container/Container";
import * as SC from "./styles";

export const News = () => (
  <Container>
    <SC.Background src={background_img} alt="backgound" />
    <SC.News>
      <img src={background} alt="backgound" />
      <SC.Header>Newsletter</SC.Header>
      <p>Be the first to hear about deals, offers and upcoming collections.</p>
      <SC.Subscribe>
        <input placeholder="Enter your email"></input>
        <button>Subscribe</button>
      </SC.Subscribe>
    </SC.News>
  </Container>
);
